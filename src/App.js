import React, { Fragment, useEffect } from "react";
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from "./Components/AboutUs";
import Gallery from "./Components/Gallery";
import OurService from "./Components/OurService";
import Contact from "./Components/Contact";
import Testimonial from "./Components/Testimonial";
import Donate from "./Components/Donate";

function App() {

  useEffect(() => {
   var div = document.getElementById("pageTopTitle");
                    div.innerHTML =
                      "Informh - " + sessionStorage.getItem("PageTitle");
}, []);

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/OurService" element={<OurService />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/Donate" element={<Donate />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
