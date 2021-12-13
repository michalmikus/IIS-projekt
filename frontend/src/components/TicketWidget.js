import React from "react";
import Button from "./Button";
import { useState } from "react";
import CarrierDetail from "./carrierDetail";
import ProfileButton from "./profile_button";
import { useNavigate } from "react-router-dom"


export const TicketWidget = ( props ) => {

    if (props.BoardingStopName !== "") {
        return (
            <div id="widget">
                <div id="ticketWidget">
                    <h3> {props.BoardingStopName} -> {props.DestinationStopName} </h3>
                    <h3> {props.Type}</h3>
                    <h3> {props.Price} Kč </h3>
                </div>
            </div>
        );
    }

    else {
        return (<></>);
    }

}

export default TicketWidget