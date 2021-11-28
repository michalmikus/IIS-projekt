import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from "./Button";
import { useState } from "react";
import User from "./user";

const UserProfile = () => {

    const [users, setUsers] = useState( [
            {
                name: "Roman",
                surname: "Marek",
                address: "Selská 57",
                telephone: "720964384",
                mail: "yo@yo.com",
                country: "Czech Republic"
            }
         ]
     )
    return (
        <div>
            <Header/>
            <div className = "user">
            {users.map((user) => (<User user={user} />
            ))}
            </div>
            <div className  = "usrbtn">
                <Button link = "/connections" label = "Koupit jízdenku" /> 
                <Button link = "/settings" label = "Nastavení" />
            </div>
            <Footer/>
        </div>
    );
}

export default UserProfile;