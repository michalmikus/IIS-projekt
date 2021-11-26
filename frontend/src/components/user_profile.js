import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from './Button';

const UserProfile = () => {
    return (
        <>
            <Header/>
                <Button label='Kde se nachází mé spoje' link='/login'/>
                <Button label='Nastavení uživatele' link='/login'/>
            <Footer/>
        </>
    );
}

export default UserProfile;