import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import './Footer.css'

import logo from '../../images/nav-logo.svg'
import mail from '../../images/mail.svg'
import { Context } from '../../context/Context'

const Footer = () => {
  const {dil} = useContext(Context)
  const navigate = useNavigate();  
  const pathN = useLocation(); 
  return (
    <div>
      <div className="footerDiv">
        <div className="footerLogoDiv">
          <img src={logo} alt="logo" className='footerlogo' />
        </div>

        <div className="footerNavDIv">
         <p className={pathN.pathname==="/homepage" ? "active footerNavItem":" footerNavItem "} onClick={() =>navigate("/homepage")}>{dil === "RU" ? "Главная" : "Homepage"}</p>
         <p className={pathN.pathname==="/products" ? "active footerNavItem":" footerNavItem "} onClick={() =>navigate("/products")}>{dil === "RU" ? "Продукты" :"Products"}</p>
         <p className={pathN.pathname==="/favourites" ? "active footerNavItem":" footerNavItem "} onClick={() =>navigate("/favourites")}>{dil === "RU" ? "Избранное" : "Favourites"}</p>
         <p className={pathN.pathname==="/contact" ? "active footerNavItem":" footerNavItem "} onClick={() =>navigate("/contact")}>{dil === "RU" ? "Связаться с нами" : "Contact us"}</p>
         <p className={pathN.pathname==="/about" ? "active footerNavItem":" footerNavItem "} onClick={() =>navigate("/about")}>{dil === "RU" ? "О нас" :"About us"}</p>
        </div>

        <p className='footerText'>{dil === "RU" ? "Подпишитесь на нашу рассылку" : "Subscribe for our newsletter"}</p>

        <div className="footerFormDiv" style={{position: "relative"}}>
          <form action="">
            <img src={mail} alt="mail" style={{position:"absolute",left:"2%",top:"30%", cursor:"pointer"}} />
            <input type="text" placeholder={dil === "RU" ? "Э-почта" : "Email address"} className='footerInput' style={{paddingLeft:"50px",fontSize:"18px"}} />
            <button className='footerButton'><span className='footerButtontext'>{dil === "RU" ? "Отправить" : "Submit"}</span></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
