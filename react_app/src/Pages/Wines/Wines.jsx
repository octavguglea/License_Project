import React from "react";
import { WineSlider } from "./Parts/WineSlider/Slider1/WineSlider";
import { WineSlider2 } from "./Parts/WineSlider/Slider2/WineSlider2";
import { WineSlider3 } from "./Parts/WineSlider/Slider3/WineSlider3";

const slides_red = [
  {
    title: "Explorarea Aromelor Vinurilor Roșii",
    description:
      " Bucură-te de o călătorie plină de satisfacții în lumea vinurilor roșii, unde fiecare pahar este o poveste în sine. În fiecare înghițitură descoperi arome intense și texturi bogate care te transportă într-un univers al plăcerilor senzoriale. Vinurile roșii te îmbie cu nuanțe de fructe maturate în soare și arome subtile de condimente și lemn, creând o experiență gustativă captivantă.",
    image: "/Assets/slider-introduction.jpg",
    buttonText: "Cumpara Acum",
  },
  {
    title: "Cabernet Sauvignon",
    description:
      "Un vin roșu robust și plin de corp, cu arome bogate de fructe întunecate precum coacăzele negre și prunele, adesea însoțite de note de cedru, tutun și condimente. Cunoscut pentru taninurile sale structurate și finisajul lung și elegant.",
    image: "/Assets/slider-red-1.png",
    buttonText: "Cumpara Acum",
  },
  {
    title: "Merlot",
    description:
      "Un vin roșu neted și accesibil, cu arome de fructe coapte, prune și uneori note de ciocolată și plante aromatice. De corp mediu, cu taninuri moi, ceea ce-l face o alegere ușor de băut pentru multe ocazii.",
    image: "/Assets/slider-red-2.png",
    buttonText: "Cumpara Acum",
  },
  {
    title: "Pinot Noir",
    description:
      "Un vin roșu elegant și versatil, cu arome delicate de fructe roșii, cireșe și note florale, adesea însoțite de nuanțe pământii. De la ușor la mediu corp, cu taninuri catifelate, perfect pentru a fi asociat cu o varietate de mâncăruri.",
    image: "/Assets/slider-red-3.png",
    buttonText: "Cumpara Acum",
  },
  {
    title: "Cabernet Franc",
    description:
      "Un vin roșu cu arome intense de fructe de pădure și ierburi, împreună cu note subtile de piper și mirodenii. Are adesea taninuri fine și un finisaj echilibrat, fiind apreciat pentru caracterul său aromatic distinctiv.",
    image: "/Assets/slider-red-4.png",
    buttonText: "Cumpara Acum",
  },
  // Add more slides as needed
];
const slides_white = [
  {
    title: "Vinurile Albe: Eleganță și Prospețime",
    description: "Vinurile albe impresionează prin diversitatea lor aromatică, de la aromele intense de fructe tropicale și citrice la subtile note florale. Echilibrul lor perfect între aciditatea vie și dulceața naturală le conferă o complexitate rafinată, făcându-le parteneri versatili pentru o varietate de preparate culinare. Cu bucuria prospețimii și eleganța lor, vinurile albe aduc un plus de răcorire și plăcere în orice moment și orice ocazie.",
    image: "/Assets/slider-introduction2.jpg",
    buttonText: "Cumpara Acum",
  },
  {
    title: "Sauvignon Blanc",
    description:
      "Un vin alb strălucitor și proaspăt, cu arome intense de fructe tropicale precum mango și papaya, însoțite de note subtile de ierburi proaspete și citrice. Are o aciditate vie și o mineralitate distinctă, care îi conferă prospețime și echilibru. Este perfect pentru a fi savurat alături de fructe de mare, salate verzi sau brânzeturi proaspete.",
    image: "/Assets/slider-white1.png",
    buttonText: "Cumpara Acum",
  },
  {
    title: "Chardonnay",
    description:
      "Chardonnay-ul este cunoscut pentru varietatea sa, de la vinuri bogate și cremoase, la cele mai proaspete și mai fructate. Cele mai cremoase variații pot avea arome de vanilie și nuci prăjite, datorită fermentării în butoaie de stejar. Cele mai fructate variații pot oferi arome de mere verzi și pere, cu o notă subtilă de nucă de cocos.",
    image: "/Assets/slider-white2.png",
    buttonText: "Cumpara Acum",
  },
  {
    title: "Riesling",
    description:
      "Riesling-ul este un vin alb cu arome delicate și complexe, dominat de note de fructe de piatră, cum ar fi piersici, caise și nectarine, însoțite de arome florale subtile de flori albe. Este cunoscut pentru echilibrul său între dulceață naturală și aciditate vie, oferind o gamă largă de stiluri, de la uscat până la dulce.",
    image: "/Assets/slider-white3.png",
    buttonText: "Cumpara Acum",
  },
  {
    title: "Pinot Grigio",
    description:
      "Un vin alb ușor și revigorant, cu arome proaspete de pere, mere și citrice, însoțite de note subtile de flori albe și ierburi proaspete. Este apreciat pentru aciditatea sa vibrantă și prospețimea sa, fiind ideal pentru a fi savurat ca aperitiv sau alături de fructe de mare, salate ușoare sau antreuri cu legume proaspete.",
    image: "/Assets/slider-white4.png",
    buttonText: "Cumpara Acum",
  },
  // Add more slides as needed
];
const slides_champagne = [
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
    image: "/Assets/slider-champagne1.png",
    buttonText: "Cumpara Acum",
  },
  {
    title: "Slide 02",
    subtitle: "Subtitle 02",
    description: "slider-champagne3.png",
    image: "/Assets/slider-champagne2.png",
    buttonText: "Cumpara Acum",
  },
  {
    title: "Slide 02",
    subtitle: "Subtitle 02",
    description: "slider-champagne4.png",
    image: "/Assets/slider-champagne3.png",
    buttonText: "Cumpara Acum",
  },
  {
    title: "Slide 02",
    subtitle: "Subtitle 02",
    description: "slider-champagne1.png",
    image: "/Assets/slider-champagne4.png",
    buttonText: "Cumpara Acum",
  },
  // Add more slides as needed
];

export const Wines = () => {
  return (
    <div>
      <WineSlider slides={slides_red} />
      <WineSlider2 slides2={slides_white} />
      <WineSlider3 slides3={slides_champagne} />
    </div>
  );
};
