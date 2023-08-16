import React, { useContext, useState, useEffect } from "react";
import cart from "../assets/cart.png";
import menu from "../assets/menu.png";
import search from "../assets/search.png";

import "../CSS/navbar.css";
import { Link } from "react-router-dom";

import CartContext from "../context/context";
import { useRecoilValue } from "recoil";
import { user as loginedUser } from "../state/atoms/User";
import { token as jwtToken } from "../state/atoms/Token";

import { useRecoilState } from "recoil";
import Search from "./Search";

export default function Navbar() {
  const { addedProduct } = useContext(CartContext);
  const [toggle, setToggle] = useState(false);
  const user = useRecoilValue(loginedUser);
  const [token, setToken] = useRecoilState(jwtToken);
  const [isMobile, setIsMobile] = useState(false);

  const handleLogOut = () => {
    setToken("");
    window.location.reload();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {isMobile ? (
        <nav>
          <div className="navMain">
            {toggle && (
              <div className={`navSidebar ${toggle ? "show" : ""}`}>
                <ul className="mobileMenuItems">
                  {token ? (
                    <>
                      {/* Mobile menu items for logged-in users */}
                      <li className="mobileNavItem">
                        <Link
                          className="mobileNavLink"
                          onClick={() => setToggle(false)}
                          to="/"
                        >
                          Hello, {user}
                        </Link>
                      </li>
                      <li className="mobileNavItem">
                        <Link
                          className="mobileNavLink"
                          onClick={() => setToggle(false)}
                          to="/myorders"
                        >
                          Your Orders
                        </Link>
                      </li>
                      {/* ... Other mobile menu items ... */}
                      <li className="mobileNavItem">
                        <Link className="mobileNavLink" onClick={handleLogOut}>
                          Log Out
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      {/* Mobile menu items for non-logged-in users */}

                      <li className="mobileNavItem">
                        <Link
                          onClick={() => setToggle(false)}
                          className="mobileNavLink"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="mobileNavItem">
                        <Link
                          onClick={() => setToggle(false)}
                          className="mobileNavLink"
                          to="/login"
                        >
                          <span style={{ color: "#f7ca00" }}></span>Sign In
                        </Link>
                      </li>
                      <li className="mobileNavItem">
                        <Link
                          onClick={() => setToggle(false)}
                          className="mobileNavLink"
                          to="/register"
                        >
                          Sign Up
                        </Link>
                      </li>
                      {/* ... Other mobile menu items ... */}
                    </>
                  )}
                </ul>
              </div>
            )}
            <div className="mobileMenu">
              <img
                // src={toggle ? close : menu}
                src={menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle(!toggle)}
              />

              <Link to={"/"} className="mobileLogo">
                AnyThing.com
              </Link>
              <div className="mobileSearch">
                <Search/>
              </div>

              <div className="mobileCartImage">
                {" "}
                <Link to={"/mycart"}>
                  <img src={cart} />
                </Link>
                <div>
                  {" "}
                  <Link className="mobileCarNumber" to={"/mycart"}>
                    {addedProduct.length}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <>
          {" "}
          <nav className="navbar">
            <Link to="/" className="navLogo">
              <h1>AnyThing.com</h1>
            </Link>

         

            <ul className="navItems">
              {token ? (
                <>
                 
                    <Search/>
                  
                  <li className="navItem">
                    <Link to={"/"}>
                      {" "}
                      <p style={{ color: "white" }}>
                        <span style={{ color: "#f7ca00", fontWeight: "900" }}>
                          Hello,
                        </span>{" "}
                        {user}
                      </p>
                    </Link>
                  </li>

                  <li className="navItem">
                    <Link to="/myorders">Your Orders</Link>
                  </li>
                  <li className="navItem">
                    <Link onClick={handleLogOut}>Log Out</Link>
                  </li>
                  <li className="navItem">
                    <div className="navCart">
                      <Link to={"/mycart"}>
                        <img src={cart} alt="" />
                      </Link>
                      <Link to={'/mycart'}><span style={{ color: "#f7ca000", fontWeight: "700" }}>
                        {addedProduct.length}
                      </span></Link>
                    </div>
                  </li>
                 
                </>
              ) : (
                <>
                                    <Search/>

                  <li className="navItem">
                    <Link to="/login">
                      <p>
                        <span style={{ color: "#f7ca00" }}>Sign In</span>
                      </p>
                    </Link>
                  </li>
                  <li className="navItem">
                    <Link to="/register">
                      <p>Sign Up</p>
                    </Link>
                  </li>
                  {/* <li className="navItem navSearch">
          <img  src={search} />
        </li> */}

                  <li className="navItem">
                    <div className="navCart">
                      <Link to={"/mycart"}>
                        <img src={cart} alt="" />
                      </Link>
                      <Link to={'/mycart'}><span style={{ color: "#f7ca000", fontWeight: "700" }}>
                        {addedProduct.length}
                      </span></Link>
                      
                    </div>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </>
      )}
    </>
  );
}
