import { createContext, useState, useEffect } from "react";
import { addedProduct as cartAddedProduct } from "../state/atoms/Incart";
import { useRecoilState } from "recoil";

const CartContext = createContext();
export function CartProvider({ children }) {
  const [addedProduct, setAddedProduct] = useRecoilState(cartAddedProduct);
  const [subTotal, setSubTotal] = useState(0);

  const addToCart = (id, title, price, url, quantity, description) => {
    console.log("controll Reacherd add to cart");
    const numericPrice = parseFloat(price);

    const totalProductPrice = numericPrice * quantity;

    setAddedProduct((prevState) => [
      ...prevState,
      {
        id,
        title,
        url,
        price: numericPrice,
        quantity,
        description,
        totalProductPrice,
      },
    ]);

    const updatedSubTotal = addedProduct.reduce(
      (acc, product) => acc + product.totalProductPrice,
      subTotal
    );

    setSubTotal(updatedSubTotal);
  };

  const removeProduct = (productId) => {

    const updatedProducts = addedProduct.filter(
      (product) => product.id !== productId
    );

    setAddedProduct([...updatedProducts]);
    console.log(updatedProducts);

    const updatedSubTotal = updatedProducts.reduce(
      (acc, product) => acc + product.totalProductPrice,
      0
    );
    setSubTotal(updatedSubTotal);
  };

  return (
    <CartContext.Provider
      value={{ addToCart, removeProduct, addedProduct, subTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
