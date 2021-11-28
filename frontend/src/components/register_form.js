import React from 'react';
import Button from './Button'


import { useState } from "react";

function RegisterForm() {
    const [state, setState] = useState({name: "", surname: "", email: "", password: "", password_confirmation: "", phone_number: "", card_number: "", card_expiration: "", card_security_code: ""});

    const sendJSON = async (object) => {

        console.log(JSON.stringify(object));

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(object)
        };
    
        const res = fetch('https://localhost:7293/api/account/sign-in', requestOptions)

        .then(res => {
            console.log("response: ", res);
        })
        .catch(err => {
            console.log("error:", err);
        });

    }

    const handleChange =evt => {

        const name = evt.target.name;
        const value = evt.target.value;
        setState({
            ...state,[name]: value
        })
    }

    const handleClick = (e) => {

            e.preventDefault();
            let object = {
                Name: state.name+state.surname,
                Email: state.email,
                Password: state.password,
                PhoneNumber: state.phone_number
            }

          console.log(JSON.stringify(object));
          setState({name: "", surname: "", email: "", password: "", password_confirmation: "", phone_number: "", card_number: "", card_expiration: "", card_security_code: ""});
        }

    return (
            <form id="register_form">

                <input type = "text" id="user_name" name="name" placeholder="Jméno" value={state.name} onChange={ handleChange } ></input>

                <input type = "text" id="user_surname" name="surname" placeholder="Přijmení" value={state.surname} onChange={ handleChange }></input>

                <input type = "email" id="user_email" name="email" placeholder="E-mail" value={state.email} onChange={ handleChange }></input>

                <input type = "password" id="user_password" name="password" placeholder="Heslo" value={state.password} onChange={ handleChange }></input>

                <input type = "number" id="user_phone_number" name="phone_number" placeholder="Telefonní číslo" value={state.phone_number} onChange={ handleChange }></input>

                <Button label='Registrovat se' link='/login' onClick={handleClick}/>

            </form>
    )
}

export default RegisterForm;