import React from 'react';
import Button from './Button'
import { useState } from "react";
import ConnectionInfo from './SelectedConnectionInfo';
import { useNavigate } from "react-router-dom"

function VehicleForm() {

    const navigate = useNavigate();
    
    const [state, setState] = useState({brand:"",model:"",seats:"",description:""});

    const path = localStorage.CarierIdPathCon + "/vehicles";

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
        let vehicleModel = {
            Brand: state.brand,
            Model: state.model,
            NumberOfSeats: state.seats,
            Description: state.description
        }
        console.log(JSON.stringify(vehicleModel));
        sendJSON(vehicleModel);
        setState({brand:"",model:"",seats:"",description:""});

        navigate('/carrier_details');

    }

    return (
            <form id="register_form">

                <input type = "text" id="brand" name="brand" placeholder="Znacka" value={state.brand} onChange={ handleChange }></input>

                <input type = "text" id="model" name="model" placeholder="Model" value={state.model} onChange={ handleChange } ></input>

                <input type = "number" id="seats" name="seats" placeholder="Pocet Sedadiel" value={state.seats} onChange={ handleChange }></input>

                <input type = "text" id="description" name="description" placeholder="Popis" value={state.description} onChange={ handleChange }></input>

                <Button label='Vytvoriť' onClick={handleClick}/>

            </form>
    )
}

export default VehicleForm;