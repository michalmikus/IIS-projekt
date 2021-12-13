import React from "react";
import Header from './Header';
import Footer from './Footer';
import LinkButton from "./LinkButton";
import { useNavigate } from "react-router-dom"

const CarrierProfile = () => {

    const navigate = useNavigate();

    if(localStorage.UserType != "Admin") {
        navigate('/');
    }
    

    else{
        return (
            <div>
                <Header/>
                    <LinkButton label='Správa personálu' link='./list_empoyees'/>
                    <LinkButton label='Správa zastávek' link='./list_stops'/>
                <Footer/>
            </div>
        );
    }
}

export default CarrierProfile;


