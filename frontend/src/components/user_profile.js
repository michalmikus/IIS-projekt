import React from "react";
import Header from './Header';
import Footer from './Footer';
import { Button } from "./button";

const UserProfile = () => {
    return (
        <div>
            <Header/>
            <Button>Kde se nachází mé spoje</Button>
            <Button>Nastavení uživatele</Button>
            <Footer/>
        </div>
    );
}

export default UserProfile;