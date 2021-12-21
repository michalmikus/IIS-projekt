import React from "react";
import Button from "./Button";
import { useState } from "react";
import CarrierDetail from "./carrierDetail";
import ProfileButton from "./profile_button";
import { useNavigate } from "react-router-dom"


export const TicketEmpWidget = ( props ) => {

    const aprooveTicket = async (event) => {

        const path = localStorage.CarierIdPathCon+"/ticket/"+props.Id
        console.log("cesta na potvrdenie:" , path)
        let object = {
            Price: '10',
        }
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(object) 
          };

        try {
            const res = await fetch(path,requestOptions);
            const datas = await res.json();
            console.log("ticket approove response :", datas);
        }
        catch (error) {
            console.log("error:", error);
        }

    };

    if (1) {
        return (
            <div id="widget">
                <div id="ticketEmpWidget">
                    <h3> {props.BoardingStopName} -> {props.DestinationStopName} </h3>
                    <h3> {props.Type}</h3>
                    <h3> {props.Price} Kč </h3>
                    <button onClick={aprooveTicket}> Potvrdit listok </button>
                </div>
            </div>
        );
    }

    else {
        return (<></>);
    }

}

export default TicketEmpWidget