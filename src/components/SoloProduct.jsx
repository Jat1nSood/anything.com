import React, { useContext, useEffect, useState } from "react";
import "../CSS/soloproduct.css";
import { useParams } from "react-router-dom";
import productData from "./products.json";
import CartContext from "../context/context";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import TextField from "@mui/material/TextField";


export default function SoloProduct() {

    const {addToCart} = useContext(CartContext);
    const {id} = useParams();
    const [product, setProduct] = useState([]);


    useEffect(() => {
        const filteredProduct = productData.filter((product) => product.id === id);
        console.log("Filtered Product:", filteredProduct);

        setProduct(filteredProduct);

      }, [id]);

      const { title, price, url } = product[0] || {};
      console.log(title)

  return (
    <div className="soloProduct">
      <div className="soloProduct1">
        <div className="soloImage">
          <img
            src={url}
            alt="solo"
          />
        </div>

        <div className="soloDescription">
          <div className="soloTitle">
            <h1>
                {title}
            </h1>
          </div>

          <h2>Rs {price}</h2>
          <button onClick={() => addToCart(id, title, price, url)}>Add to cart</button>

         
        </div>
      </div>
    </div>
  );
}
