import React from 'react';
import Button from './Button'
import { useState , useEffect } from "react";
import ConnectionInfo from './SelectedConnectionInfo';
import { useNavigate } from "react-router-dom"
import BaseURL from './BaseURL';


function ConnectionForm() {

    const navigate = useNavigate();
    
    const [state, setState] = useState({name:"",seats:"",vehicleId:""});
    const [vehicles, setVehicles] = useState(null);
    const [vehicle, setChoosenVehicle] = useState(null);

    const path = localStorage.CarierIdPathCon + "/connection";

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
            console.log("sentInfo: ", datas)
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
        let ConnectionDetail = {
            name: state.name,
            reservedSeats: 0,
            vehicleId: vehicle
        }
        console.log(JSON.stringify(ConnectionDetail));
        sendJSON(ConnectionDetail);
        setState({name:"",seats:"",seats:"",description:""});

        navigate('/carrier_details');

    }

    
    const getResult = async () => {
        const path = BaseURL.path + "/api/carrier/" + localStorage.carrierID + "/vehicles/all"
        console.log("getVehicles: ",path)
        try {
            const res = await fetch(path);
            const datas = await res.json();
            console.log("vehicles of carrier:", datas);
            setVehicles(datas);
        }
        catch (error) {
            console.log("error:", error);
        }
    };

    useEffect(() => {
        getResult();
    }, []);


    return (
            <form id="register_form">

                <input type = "text" id="name" name="name" placeholder="Odkiaľ - Kam" value={state.name} onChange={ handleChange }></input>


                {vehicles && (
                    <select value={vehicle} onChange={e=>setChoosenVehicle(e.target.value)}><option disabled selected value>Vyberte</option>
                    {vehicles.map((result) => (<option key = {result.id} value = {result.id}>{result.brand}</option>))}
                    </select>
                )}


                <Button label='Vytvoriť' onClick={handleClick}/>

            </form>
    )
}

export default ConnectionForm;