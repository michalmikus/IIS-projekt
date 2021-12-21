import React from "react";
import Header from './Header';
import Footer from './Footer';
import LinkButton from "./LinkButton";
import { useState, useEffect } from "react";
import ConnectionInfo from "./SelectedConnectionInfo";
import { useNavigate } from "react-router-dom"
import TicketWidget from "./TicketWidget.js";

const UserProfile = () => {

    const navigate = useNavigate();

    const [users, setUsers] = useState({name: "", surname: "", email: "", phoneNumber: "", country: "", address:""})
    const [tickets, setTickets] = useState(null)

     const getUserTickets = async() => {

        try {
            const res = await fetch(localStorage.Url+'/passenger/'+localStorage.UserId+'/ticket/all');
            const datas = await res.json();
            console.log("Ticket data", datas);
            setTickets(datas);
        }
        catch (error) {
            console.log("error:", error);
        }
     }

     const getUserInfo = async () => {

        getUserTickets()

        try {
             const res = await fetch(localStorage.Url+'/passengers/'+localStorage.UserId);
             const datas = await res.json();
             setUsers(datas);
         }
        catch (error) {
            console.log("error:", error);
         }

     };

     useEffect(() => {
        const timer = setTimeout(() => {
            getUserInfo()
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

    const doNothing = () => {
        if(localStorage.Amount < 1) {
            alert("Není vybraný žádný spoj. Vyplňte prosím údaje spojení.");
            navigate('/');
        }

    }

    return (
        <div>
            <Header/>

            <div className = "user">
                <h3>{users.address.name} {users.address.surname}</h3>
                <h4> {users.address.address} </h4>
                <h4> {users.phoneNumber} </h4>
                <h4> {users.email} </h4>
                <h4> {users.address.country} </h4>
            </div>

            <LinkButton label = "Koupit vybranou jízdenku" link="/ticket_page" onClick={doNothing}/>
            <LinkButton label = "Nastavení" link="/settings" onClick={doNothing}/>
            <h2> Historie nakoupených jízdenek </h2>
            {tickets && ( tickets.map ((ticket) => ( 
              <TicketWidget key={ticket.id} BoardingStopName={ticket.boardingStopName} DestinationStopName={ticket.destinationStopName} Price={ticket.price} Type={ticket.type} EmployeeId={ticket.confirmingEmploeeId}/>
            )))}

            <Footer/>
        </div>
    );
}

export default UserProfile;
