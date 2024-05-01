import React, { useEffect } from "react";
import "./WineSlider.css";

export const WineSlider = () => {
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
        <div
          className="slides"
          style={{
            "--img": `url('/Assets/slider-introduction.jpg')`,
            color: 'white',
            'background-size': 'cover'
          }}
        >
          <div className="content">
            <h2>Slide 01</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              quis et doloribus voluptatibus?
            </p>
            <a href="#!" className="introduction__button"  >
              Cumpara Acum
            </a>
          </div>
        </div>
        <div
          className="slides"
          style={{ "--img": `url('/Assets/slider-red-1.png')` }}
        >
          <div className="content">
            <h2>Slide 01</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              quis et doloribus voluptatibus?
            </p>
            <a href="#!" className="introduction__button">
              Cumpara Acum
            </a>
          </div>
        </div>
        <div
          className="slides"
          style={{ "--img": `url('/Assets/slider-red-2.png')` }}
        >
          <div className="content">
            <h2>Slide 02</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              quis et doloribus voluptatibus?
            </p>
            <a href="#!" className="introduction__button">
              Cumpara Acum
            </a>
          </div>
        </div>
        <div
          className="slides"
          style={{ "--img": `url('/Assets/slider-red-3.png')` }}
        >
          <div className="content">
            <h2>Slide 03</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              quis et doloribus voluptatibus?
            </p>
            <a href="#!" className="introduction__button">
              Cumpara Acum
            </a>
          </div>
        </div>

        <div
          className="slides"
          style={{ "--img": `url('/Assets/slider-red-4.png')` }}
        >
          <div className="content">
            <h2>Slide 03</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              quis et doloribus voluptatibus?
            </p>
            <a href="#!" className="introduction__button">
              Cumpara Acum
            </a>
          </div>
        </div>
      </div>
      <div className="buttons">
        <span className="prev"></span>
        <span className="next"></span>
      </div>
    </div>
  );
};
