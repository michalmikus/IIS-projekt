import React from 'react';
import InputBox from "./InputBox";
import Button from "./Button";
import { useState } from "react";
import StatusUser from "./Status";
import ConnectionInfo from './SelectedConnectionInfo'

function LoginForm() {

    const [state, setState] = useState({email: "", password: ""});

    const handleChange =evt => {

        const name = evt.target.name;
        const value = evt.target.value;
        setState({
            ...state,[name]: value
        })
    }

    const sendJSON = async (object) => {

      console.log(JSON.stringify(object));

      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(object)
      };

      const path = 'https://localhost:7293/api/account/sign-in';
    
      try {
          const res = await fetch(path, requestOptions);
          const datas = await res.json();
          ConnectionInfo.url += datas.userId;
          console.log("loginForm:", ConnectionInfo.url);
      }
      catch (error) {
          console.log("error:", error);
      }
    }

    const handleClick = (e) => {

            let object = {

                Email: state.email,
                Password: state.password

            }

           // aby to mělo ten požadovanej format, tak je to nutný dát do toho stringify
          sendJSON(object);

          //reset formuláře
          setState({email: "", password: ""}); 

    }


    return (
      <form id="login_form">
        <input type = "email" id='user_email' name='email' placeholder='E-mail' value={state.email} onChange={ handleChange }></input>
        <input type = "password" id='user_password' name='password' placeholder='Heslo' value={state.password} onChange={ handleChange }></input>
        <Button label='Odeslat' link='/user_profile' onClick={handleClick}/>
  
      </form>
    )

}

export default LoginForm;