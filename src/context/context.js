import { createContext, useState, useEffect } from "react";

const CartContext = createContext();
export function CartProvider({ children }) {
    const [addedProduct, setAddedProduct] = useState([]);
    const [subTotal, setSubTotal] = useState(0); 
  
    const addToCart = (id, title, price, url, quantity, description) => {

        console.log(quantity)


        const numericPrice = parseFloat(price);
  
      const totalProductPrice = numericPrice * quantity;
  
      setAddedProduct((prevState) => [
        ...prevState,
        {id,  title, url, price: numericPrice, quantity, description, totalProductPrice },
      ]);
  
      
      const updatedSubTotal = addedProduct.reduce(
        (acc, product) => acc + product.totalProductPrice,
        subTotal
      );
  
      setSubTotal(updatedSubTotal);
    };


    const removeProduct = (productIndex) => {
      const updatedProducts = addedProduct.filter((product, index) => index !== productIndex
      );
  
      setAddedProduct(updatedProducts);
  
      const updatedSubTotal = updatedProducts.reduce((acc, product) => acc + product.totalProductPrice, 0);
      setSubTotal(updatedSubTotal);
    };
    
    return (
      <CartContext.Provider value={{ addToCart, removeProduct, addedProduct, subTotal }}>
        {children}
      </CartContext.Provider>
    );
  }
  
export default CartContext;
