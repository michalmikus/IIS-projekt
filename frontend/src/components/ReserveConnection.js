import React from "react"
import Header from './Header'
import Footer from './Footer'
import Button from "./Button"
import { useNavigate } from "react-router-dom"

const ReserveConnection = () => {

    const navigate = useNavigate();

    const LogIn = () => {               
          navigate('/login');
        }


    const SignIn = () => {               
        navigate('/register');
      }


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