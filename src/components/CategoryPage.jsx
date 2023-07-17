import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import productData from "./products.json";
import Product from "./Product";



export default function CategoryPage() {

  const {categoryname} = useParams();


  const [products, setProducts] = useState([]);

  useEffect(() => {

    const filteredProduct = productData.filter(
      (product) =>product.category === categoryname

    );
    setProducts(filteredProduct);
  }, [categoryname]);

  
  return (
    <div className="landingCardContainer">
      {products.map((product, index) => <Product key={product.id} id = {product.id} title={product.title} price={product.price} url={product.url} category = {product.category}/>)}
    </div>
  );
  
}
