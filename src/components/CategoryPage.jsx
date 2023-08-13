import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productData from "./products.json";
import Product from "./Product";
import "../CSS/categorypage.css";
import FilterMenu from "./FilterMenu";

export default function CategoryPage() {
  //States
  const [selectedGender, setSelectedGender] = useState(null);

  const { categoryname } = useParams();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [products, setProducts] = useState([]);

  //On loading of page for the first time
  useEffect(() => {
    const filteredProduct = productData.filter((product) =>
      product.category.includes(categoryname)
    );
    setProducts(filteredProduct);
    console.log("all products loaded for the first time");
  }, [categoryname]);

  //Subcategories
  const items = [
    {
      fashion: ["shoes",  "shirt", "pants"],
      electronics: ["TV", "Refrigerator", "laptop"],
      shoes: ["formal", "sports", "sneaker"],

    },
  ];

  //Gender function
  const handleGender = (gender) => {
    setSelectedGender(gender);
    let filteredProduct = productData.filter((product) =>
      product.category.includes(categoryname)
    );

    if (gender === "mens") {
      filteredProduct = productData.filter((product) =>
        product.category.includes("mens")
      );
    } else if (gender === "womens") {
      filteredProduct = productData.filter((product) =>
        product.category.includes("womens")
      );
    }

    setProducts(filteredProduct);
  };

  const handleCategory = (category) => {
    if(category){
      setSelectedCategories(category);

    }
  };

  //Filter function
  const applyFilter = () => {
    console.log(selectedCategories);

    let filteredProducts = [...products];

    console.log(filteredProducts);

    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        product.category.includes(selectedCategories)
      );
      console.log(filteredProducts);

      setProducts(filteredProducts);
      console.log(products);
    }
  };

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
        </div>
        {categoryname === "fashion" && (
          <div className="sortBy">
            <>
              <h3>Gender</h3>
              <div className="sortByInput">
                <input
                  type="radio"
                  name="gender"
                  value="All"
                  checked={selectedGender === "All"}
                  onChange={(e) => handleGender(e.target.value)}
                />
                <label>All</label>
              </div>
              <div className="sortByInput">
                <input
                  type="radio"
                  name="gender"
                  value="mens"
                  checked={selectedGender === "mens"}
                  onChange={(e) => handleGender(e.target.value)}
                />
                <label>Mens</label>
              </div>
              <div className="sortByInput">
                <input
                  type="radio"
                  name="gender"
                  value="womens"
                  checked={selectedGender === "womens"}
                  onChange={(e) => handleGender(e.target.value)}
                />
                <label>Womens</label>
              </div>
            </>
          </div>
        )}
        <div className="sortBy">
        <h3>Category</h3>

          {items[0][categoryname] &&
            items[0][categoryname].map((subcategory) => (
              <>

              <div className="sortByInput" key={subcategory}>
                <input
                  type="checkbox"
                  value={subcategory}
                  checked={selectedCategories === subcategory}
                  onChange={() => handleCategory(subcategory)}
                />
                <label>{subcategory}</label>
              </div>
              </>
            ))}
        </div>
        <button onClick={applyFilter}>Apply</button>
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
