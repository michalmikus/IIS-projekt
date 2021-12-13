import React from "react"
import Header from './Header'
import Footer from './Footer'
import Button from "./Button"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";

const ReserveConnection = () => {

    const navigate = useNavigate();

    const LogIn = () => {
          localStorage.LastUrl = "/user_profile"
          navigate('/login');
        }


    const SignIn = () => {
        navigate('/register');
      }

    const checkIfSignedIn = () => {
        if(localStorage.SignedIn === "true") {
            navigate('/user_profile');
        }
    }

    useEffect(() => {
        checkIfSignedIn();
    }, []);


    return (
        <div>
            <Header/>
            <Button label='Přihlásit se' onClick={LogIn}></Button>
            <Button label='Registrovat se' onClick={SignIn}></Button>
            <Footer/>
        </div>
    );
}

export default ReserveConnection ;
