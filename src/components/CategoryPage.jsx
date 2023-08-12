import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productData from "./products.json";
import Product from "./Product";
import "../CSS/categorypage.css";

export default function CategoryPage() {
  const { categoryname } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const filteredProduct = productData.filter(
      (product) => product.category.includes(categoryname)
      );
    setProducts(filteredProduct);
  }, [categoryname]);

  return (
    <div className="categoryMain">
      <div className="filterMenu">
        <div className="sortBy">
          <h3>Sort by</h3>
          <div className="sortByInput">
            <input type="checkbox" />
            <label>Price high to low</label>
          </div>
          <div className="sortByInput">
            <input type="checkbox" />
            <label>Price low to high</label>
          </div>
          <div className="sortByInput">
            <input type="checkbox" />
            <label>Average customer review</label>
          </div>

          <button>Apply</button>
        </div>
      </div>

      <div className="categoryCardContainerOuter">
        <div className="categoryCardContainerHeading">
   
          <h1>Results</h1>
        </div>
        <div className="categoryCardContainer">
          {products.map((product, index) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              url={product.url}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
