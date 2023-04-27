import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import './Footer.css'

import logo from '../../images/nav-logo.svg'
import mail from '../../images/mail.svg'

const Footer = () => {
  const navigate = useNavigate();  
  const pathN = useLocation(); 
  return (
    <div>
      <div className="footerDiv">
        <div className="footerLogoDiv">
          <img src={logo} alt="logo" className='footerlogo' />
        </div>

        <div className="footerNavDIv">
         <p className={pathN.pathname==="/homepage"?" active footerNavItem":" footerNavItem "} onClick={() =>navigate("/homepage")}>Homepage</p>
         <p className={pathN.pathname==="/products"?" active footerNavItem":" footerNavItem "} onClick={() =>navigate("/products")}>Products</p>
         <p className={pathN.pathname==="/favourites"?" active footerNavItem":" footerNavItem "} onClick={() =>navigate("/favourites")}>Favourites</p>
         <p className={pathN.pathname==="/contact"?" active footerNavItem":" footerNavItem "} onClick={() =>navigate("/contact")}>Contact us</p>
         <p className={pathN.pathname==="/about"?" active footerNavItem":" footerNavItem "} onClick={() =>navigate("/about")}>About us</p>
        </div>

        <p className='footerText'>Subscribe for our newsletter</p>

        <div className="footerFormDiv" style={{position:"relative"}}>
          <form action="post">
            <img src={mail} alt="mail" style={{position:"absolute",left:"2%",top:"30%", cursor:"pointer"}} />
            <input type="text" placeholder='Email address' className='footerInput' style={{paddingLeft:"50px",fontSize:"18px"}} />
            <button className='footerButton'><span className='footerButtontext'></span> Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
