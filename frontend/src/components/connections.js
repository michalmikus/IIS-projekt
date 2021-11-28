import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ConnectionWidget from './ConnectionWidget';
import { useState } from "react";
import RegisterForm from './register_form';
import OptionBox from './OptionBox'

const JSON_source = 
    [
    {
        "id": "2cd6bc74-e035-449f-a002-08d9b01b6c0f",
        "connectionName": "Brno-Trencin",
        "connectionId": "0cbada36-225b-4be7-b6f8-08d9b0009d65",
        "stopName": "Vyskov",
        "timeOfDeparture": "0001-01-01T12:30:00"
    },
    {
        "id": "5cde98d8-941d-4cd4-a003-08d9b01b6c0f",
        "connectionName": "Brno-Trencin",
        "connectionId": "0cbada36-225b-4be7-b6f8-08d9b0009d65",
        "stopName": "Hrozenkov",
        "timeOfDeparture": "2022-01-01T12:30:00"
    },
    {
        "id": "10f07288-d708-46a8-a004-08d9b01b6c0f",
        "connectionName": "Trencin-Brno",
        "connectionId": "3bef2bfc-188f-42bb-b6f7-08d9b0009d65",
        "stopName": "Hrozenkov",
        "timeOfDeparture": "2022-01-01T10:30:00"
    },
    {
        "id": "b50b0fcd-8fe6-4e10-a005-08d9b01b6c0f",
        "connectionName": "Trencin-Brno",
        "connectionId": "3bef2bfc-188f-42bb-b6f7-08d9b0009d65",
        "stopName": "Ostrava",
        "timeOfDeparture": "2022-01-01T10:30:00"
    },
    {
        "id": "7bb225a0-75bc-437a-2713-08d9b0234fa1",
        "connectionName": "Trencin-Brno",
        "connectionId": "3bef2bfc-188f-42bb-b6f7-08d9b0009d65",
        "stopName": "Vyskov",
        "timeOfDeparture": "2022-01-01T10:30:00"
    }
]

const ListOfConnections = () => {


    return (
      <div id="list_of_connections">
          <Header/>
          <h1>Odjezdy</h1>
          <OptionBox title='Odkud' element_id = 'startStation' class="item" />
          {JSON_source.map ((connection) => (
              <ConnectionWidget key={connection.id} connectionName={connection.connectionName} connectionId={connection.connectionId} stopName={connection.stopName} timeOfDeparture={connection.timeOfDeparture}/>
          ))}
          <Footer/>
      </div>
    )

}

export default ListOfConnections;