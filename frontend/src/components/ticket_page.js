import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from "./Button";
import { useState, useEffect } from "react";
import ConnectionInfo from "./SelectedConnectionInfo";
import { useNavigate } from "react-router-dom"

const TicketPage = () => {

    const navigate = useNavigate();

    const [PassengerType, setPassengerType]=useState(null);
    const [BoardingStops, setBoardingStops]=useState(null);
    const [DestinationStops, setDestinationStops]=useState(null);
    const [BoardingStop, setBoardingStop]=useState(null);
    const [DestinationStop, setDestinationStop]=useState(null);

    const getResult = async () => {

        //ConnectionInfo.url = api/carrier/carrierID/connection/connectionID

        try {
            const res = await fetch(localStorage.Url+'/stops/forConnection');
            const datas = await res.json();
            console.log("Stops:", datas);
            setBoardingStops(datas);
            setDestinationStops(datas);
        }
        catch (error) {
            console.log("error:", error);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            getResult()
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

      const sendTicket = async (object) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(object)
        };

        try {
            const path = localStorage.Url+'/passenger/'+localStorage.UserId+'/ticket';
            console.log("TicketPath:", path);
            const res = await fetch(path, requestOptions);
            const datas = await res.json();
            alert("Vaše rezervace byla odeslána.");
        }
        catch (error) {
            console.log("error:", error);
        }

    };

    const saveTicket = (e) => {

        if(PassengerType === undefined || BoardingStop === undefined || DestinationStop === undefined) {
            alert("Zadejte parametry vaší jízdenky.");
          }

        let object = {
            Type: PassengerType,
            Price: '10',
            BoardingStopId: BoardingStop,
            DestinationStopId: DestinationStop
        }

        console.log("jsonTicket:", object);

        sendTicket(object);

        navigate('/');
    }

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

                <select className="col col-2" value={PassengerType} onChange={e=>setPassengerType(e.target.value)}>
                    <option disabled selected value>Vyberte</option>
                    <option value="adult">Dospělý</option>
                    <option value="student">Student</option>
                    <option value="senior">Senior</option>
                    <option value="child">Dítě do 6 let</option>
                </select>

                {BoardingStops && (
                    <select className="col col-3" value={BoardingStop} onChange={e=>setBoardingStop(e.target.value)}><option disabled selected value>Vyberte</option>
                    {BoardingStops.map((result) => (<option key = {result.id} value = {result.id}>{result.name}</option>))}
                    </select>
                )}

                {DestinationStops && (
                    <select className="col col-4" value={DestinationStop} onChange={e=>setDestinationStop(e.target.value)}><option disabled selected value>Vyberte</option>
                    {DestinationStops.map((result) => (<option key = {result.id} value = {result.id}>{result.name}</option>))}
                    </select>
                )}
                </li>
             </ul>
             <h3 onClick={saveTicket}><Button label='Koupit'/></h3>
        </div>
        <Footer/>
        </div>
        );
}

export default TicketPage;
