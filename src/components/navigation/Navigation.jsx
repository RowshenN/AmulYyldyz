import React, { useContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import './Navigation.css'
import logo from '../../images/nav-logo.svg'
import lang from '../../images/language.png'
import narrowdown from '../../images/nav-arrow-down.svg'
import cancel from '../../images/cancel.svg'
import Navitem from './burgerbutton-navItem/Navitem'
import { Context } from '../../context/Context'
import { Drawer } from 'antd'

const Navigation = (props) => {
  const [open,setOpen] = useState(false)

  const closeDrawerHandler = () => {
    setOpen(false);
  };

    const navigate = useNavigate();  
    const pathN = useLocation(); 
    const {dil,ChangeDil} = useContext(Context);
  return (
      <div className="navigationDiv" >
        <Drawer
         placement="top"
         closable={false}
         onClose={()=>setOpen(false)}
         open={open}
         key={"placement"}
        >
         <div>
            <Navigation closeDrawerHandler={closeDrawerHandler} close={true}/>
            <div className='drawerContainer'>
              <Navitem 
                pagename = {dil==="RU" ? "Главная" : "Homepage"} 
                pagePathname = "/homepage"
              />
              
              <Navitem 
                pagename = {dil==="RU" ? "Продукты" : "Products"} 
                pagePathname = "/products"
              />

               <Navitem 
                pagename = {dil==="RU" ? "Избранное" : "Favourites"} 
                pagePathname = "/favourites"
              />

               <Navitem 
                pagename = {dil==="RU" ? "Связаться с нами" : "Contact us"}
                pagePathname = "/contact"
              />

               <Navitem 
                pagename = {dil==="RU" ? "О нас" : "About us"}
                pagePathname = "/about"
              />
            </div>
         </div>
      </Drawer>

        <div className="navLogo">
          <img src={logo} alt="logo" className='navImg' />
        </div>

        <div className="navContainer">
          <ul className="navList">
           <li className={pathN.pathname==="/homepage"?" active NavItem":" NavItem "} onClick={() =>navigate("/homepage")}>{dil==="RU" ? "Главная" : "Homepage"}</li>
           <li className={pathN.pathname==="/products"?" active NavItem":" NavItem "} onClick={() =>navigate("/products")}>{dil==="RU" ? "Продукты" : "Products"}</li>
           <li className={pathN.pathname==="/favourites"?" active NavItem":" NavItem "} onClick={() =>navigate("/favourites")}>{dil==="RU" ? "Избранное" : "Favourites"}</li>
           <li className={pathN.pathname==="/contact"?" active NavItem":" NavItem "} onClick={() =>navigate("/contact")}>{dil==="RU" ? "Связаться с нами" : "Contact us"}</li>
           <li className={pathN.pathname==="/about"?" active NavItem":" NavItem "} onClick={() =>navigate("/about")}>{dil==="RU" ? "О нас" : "About us"}</li>
          </ul>
        </div>

        <div className="languageChangeDiv">
          <div className="languageDiv">
            <img src={lang} alt="lang"  />
            <span className="languageName">{dil=="RU"?"Русский":"English"}</span> 
            <img src={narrowdown} alt="narrowdown" className='narrowdown' />

            <div className="langTextDiv">
              <p onClick={()=>{dil === "RU" ? ChangeDil("EN") : ChangeDil("RU")}} className='languageName'>{dil === "RU" ? "English" : "Русский"}</p> 
            </div>
          </div>
        
         {props?.close ?
            <div onClick={()=>props?.closeDrawerHandler()} className="BurgerButton">
              <div className="BurgerButton2" >
               <span> <img src={cancel} alt="cancel" /> </span>
              </div>
            </div>:
           <div onClick={()=>setOpen(true)} className="BurgerButton">
             <div className="BurgerButton2" >
               <span className="navIcon"></span>
             </div>
           </div>
          }
        </div>

      </div>
  )
}

export default Navigation
