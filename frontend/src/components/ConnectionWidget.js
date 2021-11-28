import React from "react";
import Button from './Button'
import { useState, useEffect } from "react";
import ConnectionInfo from './SelectedConnectionInfo'

export const ConnectionWidget = ( props ) => {

    const [amount, setAmount] = useState(0);


    const getResult = async () => {
    ConnectionInfo.id = props.connectionId;
    ConnectionInfo.amout = amount;

    const path = 'https://localhost:7293/api/TimeTables/info/'+ props.connectionId;
    console.log(path);
    
      try {
          const res = await fetch(path);
          const datas = await res.json();
          ConnectionInfo.url = 'https://localhost:7293/'+datas.url;
          console.log("ConnectionWidget", ConnectionInfo.url);
      }
      catch (error) {
          console.log("error:", error);
      }
    };


    return (
        <div id="widget">
            <div id="reserveWidget">
                <button onClick={() => setAmount(amount - 1)}>-</button>
                <h3 key={props.id}>{props.connectionName}{props.stopName} {props.timeOfDeparture}</h3>
                <button onClick={() => setAmount(amount + 1)}>+</button>
            </div>
            <h2>{amount}</h2>
            <h3 key={props.id} onClick={getResult}><Button label='Zarezervovat' link='/reserve'/></h3>
        </div>
    );
}

export default ConnectionWidget;