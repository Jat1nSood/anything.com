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
      {products.map((product, index) => <Product id={product.id} name={product.name} price={product.name} url={product.url} />)}
    </div>
  );
}
