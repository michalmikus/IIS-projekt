import bus_img from './bus_picture.png';
import {Link} from "react-router-dom";
const Header = () => {
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
          </div>
      </header>
    )
}

export default Header;
