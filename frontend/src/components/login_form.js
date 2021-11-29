import React from 'react';
import InputBox from "./InputBox";
import Button from "./Button";
import { useState } from "react";
import StatusUser from "./Status";
import ConnectionInfo from './SelectedConnectionInfo'
import { useNavigate } from "react-router-dom"

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

      const path = 'https://localhost:7293/api/account/sign-in';

      try {
          const res = await fetch(path, requestOptions);
          const datas = await res.json();
          console.log(datas);
          if(res.ok) {
            localStorage.UserId = datas.userId;
            localStorage.UserType = datas.userType;
            localStorage.SignedIn = true;
            navigate('/user_profile');
          }
          else{
            alert("Špatné přihlašovací údaje.");
          }
=======
>>>>>>> 528dcb42ca74f1129d14f89f25c40305649f8e51
>>>>>>> a01b999318e7d28aa1521a7c356f03f1141dc131
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
        <Button label='Odeslat' onClick={handleClick}/>

      </form>
    )

}

export default LoginForm;
