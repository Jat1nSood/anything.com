import React, { useState } from "react";
import banner from "../assets/banner.jpg";


export default function Product({id, url, title, price}){
    const [quantity, setQuantity] = useState(1);
    const handleQuantityAdd = () => {
        if (quantity < 3) {
          setQuantity(quantity + 1);
        } else {
          alert("You can only add 3 at once");
        }
      };
    
      const handleQuantitysubtract = () => {
        if (quantity <= 1) {
          setQuantity(1);
        } else {
          setQuantity(quantity - 1);
        }
      };
    return (
        <div className="landingCard" key={id}>
            <img src={url} alt="cardImage" />
            <h2>{title}</h2>

            <div className="price">
              <div className="quantity">
                <p className="quantityChange" onClick={handleQuantityAdd}>
                  +
                </p>
                <p className="quantityChangeNumber">{quantity}</p>
                <p className="quantityChange" onClick={handleQuantitysubtract}>
                  -
                </p>
              </div>
              <p>Rs.{price}</p>
            </div>

            <button className="addToCart">Add To Basket</button>
          </div>
    )
}