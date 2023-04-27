import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Products.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import Card from '../../components/card/Card'
import FilterText from './filterText/FilterText'
import Pagename from '../../components/pagename/Pagename'

const Products = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Navigation />
      <div className="navigasiyaDiv">
       <h2 className='navigasiya'><span onClick={() =>navigate("/homepage")}>Homepage</span> / <span onClick={() =>navigate("/products")}>Products</span></h2>
      </div>

      <div className="productsContainer">
        <Pagename head="Products" />
        <div className="FilterContainer">
         <h1 className="filterH1">Filter:</h1>
         <FilterText  header="Length" text="0.05" />
         <FilterText  header="Width" text="3.00" />
         <FilterText  header="Color" text="Brown" />
        </div>

        <div className="productsCardDiv">
            <Card surat="carImg.png" heart="false" name="Oasis Ombre Towel" />
            <Card surat="carImg.png" heart="false" name="Oasis Ombre Towel" />
            <Card surat="carImg.png" heart="false" name="Oasis Ombre Towel" />
            <Card surat="carImg.png" heart="false" name="Oasis Ombre Towel" />
            <Card surat="carImg.png" heart="false" name="Oasis Ombre Towel" />
            <Card surat="carImg.png" heart="false" name="Oasis Ombre Towel" />
            <Card surat="carImg.png" heart="false" name="Oasis Ombre Towel" />
            <Card surat="carImg.png" heart="false" name="Oasis Ombre Towel" />
        </div>
      
      </div>

     
      <Footer />
    </div>
  )
}

export default Products
