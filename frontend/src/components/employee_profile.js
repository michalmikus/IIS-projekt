import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from "./Button";

const EmployeeProfile = () => {
    return (
        <div>
            <Header/>
            <Button label='Aktualizace polohy spoje' link='./user_profile'></Button>
            <Button label='Správa rezervací' link='./user_profile'></Button>
            <Button label='Prodat jizdenku' link='./user_profile'></Button>
            <Footer/>
        </div>
    );
}

export default EmployeeProfile;