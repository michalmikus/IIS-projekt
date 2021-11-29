import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from "./Button";
import { useState, useEffect } from "react";
import User from "./user";
import ConnectionInfo from "./SelectedConnectionInfo";
import { Link } from "react-router-dom";

const UserProfile = () => {

    const [users, setUsers] = useState({name: "", surname: "", email: "", phoneNumber: "", country: "", address:""}) 
 
     const getResult = async () => {

        console.log("path:", ConnectionInfo.url);

         try {
             const path = ConnectionInfo.url+'/passengers/'+ConnectionInfo.userId;
             const res = await fetch(path);
             const datas = await res.json();
             console.log("Filtered Connections:", datas);
             console.log("email:", datas.address.name);
             setUsers(datas);
         }
         catch (error) {
            console.log("error:", error);
         }
     };

     useEffect(() => {
        const timer = setTimeout(() => {
            getResult()
        }, 1000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <div>
            <Header/>
            <div className = "user">
                <h3>{users.address.name} {users.address.surname}</h3>
                <h4> {users.address.address} </h4>
                <h4> {users.phoneNumber} </h4>
                <h4> {users.email} </h4>
                <h4> {users.address.country} </h4>
            </div>
            <Link to="/ticket_page">
            <Button label = "Koupit jízdenku" /> 
            </Link>
            <Link to ="/settings">
            <Button label = "Nastavení" />
            </Link>
            <Footer/>
        </div>
    );
}

export default UserProfile;