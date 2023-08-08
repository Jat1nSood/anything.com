import React, { useContext, useState , useEffect} from "react";
import banner from "../assets/banner.jpg";
import CartContext from "../context/context";
import '../CSS/mycart.css'
export default function AddedProduct({id, url, title, price, rating, category, description, quantity}){
  
  const {removeProduct} = useContext(CartContext);

    // const [quantity, setQuantity] = useState();
    // const handleQuantityAdd = () => {
    //     if (quantity < 3) {
    //       setQuantity(quantity + 1);
    //     } else {
    //       alert("You can only add 3 at once");
    //     }
    //   };
    
    //   const handleQuantitysubtract = () => {
    //     if (quantity <= 1) {
    //       setQuantity(1);
    //     } else {
    //       setQuantity(quantity - 1);
    //     }
    //   };
    
    const handleRemove = () => {
      console.log(id)
      console.log(title)

      removeProduct(id); 
    };
  
    return (
<>

<div className="addedProductOuter">



        <div className="myCartCard" key={id}>


          <img className="myCartImage" src={url}/>
          <div className="myCartTitle">
            <h3 style={{fontWeight:"500"}}>{title}</h3>
            <h3>Rs.{price}</h3>

            <div className="myCartQuantity">
              <select>
                <option>
                  {quantity}
                </option>
              </select>

              <button onClick={handleRemove} className="remove">Remove</button>
            </div>
          </div>
          


          </div>


          </div>

          </>
    )
}