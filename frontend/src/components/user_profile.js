import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from "./Button";

const UserProfile = () => {
    return (
        <div>
            <Header/>
            <div className = "button_profile">
                <Button label='Kde se nachází mé spoje' link='./user_profile'></Button>
                <Button label='Nastavení' link='./user_profile'></Button>
            </div>
            <Footer/>
        </div>
    );
}

export default UserProfile;