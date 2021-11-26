import React from 'react';
import InputBox from "./InputBox";
import Button from "./Button";
import { useState } from "react";

function LoginForm() {

    const [state, setState] = useState({email: "", password: ""});

    function handleChange(e) {
        setState(e.target.value);
        console.log();
    }

    const onClick = (event) => {
      
    }
  
    return (
      <form id="login_form">
        <input type = "email" id='user_email' name='email' placeholder='E-mail' value={state.email} onChange={ handleChange }></input>
        <input type = "password" id='user_password' name='password' placeholder='Heslo' value={state.password} onChange={ handleChange }></input>
        <Button label='Odeslat' link='/' onClick={onClick}/>
      </form>
    )
        
}

export default LoginForm;