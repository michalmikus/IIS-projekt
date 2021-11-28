import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ConnectionWidget from './ConnectionWidget'
import { useState, useEffect } from "react"
import ConnectionInfo from './SelectedConnectionInfo'

const ListOfConnections = () => {

    const [connection, setConnection]=useState(null);

    const path = 'https://localhost:7293/api/TimeTables/times/df7e3d01-aab0-4119-da11-08d9b2900074/09:00';
    console.log("path:", path);

    const getResult = async () => {
        try {
            const res = await fetch(path);
            const datas = await res.json();
            console.log("Filtered Connections:", datas);
            setConnection(datas);
        }
        catch (error) {
            console.log("error:", error);
        }
    };

    useEffect(() => {
        getResult();
    }, []);


    return (
      <div id="list_of_connections">
          <Header/>
          <h1>Odjezdy</h1>
          <h2>{ConnectionInfo.id}</h2>
          
          {connection && ( connection.map ((widget) => (
              <ConnectionWidget key={widget.id} connectionName={widget.connectionName} connectionId={widget.connectionId} stopName={widget.stopName} timeOfDeparture={widget.timeOfDeparture}/>
          )))}
          <Footer/>
      </div>
    )

}

export default ListOfConnections;