import React, { useState, useEffect, useContext } from "react";
import emptyCart from "../assets/emptyCart.svg";
import AddedProduct from "./AddedProduct";
import "../CSS/mycart.css";

import CartContext from "../context/context";

export default function MyCart() {
  const { addedProduct } = useContext(CartContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(addedProduct);
  }, []);

  return (
    <div className="myCartMain">
      <div className={products.length > 0 ? "myCartContainer" : "myCartContainer1"}>
        <div className="addedProductHeading">
        {products.length > 0 && (
          <div>
          <div className="myCartHeading">Shopping Cart</div>
          <hr />
        </div>
        )}
          
        </div>
        {products.length > 0 ? (
          products.map((product, index) => (
            <AddedProduct
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              url={product.url}
              rating={product.rating}
              category={product.category}
              description={product.description}
            />
          ))
        ) : (
          <div className="myCartEmpty">
            <img src={emptyCart} />
            <h3>No products in the cart</h3>
          </div>
        )}

        {products.length > 0 && (
          <div className="subTotal">
            Subtotal : <span>Rs.999.00</span>
            <hr />
          </div>
        )}
      </div>

      {products.length > 0 && (
        <div className="subTotalCard">
          <div>Subtotal : </div>
        </div>
      )}
    </div>
  );
}
