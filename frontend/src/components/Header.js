import bus_img from './bus_picture.png'

const header = () => {
    return (
        <header>
        <img src={bus_img} alt="autobus"></img>
        <div class="header_links">
          <a id="sign_in_link" href="https://www.w3schools.com/">Přihlásit se</a><br/>
          <a id="register_link" href="https://www.w3schools.com/">Registrovat se</a>
        </div>
      </header>
    )
}

export default header
