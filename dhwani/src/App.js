import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../src/component/Navbar";
import Home from "../src/component/Home";
import Planet from "../src/component/Planet";
import Species from "../src/component/Species";
import Radiation from "../src/component/Radiation";
import Contact from "../src/component/Contact";
import Footer from "../src/component/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planet" element={<Planet />} />
          <Route path="/species" element={<Species />} />
          <Route path="/radiation" element={<Radiation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
  
      </Router>
      <Planet/>
      <Species/>
      <Radiation/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
