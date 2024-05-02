import React, { useEffect } from "react";
import "../Slider1/WineSlider.css";
import "./WineSlider3.css"

export const WineSlider3 = ({ slides3}) => {
  useEffect(() => {
    const next3 = document.querySelector(".next3");
    const prev3 = document.querySelector(".prev3");
    const slider3 = document.querySelector(".slider3");

    const handleNextClick = () => {
      const slides3 = document.querySelectorAll(".slides3");
      slider3.appendChild(slides3[0]);
      console.log("hello");
    };

    const handlePrevClick = () => {
      const slides3 = document.querySelectorAll(".slides3");
      slider3.prepend(slides3[slides3.length - 1]);
    };

    next3.addEventListener("click", handleNextClick);
    prev3.addEventListener("click", handlePrevClick);

    return () => {
      next3.removeEventListener("click", handleNextClick);
      prev3.removeEventListener("click", handlePrevClick);
    };
  }, []);

  return (
    <div className="slider-container">
      <div className="slider3">
        {slides3.map((slide, index) => (
          <div
            key={index}
            className="slides3"
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
              <h3>{slide.title}</h3>
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
        <span className="prev3"></span>
        <span className="next3"></span>
      </div>
    </div>
  );
};
