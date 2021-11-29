import React from "react";
import Header from './Header';
import Footer from './Footer';
import SearchForm from "./SearchForm";

const Home = () => {

    return (
      <div>
        <Header/>
        <SearchForm/>
        <Footer/>
      </div>
    );
};

export default Home;