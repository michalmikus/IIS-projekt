import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from "./Button";
import { useState, useEffect } from "react";
import User from "./user";
import ConnectionInfo from "./SelectedConnectionInfo";

const UserProfile = () => {

    const [users, setUsers] = useState({name: "", surname: "", email: "", phoneNumber: "", country: "", address:""}) 
 
     const getResult = async () => {

        console.log("path:", ConnectionInfo.url);

         try {
             const res = await fetch(ConnectionInfo.url);
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
            <Button link = "/ticket_page" label = "Koupit jízdenku" /> 
            <Button link = "/settings" label = "Nastavení" />
            <Footer/>
        </div>
    );
}

export default UserProfile;