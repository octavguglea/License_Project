import React, { useEffect } from "react";
import "./WineSlider.css";

export const WineSlider = ({ slides}) => {
  useEffect(() => {
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    const slider = document.querySelector(".slider");

    const handleNextClick = () => {
      const slides = document.querySelectorAll(".slides");
      slider.appendChild(slides[0]);
    };

    const handlePrevClick = () => {
      const slides = document.querySelectorAll(".slides");
      slider.prepend(slides[slides.length - 1]);
    };

    next.addEventListener("click", handleNextClick);
    prev.addEventListener("click", handlePrevClick);

    return () => {
      next.removeEventListener("click", handleNextClick);
      prev.removeEventListener("click", handlePrevClick);
    };
  }, []);

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slides"
            style={
              index === 0
                ? {
                    "--img": `url('${slide.image}')`,
                    color: "white",
                    backgroundSize: "cover",
                    backgroundPosition:"40%",
                  }
                : {
                    "--img": `url('${slide.image}')`,
                  }
            }
          >
            <div className="content">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
              <p>{slide.description}</p>
              <a href="#!" className={`introduction__button${index === 0 ? ' hide' : ''}`}>
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <span className="prev"></span>
        <span className="next"></span>
      </div>
    </div>
  );
};
