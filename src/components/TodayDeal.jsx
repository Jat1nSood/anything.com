import React from "react";
import "../CSS/todaydeals.css";
import product from "../assets/product.jpg";

export default function TodayDeal() {
  return (
    <div className="todayDealsContainer">
      <h1>Today's Deals</h1>
     

      <div className="dealsCardContainer">
        <div className="todayDealsCard">
          <img src={product} />
          <div className="todayDealTitle">Upto 50% off </div>
          <div className="todayDealDescription">
            Shirts, Joggers & more
          </div>
        </div>

        <div className="todayDealsCard">
        <img src={product} />
          <div className="todayDealTitle">Upto 50% off </div>
          <div className="todayDealDescription">
           Best offers on PC 
          </div>
          

        </div>

        <div className="todayDealsCard">
        <img src={product} />
          <div className="todayDealTitle">Upto 50% off </div>
          <div className="todayDealDescription">
            Bata, Hush & more
          </div>
        </div>

        <div className="todayDealsCard">
        <img src={product} />
          <div className="todayDealTitle">Upto 50% off </div>
          <div className="todayDealDescription">
            TV, Refrigerator & more
          </div>
        </div>
        <div className="todayDealsCard">
        <img src={product} />
          <div className="todayDealTitle">Upto 50% off</div>
          <div className="todayDealDescription">
            Shirts, Joggers & more
          </div>
        </div>

        <div className="todayDealsCard">
        <img src={product} />
          <div className="todayDealTitle">Upto 50% off </div>
          <div className="todayDealDescription">
            Mobile, Accessories & more
          </div>
        </div>
      </div>
    </div>
  );
}
