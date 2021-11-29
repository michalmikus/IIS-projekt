import React from "react";
import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from "react";
import ListWidget from "./ListWidget";
import Button from "./Button";

const ListCarriers = () => {

    const [carriers, setCarriers] = useState()

    const path = 'https://localhost:7293/api/carriers/all';
    console.log("path:", path);

const getResult = async () => {

    try {
        const res = await fetch(path);
        const datas = await res.json();
        console.log("Carriers data", datas);
        setCarriers(datas);
    }
    catch (error) {
        console.log("error:", error);
    }
};

useEffect(() => {
    getResult();
}, []);


    return (
        <div>
             <Header/>
             <Button label = 'Pridat dopravcu'></Button> 
             {carriers && ( carriers.map ((carrier) => (
              <ListWidget id={carrier.id} carrierName={carrier.carrierName}/>
          )))}
             <Footer/>
         </div>
        );
}

export default ListCarriers;