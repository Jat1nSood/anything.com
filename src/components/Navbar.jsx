import React, { useContext, useState } from "react";
import cart from "../assets/cart.png";
import menu from "../assets/menu.svg";

import search from "../assets/search.png";
import "../CSS/navbar.css";
import { Link } from "react-router-dom";

import CartContext from "../context/context";
export default function Navbar() {

  const {addedProduct} = useContext(CartContext);
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navLogo">
        <Link to="/">
          <h1>Anything.com</h1>
        </Link>
      </Link>

      <ul className="navItems">
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
