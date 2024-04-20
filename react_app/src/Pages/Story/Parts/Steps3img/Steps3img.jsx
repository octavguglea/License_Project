import React from "react";
import "./Steps3img.css";

export const Steps3img = ({ title, subtitle, description, images }) => {
  return (
    <div>
      <div className="Steps3img-container">
        <div className="Steps3img-context">
          <h3>{title}</h3>
          <h4>
            <span>
              <img src="assets/frunza1.png" className="leaf" alt="symbol" />
            </span>
            {subtitle}{" "}
            <span>
              <img src="assets/frunza2.png" className="leaf" alt="symbol" />
            </span>
          </h4>
          <p>{description}</p>
        </div>
        <div className="Steps3img-img-container">
          {images.map((image, index) => (
            <div className="Steps3img-img-block" key={index}>
              <img src={image} className="Steps3img-img" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
