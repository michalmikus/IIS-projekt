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
import ListCarriers from "./list_carriers"
import ListEmployees from "./list_employees"
import ListStop from "./list_stops";
import ChangeCarrier from "./change_carrier";
import CarrierProfileDetails from "./carrier_profile_details";
import AddCarrier from "./AddCarrier";
import AddConnection from "./AddConnection";
import AddEmployee from "./AddEmployee";
import AddVehicle from "./AddVehicle";
import ConnectionInfo from "./connectionInfo"
import EmployeeInfo from "./EmployeeInfo"
import EmployeeSettings from "./EmployeeSettings"
import AddStop from "./AddStop";

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
            <Route exact path="/list_carriers" element={<ListCarriers/>}/>
            <Route exact path="/list_employees" element={<ListEmployees/>}/>
            <Route exact path="/list_stops" element={<ListStop/>}/>
            <Route exact path="/change_carrier" element={<ChangeCarrier/>}/>
            <Route exact path="/carrier_details" element={<CarrierProfileDetails/>}/>
            <Route exact path="/create_carrier" element={<AddCarrier/>}/>
            <Route exact path="/create_connection" element={<AddConnection/>}/>
            <Route exact path="/create_employee" element={<AddEmployee/>}/>
            <Route exact path="/create_vehicle" element={<AddVehicle/>}/>
            <Route exact path="/connection_info" element={<ConnectionInfo/>}/>
            <Route exact path="/employee_info" element={<EmployeeInfo/>}/>
            <Route exact path="/employee_settings" element={<EmployeeSettings/>}/>
            <Route exact path="/create_stop" element={<AddStop/>}/>
        </Routes>
    );
}

export default Director;
