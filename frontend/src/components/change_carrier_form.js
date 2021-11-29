import { useState, useEffect } from "react";
import Button from "./Button";
import CarrierDetail from "./carrierDetail";
import ProfileButton from "./profile_button";

const ChangeCarrierForm = () => {

    const [state, setState] = useState({carriername: "", address: "",taxnumber: "", telephonenumber: "", pr_conntact: "", country: ""});

    const handleChange =evt => {

        const name = evt.target.name;
        const value = evt.target.value;
        setState({
            ...state,[name]: value
        })
    }

    const handleClick = (e) => {

        e.preventDefault();

        let object = {
            Carriername: state.carriername,
            TaxNumber: state.taxnumber,
            TelephoneNumber: state.telephonenumber,
            PublicRelationsContact: state.pr_conntact
        }
        const path = CarrierDetail.path
        console.log("path",path)
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(object)
          };

        fetch(path,requestOptions).then(res=> {
            console.log(res.status)
        }
            )
        

      //  console.log(JSON.stringify(registrationModel));
       // sendJSON(registrationModel);
        console.log(object)
        setState({carriername: "", address: "", taxnumber: "", telephonenumber: "", pr_conntact: "", country: ""});


    }

    return (
        <form id="register_form">

        <input type = "text" id="user_name" name="carriername" placeholder="Jméno" value={state.carriername} onChange={ handleChange } ></input>

        <input type = "text" id="tax_num" name="taxnumber" placeholder="IČO" value={state.taxnumber} onChange={ handleChange }></input>

        <input type = "text" id="pr_con" name="pr_conntact" placeholder="Kontaktná osoba" value={state.pr_conntact} onChange={ handleChange }></input>

        <input type = "number" id="user_phone_number" name="telephone" placeholder="Telefonní číslo" value={state.telephonenumber} onChange={ handleChange }></input>

        <ProfileButton link='/carrier_details' label='Uložiť' onClick={handleClick}></ProfileButton>

    </form>
    );

}
export default ChangeCarrierForm