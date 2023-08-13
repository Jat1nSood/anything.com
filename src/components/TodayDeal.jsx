import React from "react";
import "../CSS/todaydeals.css";
import product from "../assets/product.jpg";
import bata from "../assets/bata.jpg";
import PC from "../assets/PC.jpg";
import tv from "../assets/tv.jpg";
import  accessories from "../assets/accessories.jpg";
import  clothes from "../assets/clothes.jpg";
import { useNavigate } from "react-router-dom";






export default function TodayDeal() {
  const navigate = useNavigate();
  const handleClick = (where)=>{
    navigate(`/category/${where}`)
  }
  return (
    <div className="todayDealsContainer">
      <h1>Today's Deals</h1>
     

      <div className="dealsCardContainer">
        <div className="todayDealsCard">
          <img onClick={() =>handleClick('fashion')}  src={product} />
          <div className="todayDealTitle">Upto 50% off </div>
          <div className="todayDealDescription">
            Shirts, Joggers & more
          </div>
        </div>

        <div className="todayDealsCard">
        <img onClick={() =>handleClick('pc')} src={PC} />
          <div className="todayDealTitle">Upto 50% off </div>
          <div className="todayDealDescription">
           Best offers on PC 
          </div>
          

        </div>

        <div className="todayDealsCard">
        <img onClick={()=>handleClick('shoes')}src={bata} />
          <div className="todayDealTitle">Upto 50% off </div>
          <div className="todayDealDescription">
            Bata, Hush & more
          </div>
        </div>

        <div className="todayDealsCard">
        <img onClick={()=>handleClick('electronics')} src={tv} />
          <div className="todayDealTitle">Upto 50% off </div>
          <div className="todayDealDescription">
            TV, Refrigerator & more
          </div>
        </div>
        <div className="todayDealsCard">
        <img onClick={()=>handleClick('fashion')} src={clothes} />
          <div className="todayDealTitle">Upto 50% off</div>
          <div className="todayDealDescription">
            Shirts, Joggers & more
          </div>
        </div>

        <div className="todayDealsCard">
        <img onClick={()=>handleClick('electronics')} src={accessories} />
          <div className="todayDealTitle">Upto 50% off </div>
          <div className="todayDealDescription">
            Mobile, Accessories & more
          </div>
        </div>
      </div>
    </div>
  );
}
