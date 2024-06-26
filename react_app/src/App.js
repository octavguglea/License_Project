import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Story } from "./Pages/Story/Story";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Contact } from "./Pages/Contact/Contact";
import { Wines } from "./Pages/Wines/Wines";
import Signup from "./Pages/Authentification/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./Pages/Authentification/Login";
import Dashboard from "./Pages/Authentification/Dashboard";
import ForgotPassword from "./Pages/Authentification/ForgotPassword";
import UpdateProfile from "./Pages/Authentification/UpdateProfile";

function App() {
  const currentPath = window.location.href;

  // Check if currentPath contains '/signup' or '/login'

  const hideNavbarAndFooter =
    currentPath.includes("/signup") ||
    currentPath.includes("/login") ||
    currentPath.includes("/dashboard") ||
    currentPath.includes("/forgot-password");

  return (
    <AuthProvider>
      <Router>
        {!hideNavbarAndFooter && <Navbar />}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wines" element={<Wines />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
        </Routes>

        {!hideNavbarAndFooter && <Footer />}
      </Router>
    </AuthProvider>
  );
}

export default App;
