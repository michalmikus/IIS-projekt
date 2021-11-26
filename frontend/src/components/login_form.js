import React from 'react';
import InputBox from "./InputBox";
import Button from "./Button";

const LoginForm = () => {
    return (
            <form id="login_form">

                <InputBox label='E-mail' type='email' id='user_email'/>
                <InputBox label='heslo' type='password' id='user_password'/>

                <Button label='Přihlásit se' link='/login'/>

            </form>
    )
}

export default LoginForm;