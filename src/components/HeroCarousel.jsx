import React, { useState } from "react";
import heroSmartphone from "../assets/heroSmartphone.png";
import everydayEssentials from "../assets/everydayEssentials.jpg";
import electronicsHero from "../assets/electronicsHero.jpg";
import right from "../assets/right.png";
import left from "../assets/left.png";
import { useNavigate } from "react-router-dom";




import percentage from "../assets/%.png";

export default function HeroCarousel() {

  const navigate  = useNavigate();



  const items = [
    {
      title: "Starting 6,999",
      desc: "Smartphone",
      url : heroSmartphone,
      categoryname : "mobile"
    },
    {
      title: "Under 1,999",
      desc: `Top Rated Electronics & more`,
      url : electronicsHero,
      categoryname : "electronics"
    },
    {
      title: "Starting 199",
      desc: "Everyday Essentials",
      url : everydayEssentials,
      categoryname : "essentials"


    },
  ];


  const handleHeroClick = (categoryname) =>{
    console.log(categoryname)

    navigate(`/category/${categoryname}`);

  }

  

  const [currentItem, setCurrentItem] = useState(0);

  const handlePrevSlide = () => {
    setCurrentItem((prevItem) => (prevItem === 0 ? items.length - 1 : prevItem - 1));
  };

  const handleNextSlide = () => {
    setCurrentItem((prevItem) => (prevItem === items.length - 1 ? 0 : prevItem + 1));
  };

  const { title, desc , url, categoryname} = items[currentItem];

  return (
    <div className="heroCarousel">
      <div className="heroArrow" onClick={handlePrevSlide}>

        <img src={left}/>
      </div>
      <div className="heroDetails">
        <div className="heroProductDescription">
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
        <img style = {{cursor : "pointer"}}onClick = {() =>handleHeroClick(categoryname)}src={url} alt="Smartphone" />
      </div>
      <div className="heroArrow" onClick={handleNextSlide}>
      <img src={right}/>

      </div>
    </div>
  );
}

