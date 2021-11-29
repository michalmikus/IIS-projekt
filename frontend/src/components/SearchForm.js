import React from 'react'
import Button from './Button'
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {

    const navigate = useNavigate();

    const [selectedID, setSelects]=useState(null);
    const [selectedTime, setTime]=useState();
    const [connection, setConnection]=useState(null);

    const getResult = async () => {
        try {
            const res = await fetch("https://localhost:7293/api/home");
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

        localStorage.ConnectionId = selectedID;
        localStorage.Time  = selectedTime;

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          };

          if(selectedTime == undefined || selectedID == undefined) {
            alert("Zadejte čas a parametry spoje prosím.");
          }

          else {
             
          navigate('/connections');

        }
    }
    
    return (
        
        <form id="search_form">

            <label class="select_box">

            <h2>{selectedID}</h2>

            {connection && (
                <select class="item" value={selectedID} default onChange={e=>setSelects(e.target.value)}><option disabled selected value>Vyberte spoj</option>
                {connection.map((result) => (<option key = {result.id} value = {result.id}>{result.name}</option>))}
                </select>
            )}

            </label>

            <input type="time" id="time" name="time" class="item" value={selectedTime} onChange={e=>setTime(e.target.value)}></input>

            <h3 onClick={searchConnections} ><Button label='Hledat'/></h3>

        </form>
    )
}

export default SearchForm
