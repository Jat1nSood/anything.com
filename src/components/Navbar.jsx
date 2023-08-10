import React, { useContext, useEffect, useState } from "react";
import cart from "../assets/cart.png";
import menu from "../assets/menu.svg";

import search from "../assets/search.png";
import "../CSS/navbar.css";
import { Link } from "react-router-dom";

import CartContext from "../context/context";
import { constSelector, useRecoilValue } from "recoil";
import {user as loginedUser} from '../state/atoms/User';
import {token as jwtToken} from '../state/atoms/Token';

import { useRecoilState } from 'recoil';

export default function Navbar() {
  const {addedProduct} = useContext(CartContext);
  const [toggle, setToggle] = useState(false);
  const user = useRecoilValue(loginedUser)
  const[token, setToken] = useRecoilState(jwtToken)



  const handleLogOut = ()=>{

    setToken('');
    window.location.reload();
        }
  return (

    <nav className="navbar">
      <Link to="/" className="navLogo">
        <Link to="/">
          <h1>Anything.com</h1>
        </Link>
      </Link>

      <ul className="navItems">
        {token ?(<>

          <li className="navItem">
           <p style={{color :"white"}}>Hello, {user}</p>
         </li>
           <li className="navItem">
           <Link >My Account</Link>
         </li>
         <li className="navItem">
           <Link >My Orders</Link>
         </li>
         <li className="navItem">
           <Link onClick={handleLogOut}>Log Out</Link>
         </li>
           <li className="navItem">
           <div className="navCart">
             <Link to={"/mycart"}>
               <img src={cart} />
             </Link>
             <span>{addedProduct.length}</span>
           </div>
         </li>
         </>
        ) : (
          <>
          <li className="navItem">
          <Link to="/login">Login</Link>
        </li>
        <li className="navItem">
          <Link to="/register">Register</Link>
        </li>
        {/* <li className="navItem navSearch">
          <img  src={search} />
        </li> */}

        <li className="navItem">
          <div className="navCart">
            <Link to={"/mycart"}>
              <img src={cart} />
            </Link>
            <span>{addedProduct.length}</span>
          </div>
        </li>
        </>
        )}
        
      </ul>

      <div className="mobileMenu">
        <img
          //   src={toggle ? close : menu}
          src={menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
      </div>
    </nav>
  );
}
