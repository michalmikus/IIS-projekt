import React from "react";
import Header from './Header';
import Footer from './Footer';
import LinkButton from "./LinkButton";
import { useState, useEffect } from "react";
import ConnectionInfo from "./SelectedConnectionInfo";
import { useNavigate } from "react-router-dom"

const UserProfile = () => {

    const navigate = useNavigate();

    const [users, setUsers] = useState({name: "", surname: "", email: "", phoneNumber: "", country: "", address:""})

     const getResult = async () => {

         try {
             const res = await fetch(localStorage.Url+'/passengers/'+localStorage.UserId);
             const datas = await res.json();
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

    const doNothing = () => {

    }

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

            <LinkButton label = "Koupit jízdenku" link="/ticket_page" onClick={doNothing}/>
            <LinkButton label = "Nastavení" link="/settings" onClick={doNothing}/>

            <Footer/>
        </div>
    );
}

export default UserProfile;
