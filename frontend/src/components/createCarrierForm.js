import React from 'react';
import Button from './Button'
import { useState } from "react";
import ConnectionInfo from './SelectedConnectionInfo';
import { useNavigate } from "react-router-dom"
import BaseURL from "./BaseURL"

function CreateCarrierForm() {

    const navigate = useNavigate();
    
    const [state, setState] = useState({fullname: "",login: "", email: "", password: "", address_field: "", phone_number: "",taxnumber: "", telephonenumber: "", pr_conntact: "", country: ""});

    const path = BaseURL.path + '/api/carriers';

    const [carrierId , setCarrierId] = useState("")

    const sendJSON = async (object) => {


        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(object)
        };

        try {
            const res = await fetch(path, requestOptions);
            const datas = await res.json();
            console.log("loginForm:", datas);
            return datas
        }
        catch (error) {
            console.log("error:", error);
        }

    }

    const sendCarrierJSON = async (object,carrierInfo) => {

        console.log("sendCarrierData:",JSON.stringify(object));

        console.log("newCarrierId:",carrierInfo);

        const pathCarrier = BaseURL.path + '/api/carrier/'+carrierInfo.id+"/employees/register-employee";

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(object)
        };

        try {
            const res = await fetch(pathCarrier, requestOptions);
            const datas = await res.json();
            console.log("Spravca :",datas)
            
        }
        catch (error) {
            console.log("error:", error);
        }
        localStorage.CarierIdPathCon = BaseURL.path + '/api/carrier/'+carrierInfo.id
        localStorage.CarierIdPathAll = BaseURL.path + '/api/carriers/'+carrierInfo.id
        
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
            address,
            FullName: state.fullname,
            PhoneNumber: state.phone_number,
            role: "Spravca"
        }

        let UserDetail = {
            Name: state.login,
            Email: state.email,
            Password: state.password,
        }

        let registrationModel = {
            EmployeeModel,               
            UserDetail
        }

        let carrierModel = {
            Carriername: state.carriername,
            TaxNumber: state.taxnumber,
            TelephoneNumber: state.telephonenumber,
            PublicRelationsContact: state.pr_conntact
        }

        console.log("carrierModel:",JSON.stringify(carrierModel));
        console.log("registrationModel:",JSON.stringify(registrationModel));
        

        sendJSON(carrierModel).then(result => sendCarrierJSON(registrationModel,result))
 
        
        setState({fullname: "",login: "", email: "", password: "", address_field: "", phone_number: "",taxnumber: "", telephonenumber: "", pr_conntact: "", country: ""});

        navigate('/list_carriers');

    }

    return (
            <form id="register_form">

                <input type = "email" id="user_email" name="email" placeholder="E-mail" value={state.email} onChange={ handleChange }></input>

                <input type = "text" id="user_fullname" name="name" placeholder="Cele Jméno" value={state.name} onChange={ handleChange } ></input>

                <input type = "text" id="login" name="login" placeholder="Užívaťeľské meno" value={state.login} onChange={ handleChange }></input>

                <input type = "password" id="user_password" name="password" placeholder="Heslo" value={state.password} onChange={ handleChange }></input>

                <input type = "address" id="address_field" name="address" placeholder="Adresa" value={state.address} onChange={ handleChange }></input>
                
                <input type = "country" id="country_field" name="country" placeholder="Krajina" value={state.country} onChange={ handleChange }></input>

                <input type = "text" id="user_name" name="carriername" placeholder="Nazov Dopravcu" value={state.carriername} onChange={ handleChange } ></input>

                <input type = "text" id="tax_num" name="taxnumber" placeholder="IČO" value={state.taxnumber} onChange={ handleChange }></input>

                <input type = "text" id="pr_con" name="pr_conntact" placeholder="Kontaktná osoba" value={state.pr_conntact} onChange={ handleChange }></input>

                <input type = "number" id="user_phone_number" name="telephonenumber" placeholder="Telefonní číslo" value={state.telephonenumber} onChange={ handleChange }></input>
                <Button label='Registrovat' onClick={handleClick}/>

            </form>
    )
}

export default CreateCarrierForm;