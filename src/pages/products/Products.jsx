import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import './Products.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import Card from '../../components/card/Card'
import FilterText from './filterText/FilterText'
import Pagename from '../../components/pagename/Pagename'
import { Context } from '../../context/Context'
import icon from '../../images/filter-icon.svg'
import { Drawer } from 'antd'
import DrawerItem from './drawerItem/DrawerItem'
import DrawerHeader from './DrawerHeader/DrawerHeader'


const Products = (props) => {
  const {dil} = useContext(Context)
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const closeDrawerHandler = () => {
    setOpen(false);
  }

  const [open2, setOpen2] = useState(false)
  const closeDrawer2Handler = () => {
    setOpen2(false);
  }
  AOS.init({duration: 600, delay: 100}) 

  return (
    <div>
       <Drawer
         placement="right"
         closable={false}
         onClose={()=>setOpen(false)}
         open={open}
         key={"placement"}
        >
          <div className="drawer_container" data-aos="fade-right">
            <DrawerHeader header="Filter" icon="/left.svg" close={closeDrawerHandler} />
            <div className="drawer_items">
              <DrawerItem header="Category:" />
              <DrawerItem header="Width:" />
              <DrawerItem header="Length:" text="0.04" />
              <DrawerItem header="Material:" text="cotton" />
              <DrawerItem header="Color:" text="beige" />
            </div>
            <button className="filter_button" onClick={() => setOpen2(true)}><span className="filter_button_text">Filter</span></button>
          </div>
        </Drawer>

        <Drawer
          placement="right"
          closable={false}
          onClose={()=>setOpen(false)}
          open={open2}
          key={"placement"}
        >
          <div className="drawer2_container">
            <DrawerHeader header="Color" icon="/burger-button.svg" close={closeDrawer2Handler} />
            <button className="filter_button"><span className="filter_button_text">Choose</span></button>

          </div>
        </Drawer>

      <Navigation />
      <div className="navigasiyaDiv">
       <h2 className='navigasiya' data-aos="fade-right"><span onClick={() =>navigate("/homepage")}>{dil === "RU" ? "Главная" : "Homepage"}</span> / <span onClick={() =>navigate("/products")}>{dil === "RU" ? "Продукты" : "Products"}</span></h2>
      </div>

      <div className="pagename_div" data-aos="fade-left">
        <Pagename head={dil === "RU" ? "Продукты" :"Products"} />
      </div>

      <div className="filter_container">
        <button className="filter_button" onClick={() => setOpen(true)}><img src={icon} alt="icon" className='filter_icon' /><span className="filter_button_text">Filter (2)</span></button>
      </div>

      <div className="productsContainer">
        <div className="FilterContainer">
         <h1 className="filterH1" data-aos="flip-left">{dil === "RU" ? "Фильтр:" :"Filter:"}</h1>
         <FilterText  header={dil === "RU" ? "Длина" : "Length"} text="0.05"/>
         <FilterText  header={dil === "RU" ? "Ширина" : "Width"} text="3.00"/>
         <FilterText  header={dil === "RU" ? "Цвет" : "Color"} text={dil === "RU" ? "Коричневый" :"Brown"} />
        </div>

        <div className="productsCardDiv">
            <Card surat="carImg.png" heart="false" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"}/>
            <Card surat="carImg.png" heart="false" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />
            <Card surat="carImg.png" heart="false" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />
            <Card surat="carImg.png" heart="false" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />
            <Card surat="carImg.png" heart="false" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />
            <Card surat="carImg.png" heart="false" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />
            <Card surat="carImg.png" heart="false" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />
            <Card surat="carImg.png" heart="false" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />
        </div>
      
      </div>

     
      <Footer />
    </div>
  )
}

export default Products
