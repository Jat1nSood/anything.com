import { Children, createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}){

    const[addedProduct, setAddedProduct] = useState([]);

    const [cartQuant, setCartQuant] = useState('');

    const addToCart = (title, price, url,  quantity, description) =>{
        setAddedProduct((prevState) => [...prevState, {title : title, url : url, price : price, quantity : quantity, description : description}]);
    }

 

    return(
        <CartContext.Provider value = {{addToCart, addedProduct}}>{children}</CartContext.Provider>
    )

}

export default CartContext;
