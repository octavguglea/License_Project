import React from "react";
import { WineSlider } from "./Parts/WineSlider/WineSlider";
import { WineSlider2 } from "./Parts/WineSlider/WineSlider2";

const slides = [
  {
    title: "Slide 01",
    subtitle: "Subtitle 01",
    description: "Description for Slide 01",
    image: "/Assets/slider-introduction.jpg",
    buttonText: "Cumpara Acum",
  },
  {
    title: "Slide 02",
    subtitle: "Subtitle 02",
    description: "Description for Slide 02",
    image: "/Assets/slider-red-1.png",
    buttonText: "Cumpara Acum",
  },
  {
    title: "Slide 02",
    subtitle: "Subtitle 02",
    description: "Description for Slide 02",
    image: "/Assets/slider-red-2.png",
    buttonText: "Cumpara Acum",
  },
  {
    title: "Slide 02",
    subtitle: "Subtitle 02",
    description: "Description for Slide 02",
    image: "/Assets/slider-red-3.png",
    buttonText: "Cumpara Acum",
  },
  {
    title: "Slide 02",
    subtitle: "Subtitle 02",
    description: "Description for Slide 02",
    image: "/Assets/slider-red-4.png",
    buttonText: "Cumpara Acum",
  },
  // Add more slides as needed
];
const slides2 = [
  {
    title: "Slide 01",
    subtitle: "Subtitle 01",
    description: "Description for Slide 01",
    image: "/Assets/slider-introduction2.jpg",
    buttonText: "Cumpara Acum",
  },
  {
    title: "Slide 02",
    subtitle: "Subtitle 02",
    description: "slider-champagne2.png",
    image: "/Assets/slider-white1.png",
    buttonText: "Cumpara Acum",
  },
  {
    title: "Slide 02",
    subtitle: "Subtitle 02",
    description: "slider-champagne3.png",
    image: "/Assets/slider-white2.png",
    buttonText: "Cumpara Acum",
  },
  {
    title: "Slide 02",
    subtitle: "Subtitle 02",
    description: "slider-champagne4.png",
    image: "/Assets/slider-white3.png",
    buttonText: "Cumpara Acum",
  },
  {
    title: "Slide 02",
    subtitle: "Subtitle 02",
    description: "slider-champagne1.png",
    image: "/Assets/slider-white4.png",
    buttonText: "Cumpara Acum",
  },
  // Add more slides as needed
];

export const Wines = () => {
  return (
    <div>
      <WineSlider slides={slides} />
      <WineSlider2 slides2={slides2} />
    </div>
  );
};
