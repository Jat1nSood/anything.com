import React, { useContext, useState , useEffect} from "react";
import banner from "../assets/banner.jpg";
import CartContext from "../context/context";
import '../CSS/mycart.css'
export default function AddedProduct({id, url, title, price, rating, category, description}){

    const [quantity, setQuantity] = useState(1);
    const handleQuantityAdd = () => {
        if (quantity < 3) {
          setQuantity(quantity + 1);
        } else {
          alert("You can only add 3 at once");
        }
      };
    
      const handleQuantitysubtract = () => {
        if (quantity <= 1) {
          setQuantity(1);
        } else {
          setQuantity(quantity - 1);
        }
      };
    
 
    return (
<>

<div className="addedProductOuter">



        <div className="myCartCard" key={id}>


          <img className="myCartImage" src={url}/>
          <div className="myCartTitle">
            <h3 style={{fontWeight:"500"}}>{description}</h3>
            <h3>Rs.{price}</h3>

            <div className="myCartQuantity">
              <select>
                <option>
                  {quantity}
                </option>
              </select>

              <button className="remove">Remove</button>
            </div>
          </div>
          


          </div>



          </div>

          </>
    )
}