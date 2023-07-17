import React, { useState, useEffect } from "react";
import productData from "./products.json";
import Product from "./Product";

export default function ProductCard() {
  //Storing product data in state form products.json file
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
  }, []);

  return (
    <div className="landingCardContainer">
      {products.map((product, index) => <Product key={product.id} id = {product.id} title={product.title} price={product.price} url={product.url} rating={product.rating} category = {product.category}/>)}
    </div>
  );
}
