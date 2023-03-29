import React from "react";

import "./CardSpinner.scss";

const CardSpinner = () => {
  const arr = Array(15).fill();
  return (
    <div className="spinner">
      <div className="side-cards">
        {arr.map((_, index) => {
          return (
            <div className="side-cards__card first-side-card" key={index}>
              <span className="side-cards__card--circle"></span>
              <span className="side-cards__card--rectangle"></span>
            </div>
          );
        })}
      </div>
      <div className="main-cards">
        {arr.map((_, index) => {
          return (
            <div className="main-cards__card" key={index}>
              <div className="main-cards__card--upper"></div>
              <div className="main-cards__card--middle"></div>
              <div className="main-cards__card--lower"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardSpinner;
