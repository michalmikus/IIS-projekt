import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from "./Button";
import { useState } from "react";
import User from "./user";
import EmployeeSettingsForm from "./employee_settings_from.js";

const EmployeeSettings = () => {

    return (
        <div>
            <Header/>
            <EmployeeSettingsForm />
            <Footer/>
        </div>
    );
}

export default EmployeeSettings;