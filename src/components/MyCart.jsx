import React, { useState, useEffect, useContext } from "react";
import emptyCart from "../assets/emptyCart.svg";
import greenTick from "../assets/greenTick.png";
import AlsoBought from "./AlsoBought";
import AddedProduct from "./AddedProduct";
import "../CSS/mycart.css";
import CartContext from "../context/context";
import Product from "./Product";
import { useRecoilState, useRecoilValue } from "recoil";
import { addedProduct as cartAddedProduct } from '../state/atoms/Incart';
import { useNavigate } from "react-router-dom";
import {userEmail as loggedInEmail} from '../state/atoms/Email';


export default function MyCart() {

  const userEmail = useRecoilValue(loggedInEmail)
  const navigate = useNavigate();
  const {  subTotal } = useContext(CartContext);
  // const addedProduct = useRecoilValue(cartAddedProduct);
  const [addedProduct, setaddedProduct] = useRecoilState(cartAddedProduct);
  const [products, setProducts] = useState([]);

  const user = 'jatinsood@gmail.com'; // Replace with the actual logged-in user's identifier

useEffect(() => {
  if (addedProduct) {
    setProducts(addedProduct);
  }
}, [addedProduct]);



//Handle Proceed to buy

const handelBuy = async() =>{

  const sendData = await fetch(`http://localhost:5000/buynow`,{
    method :"POST",
    headers : {
      "Content-type" : "application/json"
},

body : JSON.stringify({addedProduct : addedProduct, user : userEmail})
  })


  const response = await sendData.json();

  if(response.message === "done"){

    alert("Your Order has been placed");
    setaddedProduct([]);
    navigate('/')

  }

}
  return (
    <div className="myCartMain">
      <div
        className={products.length > 0 ? "myCartContainer" : "myCartContainer1"}
      >
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
              quantity={product.quantity}
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
            Subtotal : <span>{subTotal}.00</span>
            <hr />
          </div>
        )}
      </div>

      {products.length > 0 && (
        <div className="subTotalMain">
          <div className="subTotalCard">
            <div className="freeDeliveryText">
              <img src={greenTick} />
              <p>
                <span>Part of your order qualifies for FREE Delivery.</span>{" "}
                Select this option at checkout. Details
              </p>
            </div>
            <div style={{ fontWeight: "600" }}>
              Subtotal({addedProduct.length} items): Rs.{subTotal}.00{" "}
            </div>
            <button onClick={handelBuy}>Proceed to buy</button>
          </div>
          <div className="alsoBought">

            <AlsoBought/>


          </div>
        </div>
      )}
    </div>
  );
}
