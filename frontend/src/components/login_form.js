import React from 'react';

const LoginForm = () => {
    return (
            <form id="login_form">

                <input type = "email" id="user_email" name="user_email" placeholder="E-mail"></input>

                <input type = "password" id="user_password" name="user_password" placeholder="Heslo"></input>

                <button type="submit">Přihlásit se </button>

            </form>
    )
}

export default LoginForm;