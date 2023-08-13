import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { CSSTransition } from "react-transition-group";

import percentage from "../../assets/%.png";

export default function Carousel({title , desc , url}) {
  return (

    <div className={`heroDetails`}>
      
        <div className={`heroProductDescription`}>
          <h1>{title}</h1>
          <h2>{desc}</h2>
          <div className="heroEmi">
            <div className="emiCard1">
              <img src={percentage} alt="NO COST EMI" />
              <p>NO COST EMI</p>
            </div>
            <div className="emiCard">
              <img src={percentage} alt="NO COST EMI" />
              <p>NO COST EMI</p>
            </div>
          </div>
        </div>
      
      <img
        style={{ cursor: "pointer" }}
        // onClick={() => handleHeroClick(items[currentItem].categoryname)}
        src={url}
        alt="Smartphone"
      />
    </div>
    

  )
}
