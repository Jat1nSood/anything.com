import React, {useState, useEffect, useContext} from 'react'
import Product from "./Product";

import CartContext from '../context/context';

export default function MyCart() {

    const {addedProduct} = useContext(CartContext);


    const [products, setProducts] = useState([]);

    useEffect(() => {
      setProducts(addedProduct);
    }, []);
  return (
    <div className="landingCardContainer">
    {products.map((product, index) => <Product key={product.id} id = {product.id} title={product.title} price={product.price} url={product.url} rating={product.rating} category = {product.category}/>)}
  </div>
  )
}
