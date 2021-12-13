import React from "react";
import Button from "./Button";
import { useState } from "react";
import CarrierDetail from "./carrierDetail";
import ProfileButton from "./profile_button";
import { useNavigate } from "react-router-dom"
import BaseURL from "./BaseURL"


export const ConnectionWidgetInfo = ( props ) => {

    const handleDelete = () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
          };

          fetch(localStorage.CarierIdPathCon + '/stops' + props.id,requestOptions).then(res => {
              if (res.ok)
              {
                  console.log(localStorage.CarierIdPathCon + '/stops' + props.id)
                    window.location.reload();
              }
              else
              {
                  alert("Mazání neúspěšné, zkuste znovu.")
              }
          }, 
          )   
    }

    const [carrier, setCarrier] = useState();

    const getInfo = async () => {
        let path 
        if (props.id.search("connection") == -1)
            path = BaseURL.path +'/api/carriers/' + props.id;
        else
            path = BaseURL.path + '/api/carrier' + props.id;
        console.log(path)
        localStorage.CarierIdPathAll = path
        localStorage.CarierIdPathCon = BaseURL.path + "/api/carrier/"+props.id
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
                        <ProfileButton link={props.link} label = 'Info' onClick={getInfo}></ProfileButton>
                    </div>
                    
                    <div className="col col-1" >
                        <Button label = 'Odstranit' onClick={handleDelete}></Button>
                    </div>
                    
                    </li>
                </ul>
            </div>
    );

}

export default ConnectionWidgetInfo