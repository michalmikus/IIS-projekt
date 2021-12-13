import React from 'react';
import LinkButton from "./LinkButton";
import { useState } from "react";
import ConnectionInfo from './SelectedConnectionInfo'
import { useNavigate } from "react-router-dom"
import BaseURL from "./BaseURL"

function LoginForm() {

  const navigate = useNavigate();

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

        const path = BaseURL.path + '/api/account/sign-in';

      try {
          const res = await fetch(path, requestOptions);
          if(res.status === 200) {
            const datas = await res.json();
            ConnectionInfo.userId = datas.userId;
            localStorage.UserId = datas.userId;
            localStorage.UserType = datas.userType;
            localStorage.SignedIn = true;
            console.log(localStorage.UserType)

            if(localStorage.UserType == "Admin") {
              navigate("/list_carriers")
            }

            else if (localStorage.UserType === "carrier") {
              
            }

            else {
              navigate(localStorage.LastUrl);              
            }

          }

          else{
            navigate('/login');
            await alert("Špatné přihlašovací údaje.");
          }

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
        <LinkButton label='Odeslat' link='/ticket_page' onClick={handleClick}/>

      </form>
    )

}

export default LoginForm;
