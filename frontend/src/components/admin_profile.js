import React from "react";
import Header from './Header';
import Footer from './Footer';
import LinkButton from "./LinkButton";

const UserProfile = () => {
    return (
        <div>
            <Header/>
            <div className = "button_profile">
                <LinkButton label='Správa dopravců' link='./list_carriers'/>
                <LinkButton label='Správa zastávek' link='./user_profile'/>
            </div>
            <Footer/>
        </div>
    );
}

export default UserProfile;