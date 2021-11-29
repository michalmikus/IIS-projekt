import bus_img from './bus_picture.png';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom"
import Button from './Button'


const Header = () => {

    const navigate = useNavigate();

    const sign_out = async () => {

        const requestOptions = {
          method: 'POST'
        };

        try {
            const res = await fetch('https://localhost:7293/api/account/sign-out', requestOptions);
            console.log(res);
            if(res.status === 200) {
              delete localStorage.UserId;
              delete localStorage.UserType;
              localStorage.SignedIn = false;
              navigate('/');
            }
            else{
              alert("Odhlášení bylo neúspěšné. Zkuste to prosím znovu.");
            }
        }
        catch (error) {
            console.log("error:", error);
        }

      }

    const sign_in = () => {
      localStorage.LastUrl = window.location.pathname;
      navigate('/login');
    }

    if(localStorage.SignedIn === "true") {
      return (
        <header>
          <a href="http://localhost:3000/">
          <img src={bus_img} alt="autobus"></img>
           </a>
           <div class="header_links">
            <span>
            <Button label='Odhlásit se' onClick={sign_out}/>
            <Link to = '/user_profile' id="user_profile">Můj profil</Link>
            </span>
          </div>
       </header>
     )
    }

    else {
      return (
        <header>
          <a href="http://localhost:3000/">
          <img src={bus_img} alt="autobus"></img>
           </a>
           <div class="header_links">
           <Button label='Přihlásit se' onClick={sign_in}/>
           <Link to = '/login_carrier' id="user_profile">Dopravce</Link>
           <Link to = '/login_admin' id="user_profile">Admin</Link>
          </div>
       </header>
      )
    }
}

export default Header;
