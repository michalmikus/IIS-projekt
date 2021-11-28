import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from "./Button";
import { useState } from "react";
import User from "./user";
import SetingsForm from "./user_settings_form";

const UserSettings = () => {

    return (
        <div>
            <Header/>
            <SetingsForm />
            <Footer/>
        </div>
    );
}

export default UserSettings;