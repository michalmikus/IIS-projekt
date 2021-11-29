import bus_img from './bus_picture.png';
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom"


const Header = () => {

    const navigate = useNavigate();
  
    const sign_out = async () => {

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        };
  
        const path = 'https://localhost:7293/api/account/sign-out';
      
        try {
            const res = await fetch(path, requestOptions);
            const datas = await res.json();
            console.log(datas);
            if(res.ok) {
              delete localStorage.UserId;
              delete localStorage.UserType;
              localStorage.SignedIn = false; 
              window.location.reload(false);
            }
            else{
              alert("Odhlášení bylo neúspěšné. Zkuste to prosím znovu."); 
            }
        }
        catch (error) {
            console.log("error:", error);
        }
  
      }

    if(localStorage.SignedIn === "true") {
      return (
        <header>
          <a href="http://localhost:3000/">
          <img src={bus_img} alt="autobus"></img>
           </a>
           <div class="header_links">
            {/*}<Link to = "/login" id="sign_in_link"></Link>{*/}
            <span>
            <Link to = "/" onClick={sign_out}>Odhlásit se</Link>
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
        </header>    
      )
    }  
}

export default Header;
