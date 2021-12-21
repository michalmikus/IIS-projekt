import React from 'react';
import Button from './Button'
import { useState } from "react";
import ConnectionInfo from './SelectedConnectionInfo';
import { useNavigate } from "react-router-dom"

function EmployeeForm() {

    const navigate = useNavigate();
    
    const [state, setState] = useState({fullname: "",login: "", email: "", password: "", address_field: "", phone_number: ""});

    const path = localStorage.CarrierInfo + "/employees/register-employee";

    const sendJSON = async (object) => {

        console.log(JSON.stringify(object));

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(object)
        };

        try {
            const res = await fetch(path, requestOptions);
            const datas = await res.json();
            console.log("loginForm:", ConnectionInfo.url);
        }
        catch (error) {
            console.log("error:", error);
        }

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
            Address: state.address,
            Country: state.country
        }

        let EmployeeModel = {
            FullName: state.fullname,
            role: state.role,
            address,
        }

        let UserDetail = {
            Name: state.login,
            Email: state.email,
            Password: state.password,
            PhoneNumber: state.phone_number,
        }

        let registrationModel = {
            EmployeeModel,               
            UserDetail
        }

        console.log(JSON.stringify(registrationModel));
        sendJSON(registrationModel);
        setState({fullname: "",role: "",login: "", email: "", password: "", address_field: "", phone_number: ""});

        navigate('/carrier_details');

    }

    return (
            <form id="register_form">

                <input type = "email" id="user_email" name="email" placeholder="E-mail" value={state.email} onChange={ handleChange }></input>

                <input type = "text" id="fullname" name="fullname" placeholder="Celé Jméno" value={state.fullname} onChange={ handleChange } ></input>

                <input type = "text" id="role" name="role" placeholder="Rola" list='roles' value={state.role} onChange={ handleChange } ></input>
                <datalist id="roles">
                    <option value="Vodic"></option>
                    <option value="Personal"></option>
                </datalist>
                <input type = "text" id="login" name="login" placeholder="Užívaťeľské meno" value={state.login} onChange={ handleChange }></input>

                <input type = "password" id="user_password" name="password" placeholder="Heslo" value={state.password} onChange={ handleChange }></input>

                <input type = "number" id="user_phone_number" name="phone_number" placeholder="Telefonní číslo" value={state.phone_number} onChange={ handleChange }></input>

                <input type = "address" id="address_field" name="address" placeholder="Adresa" value={state.address} onChange={ handleChange }></input>
                
                <input type = "country" id="country_field" name="country" placeholder="Krajina" value={state.country} onChange={ handleChange }></input>

                <Button label='Registrovat' onClick={handleClick}/>

            </form>
    )
}

export default EmployeeForm;