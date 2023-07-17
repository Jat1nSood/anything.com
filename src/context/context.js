import { Children, createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){

    const[addedProduct, setAddedProduct] = useState([]);

    const [cartQuant, setCartQuant] = useState('');

    const addToCart = (title) =>{
        setAddedProduct((prevState) => [...prevState, title]);
    }


    return(
        <CartContext.Provider value = {{addToCart, addedProduct}}>{children}</CartContext.Provider>
    )

}

export default CartContext;
