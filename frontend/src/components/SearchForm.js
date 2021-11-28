import React from 'react'
import Button from './Button'
import { useState, useEffect } from "react"
import ConnectionInfo from './SelectedConnectionInfo'

const SearchForm = () => {

    const [selectedID, setSelects]=useState(null);
    const [selectedTime, setTime]=useState();
    const [connection, setConnection]=useState(null);

    const path = 'https://localhost:7293/api/home';

    const getResult = async () => {
        try {
            const res = await fetch(path);
            const datas = await res.json();
            console.log("All connections:", datas);
            setConnection(datas);
        }
        catch (error) {
            console.log("error:", error);
        }
    };

    useEffect(() => {
        getResult();
    }, []);

    const searchConnections = (e) => {

        ConnectionInfo.id = selectedID;
        ConnectionInfo.time = selectedTime;

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          };

          if(selectedTime == undefined) {
            alert("Nezadal jsi čas braško");
          }

          else {
  
          const path = 'https://localhost:7293/api/TimeTables/times/'+selectedID+'/'+selectedTime;
          


          /*const res = fetch(path, requestOptions)
    
          .then(res => {
            
            console.log("response: ", res);
  
  
          })
          .catch(err => {
            console.log("error:", err);
          });  */

        }
    }
    
    return (
        
        <form id="search_form">

            <label class="select_box">

            <h2>{selectedID}</h2>

            {connection && (
                <select class="item" value={selectedID} default onChange={e=>setSelects(e.target.value)}>{connection.map((result) => (<option key = {result.id} value = {result.id}>{result.name}</option>))}
                </select>
            )}

            </label>

            <input type="time" id="time" name="time" class="item" value={selectedTime} onChange={e=>setTime(e.target.value)}></input>

            <h3 onClick={searchConnections}><Button label='Hledat' link='/connections'/></h3>

        </form>
    )
}

export default SearchForm
