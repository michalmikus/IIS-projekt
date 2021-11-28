import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from "./Button";

const ReserveConnection = () => {
    return (
        <div>
            <Header/>
            <Button label='Přihlásit se' link='./user_profile'></Button>
            <Button label='Registrovat se' link='./register_form'></Button>
            <Footer/>
        </div>
    );
}

export default ReserveConnection ;