import React from "react";
import "./BestWines.css";
export const BestWines = () => {
  return (
    <div className="container">
      <div>
        <h3 className="title">Best Wines</h3>
      </div>
      <div className="collection">
        <div className="collection-item">
          <p className="price">34 Lei</p>
          <p className="type">Rose</p>
          <img src="assets/bottle.png" alt="" className="bottle" />
        </div>
        <div className="collection-item">
          <p className="price">34 Lei</p>
          <p className="type">Rose</p>
          <img src="assets/bottle.png" alt="" className="bottle" />
        </div>
        <div className="collection-item">
          <p className="price">34 Lei</p>
          <p className="type">Rose</p>
          <img src="assets/bottle.png" alt="" className="bottle" />
        </div>
        <div className="collection-item">
          <p className="price">34 Lei</p>
          <p className="type">Rose</p>
          <img src="assets/bottle.png" alt="" className="bottle" />
        </div>
      </div>
    </div>
  );
};
