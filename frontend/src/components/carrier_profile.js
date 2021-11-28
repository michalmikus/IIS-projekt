import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from "./Button";

const CarrierProfile = () => {
    return (
        <div>
            <Header/>
            <Button label='Správa personálu' link='./user_profile'></Button>
            <Button label='Správa vozidel' link='./user_profile'></Button>
            <Button label='Správa zastávek' link='./user_profile'></Button>
            <Button label='Správa spoje' link='./user_profile'></Button>
            <Footer/>
        </div>
    );
}

export default CarrierProfile;