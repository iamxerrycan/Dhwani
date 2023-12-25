import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../src/component/Navbar";
import Home from "../src/component/Home";
import Planet from "../src/component/Planet";
import Species from "../src/component/Species";
import Radiation from "../src/component/Radiation";
import Contact from "../src/component/Contact";
import Footer from "../src/component/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Home />
        <Planet />
        <Species />
        <Radiation />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
