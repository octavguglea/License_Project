import React from "react";
import "./BestWines.css";
export const BestWines = () => {
  return (
    <div className="bestwines-container">
      <div>
        <h3 className="bestwines-title">Best Wines</h3>
      </div>
      <div className="bestwines-collection">
        <div className="bestwines-collection-item">
          <p className="bestwines-price">34 Lei</p>
          <p className="bestwines-type">Rose</p>
          <img src="assets/bottle.png" alt="" className="bestwines-bottle" />
        </div>
        <div className="bestwines-collection-item">
          <p className="bestwines-price">34 Lei</p>
          <p className="bestwines-type">Rose</p>
          <img src="assets/bottle.png" alt="" className="bestwines-bottle" />
        </div>
        <div className="bestwines-collection-item">
          <p className="bestwines-price">34 Lei</p>
          <p className="bestwines-type">Rose</p>
          <img src="assets/bottle.png" alt="" className="bestwines-bottle" />
        </div>
        <div className="bestwines-collection-item">
          <p className="bestwines-price">34 Lei</p>
          <p className="bestwines-type">Rose</p>
          <img src="assets/bottle.png" alt="" className="bestwines-bottle" />
        </div>
      </div>
    </div>
  );
};
