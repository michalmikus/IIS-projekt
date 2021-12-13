import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ConnectionWidget from './ConnectionWidget'
import { useState, useEffect } from "react"
import BaseURL from './BaseURL'

const ListOfConnections = () => {

    localStorage.LastUrl = '/connections';

    const [connection, setConnection]=useState(null);

    const getResult = async () => {

        try {
            const res = await fetch(BaseURL.path + '/api/TimeTables/times/' + localStorage.ConnectionId + '/' + localStorage.Time);
            const datas = await res.json();
            console.log("Filtered Connections:", datas);
            if(datas.length > '0') {
                setConnection(datas);
            }
            
        }
        catch (error) {
            console.log("error:", error);
        }
    };

    useEffect(() => {
        getResult();
    }, []);

    
    if(connection) {
        return (
            <div id="list_of_connections">
                <Header/>
                <h1>{connection[1].connectionName}</h1>
                {connection && ( connection.map ((widget) => (
                    <ConnectionWidget key={widget.id} connectionName={widget.connectionName} connectionId={widget.connectionId} stopName={widget.stopName} timeOfDeparture={widget.timeOfDeparture}/>
                )))}
                <Footer/>
            </div>
          )
    }

    else {
        return (
            <div id="list_of_connections">
                <Header/>
                <h2>Nenašli jsme žádné spoje. Zkuste změnit parametry spojení</h2>
                <Footer/>
            </div>
        );
    }
    

}

export default ListOfConnections;