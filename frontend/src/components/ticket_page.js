import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from "./Button";
import { useState, useEffect } from "react";
import ConnectionInfo from "./SelectedConnectionInfo";

const TicketPage = () => {

    const [selectedID, setSelects]=useState(null);
    const [PassengerType, setPassengerType]=useState(null);
    const [BoardingStop, setBoardingStop]=useState(null);
    const [DestinationStop, setDestinationStop]=useState(null);

    ConnectionInfo.url += '/'+ConnectionInfo.amout+'/ticket';

    const saveTicket = async () => {
        try {
            const res = await fetch(ConnectionInfo.url);
            const datas = await res.json();
            console.log("All connections:", datas);
        }
        catch (error) {
            console.log("error:", error);
        }
    };

    return (
    <div>
    <Header/>
    <div className="container">
        <h2>Rezervace</h2>
        <ul className="responsive-table">
            <li className="table-header">
            <div className="col col-2">Typ pasažéra</div>
            <div className="col col-3">Odkud</div>
            <div className="col col-4">Kam</div>
            </li>
            <li className="table-row">

            <select className="col col-2" value={PassengerType} default onChange={e=>setPassengerType(e.target.value)}>
                <option value="adult">Dospělý</option>
                <option value="student">Student</option>
                <option value="senior">Senior</option>
                <option value="child">Dítě do 6 let</option>
            </select>

            {BoardingStop && (
                <select className="col col-3" value={BoardingStop} default onChange={e=>setBoardingStop(e.target.value)}>{BoardingStop.map((result) => (<option key = {result.id} value = {result.id}>{result.name}</option>))}
                </select>
            )}
            {DestinationStop && (
                <select className="col col-4" value={DestinationStop} default onChange={e=>setDestinationStop(e.target.value)}>{DestinationStop.map((result) => (<option key = {result.id} value = {result.id}>{result.name}</option>))}
                </select>
            )}
            </li>
         </ul>
         <h3 onClick={saveTicket}><Button label='Koupit' link='/connections'/></h3>
    </div>
    <Footer/>
    </div>
    );
}

export default TicketPage;