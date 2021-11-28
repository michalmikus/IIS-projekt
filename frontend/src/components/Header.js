import bus_img from './bus_picture.png';
import {Link} from "react-router-dom";
const Header = () => {
    const sign_out = () => {

        console.log("odhlasuji se");
  
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        };
      
  
        const res = fetch('https://localhost:7293/api/account/sign-out', requestOptions)
  
        .then(res => {
          console.log("response: ", res);
        })
        .catch(err => {
          console.log("error:", err);
        });
  
      }

    return (
        <header>
          <a href="http://localhost:3000/">
          <img src={bus_img} alt="autobus"></img>
           </a>

          <div class="header_links">
            <Link to = "/login" id="sign_in_link"> Přihlásit se</Link>
            <span>
            <Link to = "/register">Registrovat se</Link>
            </span>
            <span>
            <Link to = "/" onClick={sign_out}>Odhlásit se</Link>
            </span>
          </div>
      </header>
    )
}

export default Header;
