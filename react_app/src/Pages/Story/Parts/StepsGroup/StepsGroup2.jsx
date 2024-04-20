import React from "react";
import "./StepsGroup.css";

export const StepsGroup2 = ({ title, subtitle, description, images }) => {
  return (
    <div>
      <div className="steps-body">
        <div
          className="image-Steps"
          style={{
            backgroundImage: `url(${images})`,
          }}
        ></div>
        <div className="context padding-Steps1">
          <h3>{title}</h3>
          <img src="assets/symbol.png" className="symbol" alt="symbol" />
          <h4>{subtitle}</h4>
          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
