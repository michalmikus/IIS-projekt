import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import UserProfile from "./user_profile"

const Director = () => {

    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>   
            <Route exact path="/user_profile" element={<UserProfile/>}/> 
        </Routes>

    );
}

export default Director;