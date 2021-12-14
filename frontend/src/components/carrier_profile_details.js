import React from "react";
import Header from './Header';
import Footer from './Footer';
import Button from "./Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CarrierDetail from "./carrierDetail";
import ListWidget from "./ListWidget";
import { useNavigate } from "react-router-dom"

const CarrierProfileDetails = () => {

    const navigate = useNavigate();

    const [carrier, setCarrier] = useState({carrierName: "",taxNumber: "", telephoneNumber: "", publicRelationsContact: ""})
    const [connection, setConnection] = useState(null)
    const [employeeList , setEmployeeList] = useState(null)
    const [vehicleList , setVehicleList] = useState(null)

    let carrierId = localStorage.CarierIdPathAll.slice(localStorage.CarierIdPathAll.length-36)

    const getDetail = async () => {
        let conPath = localStorage.CarrierInfo
        try {
            const res = await fetch(localStorage.CarriersInfo);
            const datas = await res.json();
            console.log("Filtered connections:", datas);
            setCarrier(datas);
            localStorage.CarrierName = datas.carrierName;
        }
        catch (error) {
            console.log("error:", error);
        }

        try {
            console.log("pathCon:",conPath +"connection/all")
            const response = await fetch(conPath+"/connection/all");
            const connections = await response.json();
            console.log("Connections:", connections);
            setConnection(connections);
        }
        catch (error) {
            console.log("error:", error);
        }

        try {
            console.log("pathCon:",conPath +"employees/all")
            const response = await fetch(conPath+"/employees/all");
            const employees = await response.json();
            console.log("Employees:", employees);
            setEmployeeList(employees);
        }
        catch (error) {
            console.log("error:", error);
        }


        try {
            console.log("pathCon:",conPath +"vehicles/all")
            const response = await fetch(conPath+"/vehicles/all");
            const vehicles = await response.json();
            console.log("Vehicles:", vehicles);
            setVehicleList(vehicles);
        }
        catch (error) {
            console.log("error:", error);
        }
    };

    useEffect(() => {
        getDetail();
    }, []);

        return (
            <div>
                <Header/>
                <div className = "carrier">
                    <h3>Meno:          {carrier.carrierName}</h3>
                    <h3>ICO:           {carrier.taxNumber}</h3>
                    <h3>Kontakt:           {carrier.telephoneNumber}</h3>
                    <h3>Kontaktna Osoba:            {carrier.publicRelationsContact}</h3>
                </div>

                <Link to="/change_carrier">
                <Button label = "Editovat Profil " />
                </Link>
                <Link to ="/create_connection">
                <Button label = "Přidat spoj" />
                </Link>
                <Link to ="/create_employee">
                <Button label = "Přidat zamestnanca" />
                </Link>
                <Link to ="/create_vehicle">
                <Button label = "Přidat vozidlo" />
                </Link>
                <h2>Spoje</h2>
                {connection && ( connection.map ((connection) => (
                  <ListWidget id={carrierId+"/connection/"+connection.id} carrierName={connection.name} link={'/connection_info'}/>)))}

                <h2>Zamestnanci</h2>
                {employeeList && ( employeeList.map ((employee) => (
                  <ListWidget id={carrierId+"/employees/"+employee.id} carrierName={employee.fullName+" - "+employee.role} link={'/employee_info'}/>)))}

                <h2>Vozidlá</h2>
                {vehicleList && ( vehicleList.map ((vehicle) => (
                  <ListWidget id={carrierId+"/vehicles/"+vehicle.id} carrierName={vehicle.brand + " " + vehicle.model} link={'/connection_info'}/>)))}

            </div>
        );



}

export default CarrierProfileDetails;
