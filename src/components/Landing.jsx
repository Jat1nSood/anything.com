import React, { useState, useEffect } from "react";
import "../CSS/landing.css";

import Hero from "./Hero";
import ProductCard from "./ProductCard";
import ShopByCategory from "./ShopByCategory";
export default function Landing() {
    
    
 

  return (
    <div className="landing">

        <div className="Hero">
            <Hero/>
        </div>

      <div className="landingSearch">
        <div className="filter">
          <p>Sort</p>
          <br />
          <p>filter</p>
        </div>
      </div>

      <div >

       <ShopByCategory/>
      </div>

<div>
    <ProductCard/>
</div>
    </div>
  );
}
