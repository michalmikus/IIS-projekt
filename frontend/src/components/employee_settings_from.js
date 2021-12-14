import React from 'react';
import Button from './Button';
import { useState } from "react";
import BaseURL from "./BaseURL"

function EmployeeSettingsForm() {

    const [state, setState] = useState({fullName: "", address: "", email: ""});


    const sendJSON = async (object) => {

        console.log(JSON.stringify(object));

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(object)
        };

        console.log("path=", localStorage.CarierIdPathCon)
        const path = localStorage.CarierIdPathCon;

        try {
            const res = await fetch(path, requestOptions);
            const datas = await res.json();

            if (res.ok)
                redirectToProfile();
            else
                alert("Nastala chyba skúste znovu.");
        }
        catch (error) {
            console.log("error:", error);
        }
      }
    
    function redirectToProfile(){
        alert("Úspešné uloženie.");
        // redirect to user profile 
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

            let Employee = {
                fullName: state.fullName,
                address: state.address,
                email: state.email
            }

          console.log(JSON.stringify(Employee ));
          sendJSON(Employee );
          setState({name: "", email: "", address:""});
        }

    return (
            <form id="register_form">

                <input type = "text" id="employee_name" name="fullName" placeholder="Celé Jméno" value={state.fullName} onChange={ handleChange } ></input>

                <input type = "email" id="employee_email" name="email" placeholder="Email" value={state.email} onChange={ handleChange }></input>

                <input type = "address" id="address_field" name="address" placeholder="Adresa" value={state.address} onChange={ handleChange }></input>
                
                <Button label='Uložit' link='/login' onClick={handleClick}/>

            </form>);

}

export default EmployeeSettingsForm