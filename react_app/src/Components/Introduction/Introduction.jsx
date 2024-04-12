import React from "react";
import "./Introduction.css";

export const Introduction = () => {
  return (
    <div className="introduction">
      <h1 className="introduction__title">Welcome to our wine store!</h1>
      <p className="introduction__text">
        We offer a wide selection of wines from around the world, carefully
        curated by our team of experts.
      </p>
      <a href="#!" className="introduction__button">
        Shop now
      </a>
    </div>
  );
};
