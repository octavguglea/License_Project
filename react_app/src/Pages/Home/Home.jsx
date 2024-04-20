import React from "react";

import { BestWines } from "./Parts/BestWines/BestWines";
import { Introduction } from "./Parts/Introduction/Introduction";
import { Description } from "./Parts/Description/Description";

export const Home = () => {
  return (
    <div>
      <Introduction />
      <Description />
      <BestWines /> 
    </div>
  );
};
