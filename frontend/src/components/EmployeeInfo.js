import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from "./Button";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import CarrierDetail from "./carrierDetail";
import ProfileButton from "./profile_button";
import BaseURL from "./BaseURL"
import ConnectionInfoWidget from "./connectionInfoWidget";
import TicketWidget from "./TicketWidget.js"

const EmployeeInfo = () => {

    const navigate = useNavigate();

    const [userInfo , setInfo] = useState({adress: "", carrierId: "", email: "", fullName: "", id: "", role:"", userId:""})
    const [carrierInfo , setCarrier] = useState({adress: {name:"", surname:"", address:"", country:""}, carrierName:"", id:"", publicRelationsContact:"", taxNumber:"", telephoneNumber:""})
    const [tickets, setTickets] = useState(null)

    var carrierId;

    const getDetail = async () => {

        const path = localStorage.CarierIdPathCon.substring(0, localStorage.CarierIdPathCon.length - 36) + localStorage.EmployeeId;

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          };

        try {
            console.log("path:",path)
            const res = await fetch(path,requestOptions);
            const datas = await res.json();
            console.log("employee info:", datas);
            setInfo(datas);
            carrierId = datas.carrierId;
        }
        catch (error) {
            console.log("error:", error);
        }

        getCarrierInfo();

    };

    const getCarrierInfo = async () => {
        try {

            console.log("Id:" + carrierId);

            const path = BaseURL.path + '/api/carriers/' + carrierId;
            
            console.log("path:", path)
            const res = await fetch(path);
            const datas = await res.json();
            console.log("carrier info:", datas);
            setCarrier(datas);
        }
        catch (error) {
            console.log("error:", error);
        }

        getTickets();
    }

    const getTickets = async () => {

        try {
            const res = await fetch(BaseURL.path + '/api/carriers/' +carrierId+'/passenger/'+userInfo.id+'/ticket/allForCarrier');
            const datas = await res.json();
            console.log("Ticket data", datas);
            setTickets(datas);
        }
        catch (error) {
            console.log("error:", error);
        }
    }

    useEffect(() => {
        getDetail();
    }, []);

    return (
        <div>
            <Header/>
            <div className = "user">
                <h3> {userInfo.fullName}</h3>
                <h4> {carrierInfo.carrierName} </h4>
                <h4> {userInfo.email} </h4>
                <h4> {userInfo.adress} </h4>
            </div>

            <ProfileButton link={"/employee_settings"} label="Editovat profil" />

            {tickets && ( tickets.map ((ticket) => ( 
             <TicketWidget key={ticket.id} BoardingStopName={ticket.boardingStopName} DestinationStopName={ticket.destinationStopName} Price={ticket.price} Type={ticket.type}/>
          )))}

        </div>
    );
}

export default EmployeeInfo;
