import React from "react";
import "./Footer.css";
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LocationOn as LocationOnIcon,
  Call as CallIcon,
  AccessTime as AccessTimeIcon,
  Email as EmailIcon,
} from "@mui/icons-material";

export const Footer = () => {
  return (
    <div style={{ backgroundColor: "#333" }}>
      <div className="footer">
        <h3 className="footer-header">Contacteaza-ne</h3>
        <div className="footer-content">
          <div className="column">
            <ul className="icon-list">
              <li className="icon-item">
                <LocationOnIcon />
                <div>Cetatea Alba nr.11, Raionul Cahul, Republica Moldova</div>
              </li>

              <li className="icon-item">
                <EmailIcon />
                <div>octavguglea@gmail.com</div>
              </li>
            </ul>
          </div>

          <div className="footer-logo column">
            <img src="assets/logo_navbar.jpg" alt="Logo" />
            <ul className="social-links">
              <li>
                <a href="#">
                  <FacebookIcon fontSize="large" />
                </a>
              </li>
              <li>
                <a href="#">
                  <InstagramIcon fontSize="large" />
                </a>
              </li>
              <li>
                <a href="#">
                  <TwitterIcon fontSize="large" />
                </a>
              </li>
            </ul>
          </div>

          <div className="column">
            <ul className="icon-list">
              <li className="icon-item">
                <CallIcon />
                <div>+373 78447807</div>
              </li>
              <li className="icon-item">
                <AccessTimeIcon />
                <div>Lu-Sa 09:00-16:00 | Du 10:00 - 15:00</div>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">© 2024 Guglea SRL</p>
      </div>
    </div>
  );
};
