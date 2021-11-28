import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from "./Button";

const ReserveConnection = () => {
    return (
        <div>
            <Header/>
            <Button label='Přihlásit se' link='/login'></Button>
            <Button label='Registrovat se' link='/register'></Button>
            <Footer/>
        </div>
    );
}

export default ReserveConnection ;