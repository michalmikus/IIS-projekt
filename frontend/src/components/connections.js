import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ConnectionWidget from './ConnectionWidget'
import { useState, useEffect } from "react"

const ListOfConnections = () => {

    const [connection, setConnection]=useState(null);

    const getResult = async () => {

        try {
            const res = await fetch('http://transport-is.azurewebsites.net/api/TimeTables/times/'+localStorage.ConnectionId+'/'+localStorage.Time);
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
          {connection && ( connection.map ((widget) => (
              <ConnectionWidget key={widget.id} connectionName={widget.connectionName} connectionId={widget.connectionId} stopName={widget.stopName} timeOfDeparture={widget.timeOfDeparture}/>
          )))}
          <Footer/>
      </div>
    )

}

export default ListOfConnections;