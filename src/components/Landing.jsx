import React, { useState, useEffect } from "react";
import "../CSS/landing.css";

import Hero from "./Hero";
import BigCards from "./BigCards";
import ProductCard from "./ProductCard";
import TodayDeal from "./TodayDeal";
import ShopByCategory from "./ShopByCategory";
export default function Landing() {

    
    
 

  return (
    <div className="landing">

        <div className="Hero">
            <Hero/>
        </div>

     
        <div>
        <BigCards/>
      </div>

      <div>
        <TodayDeal/>
      </div>
      <div >

       <ShopByCategory/>
      </div>

      <div>
        <TodayDeal/>
      </div>



{/* <div>
    <ProductCard/>
</div> */}
    </div>
  );
}
