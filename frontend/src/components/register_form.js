import React from 'react';
import Button from './Button'

const RegisterForm = () => {
    const onClick = () => {
        console.log("Click")
    }

    return (
            <form id="register_form">

                <input type = "text" id="user_name" name="user_name" placeholder="Jméno"></input>

                <input type = "text" id="user_surname" name="user_surname" placeholder="Přijmení"></input>

                <input type = "email" id="user_email" name="email" placeholder="E-mail"></input>

                <input type = "password" id="user_password" name="user_password" placeholder="Heslo"></input>

                <input type = "password" id="user_password_confirmation" name="user_password_confirmation" placeholder="Potvrdit heslo"></input>

                <input type = "text" id="user_card_number" name="user_card_number" placeholder="Číslo karty"></input>

                <input type = "text" id="user_card_expiration" name="user_card_expiration" placeholder="Platnost karty"></input>
                
                <input type = "text" id="user_card_security_code" name="user_card_security_code" placeholder="Bezpečnostní kód karty"></input>

                <Button label='Registrovat se' link='/' onClick='onClick'/>

            </form>
    )
}

export default RegisterForm;