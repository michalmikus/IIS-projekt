import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import UserProfile from "./user_profile";
import CarrierProfile from "./carrier_profile";
import EmployeeProfile from "./employee_profile";
import AdminProfile from "./admin_profile";
import ListOfConnections from "./connections";
import ReserveConnection from "./ReserveConnection";
import UserSettings from "./user_settings";
import TicketPage from "./ticket_page";

const Director = () => {

    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>   
            <Route exact path="/user_profile" element={<UserProfile/>}/>
            <Route exact path="/carrier_profile" element={<CarrierProfile/>}/>
            <Route exact path="/employee_profile" element={<EmployeeProfile/>}/>
            <Route exact path="/admin_profile" element={<AdminProfile/>}/>     
            <Route exact path="/connections" element={<ListOfConnections/>}/>    
            <Route exact path="/reserve" element={<ReserveConnection/>}/>  
            <Route exact path="/settings" element={<UserSettings/>}/>
            <Route exact path="/ticket_page" element={<TicketPage/>}/>
        </Routes>
    );
}

export default Director;