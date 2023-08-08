import React from "react";
import product from "../assets/product.jpg";
import "../CSS/alsobought.css";
export default function AlsoBought() {
  return (

      

   
    <div className="alsoBoughtContainer">

      <h2>Frequently Bought</h2>
      <div className="asloBoughtCard">
        <img src={product} />
        <div className="alsoInner">
          <h3>Heloo This is a product</h3>
          <button>Add to Cart</button>
        </div>
      </div>

      <div className="asloBoughtCard">
        <img src={product} />
        <div className="alsoInner">
          <h3>Heloo This is a product</h3>
          <button>Add to Cart</button>
        </div>
      </div>

      <div className="asloBoughtCard">
        <img src={product} />
        <div className="alsoInner">
          <h3>Heloo This is a product</h3>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
