import React from "react";
import Header from './Header';
import Footer from './Footer';
import CreateConnectionForm from "./CreateConnectionForm.js";



const AddConnection = () => {

return (
    <div>
        <Header/>
        <CreateConnectionForm></CreateConnectionForm>
        <Footer/>
    </div>
);

}
export default AddConnection