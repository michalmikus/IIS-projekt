import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from "./Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CarrierDetail from "./carrierDetail";

const CarrierProfileDetails = () => {

    const [carrier, setCarrier] = useState({carrierName: "",taxNumber: "", telephoneNumber: "", publicRelationsContact: ""}) 
    
    const getDetail = async () => {

        try {
            console.log("path:",CarrierDetail.path)
            const res = await fetch(CarrierDetail.path);
            const datas = await res.json();
            console.log("Filtered Connections:", datas);
            setCarrier(datas);
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
                <h3>Meno:          {carrier.carrierName}</h3>
                <h3>ICO:           {carrier.taxNumber}</h3>
                <h3>Kontakt:           {carrier.telephoneNumber}</h3>
                <h3>Kontaktna Osoba:            {carrier.publicRelationsContact}</h3>
            </div>
            
            <Link to="/change_carrier">
            <Button label = "Editovat Profil " /> 
            </Link>
            <Link to ="/settings">
            <Button label = "Přidat spoj" />
            </Link>
            <Footer/>
        </div>
    );
}

export default CarrierProfileDetails;