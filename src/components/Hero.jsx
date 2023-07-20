import React from "react";
import "../CSS/hero.css";
import BigCards from './BigCards'
import ProductCard from "./ProductCard";
import TodayDeal from "./TodayDeal";
import ShopByCategory from "./ShopByCategory";

import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <div className="hero">

      <HeroCarousel/>

      
    </div>
  );
}
