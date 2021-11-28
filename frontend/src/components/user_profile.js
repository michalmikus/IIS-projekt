import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from "./Button";
import { useState, useEffect } from "react";
import User from "./user";
import ConnectionInfo from "./SelectedConnectionInfo";

const UserProfile = () => {

    const [users, setUsers] = useState(null)

     console.log("path:", ConnectionInfo.url);
 
     const getResult = async () => {
         try {
             const res = await fetch(ConnectionInfo.url);
             const datas = await res.json();
             console.log("Filtered Connections:", datas);
             setUsers(datas);
         }
         catch (error) {
            console.log("error:", error);
         }
     };
 
     useEffect(() => {
         getResult();
     }, []);

    return (
        <div>
            <Header/>
            <div className = "user">
            {users && (users.map((user) => (<User user={user} />
            )))}
            </div>
            <Button link = "/connections" label = "Koupit jízdenku" /> 
            <Button link = "/settings" label = "Nastavení" />
            <Footer/>
        </div>
    );
}

export default UserProfile;