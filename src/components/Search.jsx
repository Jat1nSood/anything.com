import React, { useState } from "react";
import search from "../assets/search.png";
import productData from "./products.json";

import "../CSS/search.css";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [product, setProduct] = useState([]);
  const [searching, setSearching] = useState(false);

  const searchItem = (e) => {
    setSearchTerm(e.target.value);

    const filteredProduct = productData.filter(
      (product) =>
        product.title.includes(searchTerm) ||
        product.category.includes(searchTerm)
    );

    setProduct(filteredProduct);
    setSearching(true); 

    console.log(filteredProduct);
  };

  const handleNavigate = (id) =>{
setSearching('')
setSearchTerm('')
    navigate(`/soloproduct/${id}`);


  }
  

  return (
    <div className="navSearch">
      <div className="searchField">
        {searchClicked && (
          <input
            onChange={searchItem}
            type="text"
            placeholder="Search..."
            value={searchTerm} // Controlled input value
          />
        )}
        <div className="searchResultContainer">
          {searchTerm &&
            (searching ? (
              product.length > 0 ? (
                product.map((item) => (
                  <div
                    className="searchResult"
                    onClick={() =>handleNavigate(item.id)}
                    key={item.id}
                  >
                    <img src={item.url} />
                    {item.title}
                  </div>
                ))
              ) : (
                <p>No results found.</p>
              )
            ) : (
              <p>Searching...</p>
            ))}
        </div>
      </div>
      <img
        src={search}
        onClick={() => setSearchClicked(!searchClicked)}
        alt="Search Icon"
      />
    </div>
  );
}
