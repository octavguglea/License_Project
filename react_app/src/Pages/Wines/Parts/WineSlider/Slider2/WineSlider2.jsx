import React, { useEffect } from "react";
import "../Slider1/WineSlider.css";
import "./WineSlider2.css"

export const WineSlider2 = ({ slides2}) => {
  useEffect(() => {
    const next2 = document.querySelector(".next2");
    const prev2 = document.querySelector(".prev2");
    const slider2 = document.querySelector(".slider2");

    const handleNextClick = () => {
      const slides2 = document.querySelectorAll(".slides2");
      slider2.appendChild(slides2[0]);
      console.log("hello");
    };

    const handlePrevClick = () => {
      const slides2 = document.querySelectorAll(".slides2");
      slider2.prepend(slides2[slides2.length - 1]);
    };

    next2.addEventListener("click", handleNextClick);
    prev2.addEventListener("click", handlePrevClick);

    return () => {
      next2.removeEventListener("click", handleNextClick);
      prev2.removeEventListener("click", handlePrevClick);
    };
  }, []);

  return (
    <div className="slider-container">
      <div className="slider2">
        {slides2.map((slide, index) => (
          <div
            key={index}
            className="slides2"
            style={
              index === 0
                ? {
                    "--img": `url('${slide.image}')`,
                    color: "black",
                    backgroundSize: "cover",
                    backgroundPosition:"center",
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
        <span className="prev2"></span>
        <span className="next2"></span>
      </div>
    </div>
  );
};
