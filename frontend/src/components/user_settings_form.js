import React from 'react';
import Button from './Button';

import { useState } from "react";
import ConnectionInfo from './SelectedConnectionInfo';


function SettingsForm() {

    const [state, setState] = useState({name: "", surname: "", phone_number: "",address_field: "",country: ""});


    const sendJSON = async (object) => {

        console.log(JSON.stringify(object));

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(object)
        };
        console.log("path=",localStorage.Url+"/passengers/"+localStorage.UserId)
        const path = localStorage.Url+"/passengers/"+localStorage.UserId
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

          console.log(JSON.stringify(PassengerModel));
          sendJSON(PassengerModel);
          setState({name: "", surname: "", phone_number: "",address_field: "",country: ""});
        }

    return (
            <form id="register_form">

                <input type = "text" id="user_name" name="name" placeholder="Jméno" value={state.name} onChange={ handleChange } ></input>

                <input type = "text" id="user_surname" name="surname" placeholder="Přijmení" value={state.surname} onChange={ handleChange }></input>

                <input type = "number" id="user_phone_number" name="phone_number" placeholder="Telefonní číslo" value={state.phone_number} onChange={ handleChange }></input>

                <input type = "address" id="address_field" name="address" placeholder="Adresa" value={state.address} onChange={ handleChange }></input>
                
                <input type = "country" id="country_field" name="country" placeholder="Krajina" value={state.country} onChange={ handleChange }></input>

                <Button label='Uložiť' link='/login' onClick={handleClick}/>

            </form>);

}

export default SettingsForm