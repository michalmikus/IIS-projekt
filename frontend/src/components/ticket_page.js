import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from "./Button";
import { useState } from "react";
import Ticket from "./ticket"

const TicketPage = () => {

    const [tickets, setTickets] = useState( [
        {
            travel_class: "1",
            passenger_type: "Nigga",
            boarding_stop: "Proškovo náměstí",
            destination_stop: "Hlavní nádraží"
        }
     ]
    )    

    return (
    <div>
        <Header/>
        <div className = "ticket">
            {tickets.map((ticket) => (<Ticket ticket={ticket} />
            ))}
        </div>
        <Footer/>
    </div>
    );
}

export default TicketPage;