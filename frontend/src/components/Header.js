import bus_img from './bus_picture.png';
import {Link} from "react-router-dom";
import StatusUser from "./Status";

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

  console.log(StatusUser.userID)

  if (StatusUser.userID != "") {
    return (
        <header>
          <a href="http://localhost:3000/">
          <img src={bus_img} alt="autobus"></img>
           </a>
          <div class="header_links">
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
