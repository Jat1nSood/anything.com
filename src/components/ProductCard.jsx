import React, { useState, useEffect } from "react";
import productData from './products.json'
import banner from '../assets/banner.jpg'

export default function ProductCard() {

       //Storing product data in state form products.json file
       const [products, setProducts] = useState([]);

       useEffect(() => {
         setProducts(productData);
       }, []);
   
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
    <div className="landingCardContainer">
    {products.map((product, index) => {
      return (
        <div className="landingCard" key={product.id}>
          <img src={product.url} alt="cardImage" />
          <h2>{product.title}</h2>
    
          <div className="price">
            <div className="quantity">
              <p className="quantityChange" onClick={handleQuantityAdd}>
                +
              </p>
              <p className="quantityChangeNumber">{quantity}</p>
              <p
                className="quantityChange"
                onClick={handleQuantitysubtract}
              >
                -
              </p>
            </div>
            <p>Rs.{product.price}</p>
          </div>

          <button className="addToCart">Add To Basket</button>
        </div>
      );
    })}

  
  </div>
  )
}
