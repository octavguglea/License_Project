import React from "react";
import "./Contact.css";

import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LocationOn as LocationOnIcon,
  Call as CallIcon,
  AccessTime as AccessTimeIcon,
  Email as EmailIcon,
} from "@mui/icons-material";

export const Contact = () => {
  return (
    <div className="contact-body">
      <h1 className="contact-title">Te asteptam la un pahar de vin!</h1>
      <div className="contact-container">
        <div className="info-container">
          <div className="info-logo">
            <img src="assets/logo3.png" alt="Logo" />
          </div>
          <div className="info-body">
            <ul className="icon-list">
              <li className="icon-item">
                <LocationOnIcon />
                <div>Cetatea Alba nr.11, Raionul Cahul, Republica Moldova</div>
              </li>

              <li className="icon-item">
                <EmailIcon />
                <div>octavguglea@gmail.com</div>
              </li>

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
          <div className="info-icons">
            <ul className="social-links">
              <li>
                <a href="/">
                  <FacebookIcon fontSize="large" />
                </a>
              </li>
              <li>
                <a href="/">
                  <InstagramIcon fontSize="large" />
                </a>
              </li>
              <li>
                <a href="/">
                  <TwitterIcon fontSize="large" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="Map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44418.619322127066!2d28.16173482497468!3d45.90803667048441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b65c95ca29ef7d%3A0x254c4e01d94d6250!2sCahul%2C%20Moldova!5e0!3m2!1sro!2s!4v1713646887077!5m2!1sro!2s"
            allowfullscreen=""
            loading="lazy"
            title="myMap"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
