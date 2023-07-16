import React,{useState} from 'react'
import cart from '../assets/cart.png'
import menu from '../assets/menu.svg'

import  search from '../assets/search.png'
import '../CSS/navbar.css'
export default function Navbar() {

    const [toggle, setToggle]= useState(false);

  return (
    <nav className='navbar'>

        <div className='navLogo'>
            <a href='/'><h1>Anything.com</h1></a>
        </div>

        <ul className='navItems'>

            <li className='navItem'><a href='/login'>Login</a></li>
            <li className='navItem'><a href='/register'>Register</a></li>
            <li className='navItem'><img src={search}/></li>

            <li className='navItem'><a href='/mycart'><img src={cart}/></a></li>


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
  )
}
