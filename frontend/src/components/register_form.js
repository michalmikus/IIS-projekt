import React from 'react';
import Button from './Button'
import { useState } from "react";
import ConnectionInfo from './SelectedConnectionInfo';
import { useNavigate } from "react-router-dom"

function RegisterForm() {

    const navigate = useNavigate();
    
    const [state, setState] = useState({name: "", surname: "",login: "", email: "", password: "", address_field: "", phone_number: ""});

    const path = localStorage.Url + '/passengers/register-passenger';

    const sendJSON = async (object) => {

        console.log(JSON.stringify(object));

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(object)
        };

        try {
            const res = await fetch(path, requestOptions);
            const datas = await res.json();
            localStorage.UserId = datas.userId;
            console.log("loginForm:", ConnectionInfo.url);
        }
        catch (error) {
            console.log("error:", error);
        }

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
        let address = {
            Name: state.name,
            Surname: state.surname,
            Address: state.address,
            Country: state.country
        }

        let PassengerModel = {
            address,
            PhoneNumber: state.phone_number,
        }

        let UserDetail = {
            Name: state.login,
            Email: state.email,
            Password: state.password,
        }

        let registrationModel = {
            PassengerModel,               
            UserDetail
        }

        console.log(JSON.stringify(registrationModel));
        sendJSON(registrationModel);
        setState({name: "", surname: "",login: "", email: "", password: "", address_field: "", phone_number: ""});

        navigate('/login');

    }

    return (
            <form id="register_form">

                <input type = "email" id="user_email" name="email" placeholder="E-mail" value={state.email} onChange={ handleChange }></input>

                <input type = "text" id="user_name" name="name" placeholder="Jméno" value={state.name} onChange={ handleChange } ></input>

                <input type = "text" id="user_surname" name="surname" placeholder="Přijmení" value={state.surname} onChange={ handleChange }></input>

                <input type = "text" id="login" name="login" placeholder="Užívaťeľské meno" value={state.login} onChange={ handleChange }></input>

                <input type = "password" id="user_password" name="password" placeholder="Heslo" value={state.password} onChange={ handleChange }></input>

                <input type = "number" id="user_phone_number" name="phone_number" placeholder="Telefonní číslo" value={state.phone_number} onChange={ handleChange }></input>

                <input type = "address" id="address_field" name="address" placeholder="Adresa" value={state.address} onChange={ handleChange }></input>
                
                <input type = "country" id="country_field" name="country" placeholder="Krajina" value={state.country} onChange={ handleChange }></input>

                <Button label='Registrovat' onClick={handleClick}/>

            </form>
    )
}

export default RegisterForm;