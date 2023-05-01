import React, { useContext, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import './Navigation.css'
import logo from '../../images/nav-logo.svg'
import lang from '../../images/language.png'
import narrowdown from '../../images/nav-arrow-down.svg'
import { Context } from '../../context/Context'
import { Drawer } from 'antd'

const Navigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [open,setOpen] = useState(false)

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  }; 
 
  const closeDrawerHandler = () => {
    setOpen(false);
  };

    const navigate = useNavigate();  
    const pathN = useLocation(); 
    const {dil,ChangeDil} = useContext(Context);
    console.log(dil)
  return (
      <div className="navigationDiv" data-aos="zoom-out">
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
        
        {props?.close ?<div onClick={()=>props?.closeDrawerHandler()} className="BurgeButton">
            <div className="BurgeButton2" >
           
           <span>X</span>
         
          </div>
        </div>:
        <div onClick={()=>setOpen(true)} className="BurgeButton">
          <div className="BurgeButton2" >
            <span className="navIcon"></span>
          </div>
        </div>
        }
        </div>

      </div>
  )
}

export default Navigation
