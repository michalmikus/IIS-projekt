import React from 'react'
import Button from './Button'
import { useState } from "react";

const JSON_source = [
    {
        "id": "3bef2bfc-188f-42bb-b6f7-08d9b0009d65",
        "name": "Trencin-Brno"
    },
    {
        "id": "0cbada36-225b-4be7-b6f8-08d9b0009d65",
        "name": "Brno-Trencin"
    },
    {
        "id": "0b15d7b0-c469-4551-49a2-08d9b00167bc",
        "name": "Praha-Brno"
    },
    {
        "id": "c36e3551-aa0b-428f-49a3-08d9b00167bc",
        "name": "Brno-Praha"
    },
    {
        "id": "d3290cf0-4418-4ad1-941a-08d9b009f664",
        "name": "Praha-Brno"
    },
    {
        "id": "02c714d7-5bd0-4b07-ee24-08d9b02fb78a",
        "name": "Praha-Brno"
    },
    {
        "id": "7942f93e-87a8-4f0f-6b31-08d9b101ea58",
        "name": "Zlin-Brno"
    },
    {
        "id": "68975181-baa8-4f99-6b32-08d9b101ea58",
        "name": "Brno-Zlin"
    },
    {
        "id": "5fe79d26-0d26-4fb8-7bb4-08d9b10732cd",
        "name": "Brno Kr. Pole - Hlavas"
    },
    {
        "id": "66d73f98-e146-4acf-0f1c-08d9b1ca6c20",
        "name": "Zlin-Praha"
    }
]

const SearchForm = () => {

    const [selectedID, setSelects]=useState();
    const [selectedTime, setTime]=useState();
  
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        };

        const path = 'https://localhost:7293/api/home';
      
        /*const res = fetch(path, requestOptions)
  
        .then(res => {
          
          console.log("response: ", res);


        })
        .catch(err => {
          console.log("error:", err);
        });  */
  

    const searchConnections = () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
          };

          if(selectedTime == undefined) {
            alert("Nezadal jsi čas braško");
          }

          else {
  
          const path = 'https://localhost:7293/api/TimeTables/times/'+selectedID+'/'+selectedTime;
          
          console.log(path);

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

            <select class="item" value={selectedID} onChange={e=>setSelects(e.target.value)}>{
                JSON_source.map((result)=>(<option value = {result.id} >{result.name}</option>))
            }</select>
            
            </label>

            <input type="time" id="time" name="time" class="item" value={selectedTime} onChange={e=>setTime(e.target.value)}></input>

            <h3 onClick={searchConnections}><Button label='Hledat' link='/connections'/></h3>

        </form>
    )
}

export default SearchForm
