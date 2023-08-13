// import React, { useState, useEffect } from "react";
// import productData from "./products.json";
// import "../CSS/categorypage.css";
// export default function FilterMenu({categoryname}) {
   
//     const [selectedCategories, setSelectedCategories] = useState([]);
//     const [products, setProducts] = useState([]);

//     const items = [
//         {
//             fashion: ["shoes", "watch", "shirt", "pants"],
//             electronics: ["TV", "fridge", "laptop"]
//         }
//     ];
//     useEffect(() => {
//         const filteredProduct = productData.filter((product) =>
//           product.category.includes(categoryname)
//         );
//         setProducts(filteredProduct);
//       }, [categoryname]);
    

//     const applyFilter = () =>{
//         console.log(selectedCategories)

//         let filteredProducts = [...products];
//         console.log(filteredProducts)
    
//         if (selectedCategories.length > 0) {
//            filteredProducts = filteredProducts.filter((product) =>
//             product.category.includes(selectedCategories)

//           );
//           console.log(filteredProducts)
         
//           setProducts(filteredProducts)
//           console.log(products)
    
//         }
    
//       }

//       const handleCategoryCheckboxChange = (subcategory) => {
//         if (products.includes(subcategory)) {
//           setSelectedCategories(selectedCategories.filter((cat) => cat !== subcategory));
//         } else {
//           setSelectedCategories([...selectedCategories, subcategory]);
//         }
//       };
    
//   return (
//     <>
        
//         <div className="sortBy">
//           <h3>Sort by</h3>
//           <div className="sortByInput">
//             <input type="checkbox" />
//             <label>Price high to low</label>
//           </div>
//           <div className="sortByInput">
//             <input type="checkbox" />
//             <label>Price low to high</label>
//           </div>
//           <div className="sortByInput">
//             <input type="checkbox" />
//             <label>Average customer review</label>
//           </div>
//         </div>
//         <div className="sortBy">
//           <h3>Gender</h3>
//           <div className="sortByInput">
//             <input type="checkbox" 
//               value='womens'
//               onChange={(e) => setSelectedCategories(e.target.value)}
//               />
//             <label>Mens</label>
//           </div>
//           <div className="sortByInput">
//             <input type="checkbox" 
//             value='womens'
//             onChange={(e) => setSelectedCategories(e.target.value)}
//             />
//             <label>Womens</label>
//           </div>
//           <div className="sortBy">
//           <h3>Category</h3>
//           {items[0][categoryname] &&
//             items[0][categoryname].map((subcategory) => (
//               <div className="sortByInput" key={subcategory}>
//                 <input
//                   type="checkbox"
//                   value={subcategory}
//                   onChange={() => handleCategoryCheckboxChange(subcategory)}
//                 //   checked={selectedCategories.includes(subcategory)}
//                 />
//                 <label>{subcategory}</label>
//               </div>
//             ))}
//           </div>
//           </div>
                    

      
//         <button onClick={applyFilter}>Apply</button>
//       </>
      
//   )
// }
