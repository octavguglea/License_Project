import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Story } from "./Pages/Story/Story";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
