import { createContext, useState, useEffect } from "react";

const CartContext = createContext();
export function CartProvider({ children }) {
    const [addedProduct, setAddedProduct] = useState([]);
    const [subTotal, setSubTotal] = useState(0); 
  
    const addToCart = (title, price, url, quantity, description) => {

        console.log(quantity)


        const numericPrice = parseFloat(price);
  
      const totalProductPrice = numericPrice * quantity;
  
      setAddedProduct((prevState) => [
        ...prevState,
        { title, url, price: numericPrice, quantity, description, totalProductPrice },
      ]);
  
      
      const updatedSubTotal = addedProduct.reduce(
        (acc, product) => acc + product.totalProductPrice,
        subTotal
      );
  
      setSubTotal(updatedSubTotal);
    };
  
    // useEffect(() => {
    //   if (addedProduct.length === 1) {
    //     setSubTotal(addedProduct[0].totalProductPrice);
    //   }
    // }, [addedProduct]);

    console.log(subTotal)
  
    return (
      <CartContext.Provider value={{ addToCart, addedProduct, subTotal }}>
        {children}
      </CartContext.Provider>
    );
  }
  
export default CartContext;
