import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import './Products.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import Card from '../../components/card/Card'
import FilterText from './filterText/FilterText'
import Pagename from '../../components/pagename/Pagename'
import { Context } from '../../context/Context'

const Products = (props) => {
  const {dil} = useContext(Context)
  const navigate = useNavigate();
  return (
    <div>
      <Navigation />
      <div className="navigasiyaDiv">
       <h2 className='navigasiya'><span onClick={() =>navigate("/homepage")}>{dil === "RU" ? "Домашняя страница" : "Homepage"}</span> / <span onClick={() =>navigate("/products")}>{dil === "RU" ? "Продукты" : "Products"}</span></h2>
      </div>

      <div className="productsContainer">
        <Pagename head={dil === "RU" ? "Продукты" :"Products"} />
        <div className="FilterContainer">
         <h1 className="filterH1">{dil === "RU" ? "Фильтр:" :"Filter:"}</h1>
         <FilterText  header={dil === "RU" ? "Длина" : "Length"} text="0.05" />
         <FilterText  header={dil === "RU" ? "Ширина" : "Width"} text="3.00" />
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
