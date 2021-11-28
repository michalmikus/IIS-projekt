import React from 'react';
import Button from './Button';

import { useState } from "react";


function SettingsForm() {

    const [state, setState] = useState({name: "", surname: "", email: "", password: "", phone_number: "", card_number: "", card_expiration: "", card_security_code: ""});

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
            PhoneNumber: state.phone_number,
            CardNumber: state.card_number,
            CardExpiration: state.card_expiration,
            CardSecurityCode: state.card_security_code
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

            <input type = "number" id="user_card_number" name="card_number" placeholder="Číslo karty" value={state.card_number} onChange={ handleChange }></input>

            <input type = "text" id="user_card_expiration" name="card_expiration" placeholder="Platnost karty"value={state.card_expiration} onChange={ handleChange }></input>

            <input type = "text" id="user_card_security_code" name="card_security_code" placeholder="Bezpečnostní kód karty"value={state.card_security_code} onChange={ handleChange }></input>

            <Button label='Uložit změny' link='/' onClick={handleClick}/>

        </form>
);

}

export default SettingsForm