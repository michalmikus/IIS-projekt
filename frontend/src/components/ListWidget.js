import React from "react";
import Button from "./Button";
import { useState } from "react";
import CarrierDetail from "./carrierDetail";
import ProfileButton from "./profile_button";


export const ListWidget = ( props ) => {

    const handleDelete = () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
          };
    
          const path = 'http://transport-is.azurewebsites.net/api/carriers/'+props.id;
          console.log(path)

          fetch(path,requestOptions).then(res => {
              if (res.ok)
              {
                    console.log('http://transport-is.azurewebsites.net/api/carriers/'+props.id)
                    window.location.reload()
              }
          },
          )

          
    }

    const [carrier, setCarrier] = useState();

    const getInfo = async () => {
        const path = 'http://transport-is.azurewebsites.net/api/carriers/'+props.id;
        CarrierDetail.path = path;

        try {
            const res = await fetch(path);
            const datas = await res.json();
            
            console.log("carrier detail", CarrierDetail);
            setCarrier(datas);
        }
        catch (error) {
            console.log("error:", error);
        }
    }
 
    

    return (

         <div className="container">
                <ul className="responsive-table">
                    <li className="table-row">
                    <div className="col col-1" >{props.carrierName}</div>
                    
                    <div className="col col-1" >
                        <ProfileButton link='/carrier_details' label = 'Info' onClick={getInfo}></ProfileButton>
                    </div>
                    
                    <div className="col col-1" >
                        <Button label = 'Odstranit' onClick={handleDelete}></Button>
                    </div>
                    
                    </li>
                </ul>
            </div>




    );

}

export default ListWidget