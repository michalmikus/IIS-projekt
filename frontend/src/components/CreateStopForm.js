import React from 'react';
import Button from './Button'
import { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom"
import BaseURL from './BaseURL';


function StopForm() {

    const navigate = useNavigate();
    
    const [state, setState] = useState({name:"",time:""});
    const [stops, setStops] = useState(null);
    const [stop, setStop] = useState(null);

    

    const sendJSON = async (object) => {
        const path = localStorage.CarierIdPathCon + "/stops";

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
        
        let StopDetail = {
            name: state.name,
        }

        let StopTimeDetail = {
            StopDetail: StopDetail,
            timeOfDeparture: state.time
        }

        console.log(JSON.stringify(StopTimeDetail));
        sendJSON(StopTimeDetail);


        setState({name:"",time:""});

        navigate('/carrier_details');

    }

    const getResult = async () => {

        //ConnectionInfo.url = api/carrier/carrierID/connection/connectionID

        try {
            const res = await fetch(localStorage.Url+'/stops');
            const datas = await res.json();
            console.log("Stops:", datas);
            setStops(datas)
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

            <input type = "text" id="name" name="name" placeholder="Názov zastávky" value={state.name} onChange={ handleChange }></input>

            <input type = "location" id="location" name="location" placeholder="Lokácia" value={state.name} onChange={ handleChange }></input>

            <Button label='Vytvoriť Novú Zastávku' onClick={handleClick}/>

        

            {stops && (
                <select value={stop} onChange={e=>setStop(e.target.value)}><option disabled selected value>Vyberte</option>
                {stops.map((result) => (<option key = {result.id} value = {result.id}>{result.name}</option>))}
                </select>
            )}
            
            <input type = "time" id="time" name="time" placeholder="Čas odjazdu" value={state.time} onChange={ handleChange }></input>
            

            <Button label='Pridať čas odjazdu' onClick={handleClick}/>

        </form>
    )
}

export default StopForm;