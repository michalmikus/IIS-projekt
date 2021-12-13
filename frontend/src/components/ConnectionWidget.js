import React from "react";
import Button from './Button'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import BaseURL from "./BaseURL"

export const ConnectionWidget = ( props ) => {

    var time = props.timeOfDeparture.substring(11);
    time = time.slice(0, -3); 

    const navigate = useNavigate();

    const [amount, setAmount] = useState(0);

    const setLess = () => {
        if(amount > 0) {
            setAmount(amount - 1);
        }
    }

    const getResult = async () => {

        if(amount === '0') {
            alert("Minimální množštví míst pro zakoupení jízdenky je 1.");
            navigate('/connections');
        }

        else {
            localStorage.ConnectionId = props.connectionId;

            localStorage.Amout = amount;

            try {
                const res = await fetch(BaseURL.path + '/api/TimeTables/info/'+ localStorage.ConnectionId);
                const datas = await res.json();

                //localStorage.Url = api/carrier/carrierID/connection/connectionID
                const editedUrl = datas.url.slice(0, -12) // trim /passengers
                localStorage.Url = BaseURL.path + '/' + editedUrl;

            }
            catch (error) {
                console.log("error:", error);
            }

            navigate('/reserve');
        }

    };


    return (
        <div id="widget">
            <div id="reserveWidget">
                <button onClick={setLess}>-</button>
                <h3 key={props.id}>{props.stopName}    {time}</h3>
                <button onClick={() => setAmount(amount + 1)}>+</button>
            </div>
            <h2>{amount}</h2>
            <h3 key={props.id} onClick={getResult}><Button label='Zarezervovat'/></h3>
        </div>
    );
}

export default ConnectionWidget;