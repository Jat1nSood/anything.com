import React, { useContext, useState } from "react";
import banner from "../assets/banner.jpg";
import CartContext from "../context/context";

export default function Product({id, url, title, price, rating, category, description}){

  const {addToCart} = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const[basketCliked, setbasketClicked] = useState(false)
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


      const handleAddToCart = () =>{

        setbasketClicked(true)

      }
    return (
        <div className="landingCard" key={id}>
          <div className="productRating">
            {rating}
          </div>
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

            <button onClick = {() => addToCart(id, title, price, url, quantity, description)} className= {basketCliked ? "addToCart" : "addToCart"}>Add To Basket</button>
          </div>
    )
}