import React, { useState, useEffect } from "react";
import heroSmartphone from "../assets/heroSmartphone.png";
import everydayEssentials from "../assets/everydayEssentials.jpg";
import electronicsHero from "../assets/electronicsHero.jpg";
import right from "../assets/right.png";
import left from "../assets/left.png";
import { useNavigate } from "react-router-dom";

import { CSSTransition } from "react-transition-group";

import percentage from "../assets/%.png";
import Carousel from "./carousel/Carousel";

export default function HeroCarousel() {
  const navigate = useNavigate();
  const [index, setIndex] = useState();

  const items = [
    {
      title: "Starting 6,999",
      desc: "Smartphone",
      url: heroSmartphone,
      categoryname: "mobile",
    },
    {
      title: "Under 1,999",
      desc: `Top Rated Electronics & more`,
      url: electronicsHero,
      categoryname: "electronics",
    },
    {
      title: "Starting 199",
      desc: "Everyday Essentials",
      url: everydayEssentials,
      categoryname: "essentials",
    },
  ];

  const handleHeroClick = (categoryname) => {
    console.log(categoryname);
    navigate(`/category/${categoryname}`);
  };

  const [currentItem, setCurrentItem] = useState(0);

  const handlePrevSlide = () => {
    if(index === 0){

      setIndex(2);
    
    }
    if(index === 1){

      setIndex(0);
    
    }
    if(index === 2){

      setIndex(1);
    
    }
  };

  const handleNextSlide = () => {
    if(index === 0){

      setIndex(1);
    
    }
    if(index === 1){

      setIndex(2);
    
    }
    if(index === 2){

      setIndex(0);
    
    }
  };

  return (
    <div className="heroCarousel">
      <div className="heroArrowLeft" onClick={handlePrevSlide}>
        <img src={left} />
      </div>
      {/* <div className={`carouselComp active`}>
        {" "}
        <Carousel
          title={items[0].title}
          desc={items[0].desc}
          url={items[0].url}
          categoryname={items.categoryname}
        />
      </div> */}

      <div className="carouselComp">
        <Carousel
          title={items[1].title}
          desc={items[1].desc}
          url={items[1].url}
          categoryname={items.categoryname}
        />
      </div>
{/* 
      <div className="carouselComp active">
        <Carousel
          title={items[2].title}
          desc={items[2].desc}
          url={items[2].url}
          categoryname={items.categoryname}
        />
      </div> */}

      <div className="heroArrowRight" onClick={handleNextSlide}>
        <img src={right} />
      </div>
    </div>
  );
}


