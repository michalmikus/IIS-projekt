import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from "./Button";

const UserProfile = () => {
    return (
        <div>
            <Header/>
            <div className = "button_profile">
                <Button label='Správa dopravců' link='./user_profile'></Button>
                <Button label='Správa zastávek' link='./user_profile'></Button>
                <Button label='Správa personálu' link='./user_profile'></Button>
            </div>
            <Footer/>
        </div>
    );
}

export default UserProfile;