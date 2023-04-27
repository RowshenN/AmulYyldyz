import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import './Navigation.css'
import logo from '../../images/nav-logo.svg'
import lang from '../../images/language.png'
import narrowdown from '../../images/nav-arrow-down.svg'

const Navigation = () => {
    const navigate = useNavigate();  
    const pathN = useLocation(); 
  return (
    <div>
      <div className="navigationDiv">
        <div className="navLogo">
           <img src={logo} alt="logo" className='navImg' />
        </div>

        <div className="navContainer">
          <ul className="navList">
           <li className={pathN.pathname==="/homepage"?" active NavItem":" NavItem "} onClick={() =>navigate("/homepage")}>Homepage</li>
           <li className={pathN.pathname==="/products"?" active NavItem":" NavItem "} onClick={() =>navigate("/products")}>Products</li>
           <li className={pathN.pathname==="/favourites"?" active NavItem":" NavItem "} onClick={() =>navigate("/favourites")}>Favourites</li>
           <li className={pathN.pathname==="/contact"?" active NavItem":" NavItem "} onClick={() =>navigate("/contact")}>Contact us</li>
           <li className={pathN.pathname==="/about"?" active NavItem":" NavItem "} onClick={() =>navigate("/about")}>About us</li>
         </ul>
        </div>

        <div className="languageDiv">
          <img src={lang} alt="lang"  />
          <span className="engText">English</span> 
          <img src={narrowdown} alt="narrowdown" className='narrowdown' />

          <div  className="langTextDiv">
           <p className='engText'>English</p> 
           <p className='engText'>Русский</p>
          </div>

          <div className="navDiv">
            <div className="navDiv2">
              <span className="navIcon"></span>
            </div>
          </div>
        </div>

       

      </div>
    </div>
  )
}

export default Navigation
