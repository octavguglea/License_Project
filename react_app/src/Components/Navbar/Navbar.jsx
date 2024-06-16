import React from "react";
import "./Navbar.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="bg-color">
      <div className="navbar-wines">
        <div className="logo">
          <a href="/">
            <img src="assets/logo1.jpg" alt="Logo" />
          </a>
        </div>
        <div className="links">
          <nav ref={navRef} className="navigation">
            <a href="/">Crama Guglea</a>
            <a href="/wines">Vinuri</a>
            <a href="/signup">Colectii Speciale</a>
            <a href="/story">Povestea</a>
            <a href="/contact">Contact</a>

            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn " onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      </div>
    </div>
  );
};
