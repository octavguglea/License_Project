import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Story } from "./Pages/Story/Story";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Contact } from "./Pages/Contact/Contact";
import { Wines } from "./Pages/Wines/Wines";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wines" element={<Wines />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
