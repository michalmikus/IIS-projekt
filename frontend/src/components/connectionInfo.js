import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from "./Button";
import { useState, useEffect } from "react";
import CarrierDetail from "./carrierDetail";
import ProfileButton from "./profile_button";
import BaseURL from "./BaseURL"
import ConnectionInfoWidget from "./connectionInfoWidget";

const ConnectionInfo = () => {

    const [connectionInfo , setInfo] = useState("")
    const [stopsInfo , setStops] = useState("")

    const getDetail = async () => {

        try {
            console.log("path:",localStorage.CarierIdPathCon)
            const res = await fetch(localStorage.CarierIdPathCon);
            const datas = await res.json();
            console.log("Connection info:", datas);
            setInfo(datas);
        }
        catch (error) {
            console.log("error:", error);
        }

        try {
            console.log("path:",localStorage.CarierIdPathCon)
            const res = await fetch(localStorage.CarierIdPathCon + '/stops/forConnection');
            const datas = await res.json();
            console.log("Stops info:", datas);
            setStops(datas);
        }
        catch (error) {
            console.log("error:", error);
        }

    };

    useEffect(() => {
        getDetail();
    }, []);

    return (
        <div>
            <Header/>
            <div className = "carrier">
                <h3>Název: {connectionInfo.name}</h3>
                <h3>Dopravce:  {localStorage.CarrierName}</h3>
            </div>

            <ProfileButton link={"/"} label="Editovat Spoj" onClink={getDetail}/>
            <ProfileButton link={"/create_stop"} label="Přidat zastávku"/>

            {stopsInfo && ( stopsInfo.map ((stop) => (
              <ConnectionInfoWidget id={stop.id} stopName={stop.name} link={'/stop_info'}/>)))}

        </div>
    );
}

export default ConnectionInfo;
