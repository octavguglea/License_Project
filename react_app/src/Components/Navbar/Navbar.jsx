import React from "react";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div style={{ backgroundColor: "rgb(213, 228, 225)" }}>
      <div className="navbar">
        <div className="logo">
          <a href="#">
            <img src="assets/logo_navbar.jpg" alt="Logo" />
          </a>
        </div>
        <div className="links">
          <a href="#">Crama Guglea</a>
          <a href="#">Vinuri</a>
          <a href="#">Colectii Speciale</a>
          <a href="#">Povestea</a>
          <a href="#">Contact</a>
          <a href="#">Magazin Online</a>
        </div>
      </div>
    </div>
  );
};
