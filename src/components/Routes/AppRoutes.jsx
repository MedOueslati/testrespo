import React from "react";
import { Route, Routes } from "react-router-dom"; 
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import Realisation from "../Pages/Realisation";
import Footer from "../Layout/Footer";



const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<Realisation />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer/>
    </div>
  );
};

export default AppRoutes;
