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
import TicketEmpWidget from "./TicketEmpWidget.js"

const EmployeeInfo = () => {

    const navigate = useNavigate();

    const [userInfo , setInfo] = useState({adress: "", carrierId: "", email: "", fullName: "", id: "", role:"", userId:""})
    const [carrierInfo , setCarrier] = useState({adress: {name:"", surname:"", address:"", country:""}, carrierName:"", id:"", publicRelationsContact:"", taxNumber:"", telephoneNumber:""})
    const [tickets, setTickets] = useState(null)

    var carrierId;

    const getDetail = async () => {

        let employeeId = localStorage.CarierIdPathCon.slice(localStorage.CarierIdPathCon.length-36)

        const path = localStorage.CarrierInfo + "/employees/" + employeeId

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

            const path = localStorage.CarriersInfo;
            
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
        const path = localStorage.CarrierInfo +'/connection/'+"bd576c2f-02a8-40af-b045-0bc420573ed9"+'/passenger/'+'bd576c2f-02a8-40af-b045-0bc420573ed9'+'/ticket/allForCarrier'
        console.log("getTicketPath:", path)
        try {
            const res = await fetch(path);
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
             <TicketEmpWidget key={ticket.id} Id={ticket.id} BoardingStopName={ticket.boardingStopName} DestinationStopName={ticket.destinationStopName} Price={ticket.price} Type={ticket.type}/>
          )))}

        </div>
    );
}

export default EmployeeInfo;
