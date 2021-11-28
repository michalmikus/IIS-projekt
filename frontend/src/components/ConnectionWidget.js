import React from "react";
import Button from './Button'
import { useState } from "react";

export const ConnectionWidget = ( props ) => {

    const [amount, setAmount] = useState(0);

    const onClickHandler = () => {
  
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        };

        const path = 'https://localhost:7293/api/TimeTables/info/'+ props.connectionId + '/' + amount;
        console.log(path);
      
        const res = fetch(path, requestOptions)
  
        .then(res => {
          
          console.log("response: ", res);
        })
        .catch(err => {
          console.log("error:", err);
        });  
  
    }

    return (
        <div id="widget">
            <div id="reserveWidget">
                <button onClick={() => setAmount(amount - 1)}>-</button>
                <h3 key={props.id}>{props.connectionName}{props.stopName} {props.timeOfDeparture}</h3>
                <button onClick={() => setAmount(amount + 1)}>+</button>
            </div>
            <h2>{amount}</h2>
            <h3 key={props.id} onClick={onClickHandler}><Button label='Zarezervovat' link='/reserve'/></h3>
        </div>
    );
}

export default ConnectionWidget;