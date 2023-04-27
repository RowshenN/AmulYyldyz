import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Favorites.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import Card from '../../components/card/Card'
import Pagename from '../../components/pagename/Pagename'

const Favorites = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navigation />

      <div className="navigasiyaDiv">
       <h2 className='navigasiya'><span onClick={() =>navigate("/homepage")}>Homepage</span> / <span onClick={() =>navigate("/favourites")}>Favourites</span></h2>
      </div>

      <div className="favoritesContainer">
        <Pagename head="Favourites" />
        <div className="favoritesCardDiv">
          <div className="card" style={{cursor:"pointer"}} onClick={() =>navigate("/products/:id")}>
            <Card surat="carImg.png" heart="true" name="Oasis Ombre Towel" />
          </div>

          <div className="card" style={{cursor:"pointer"}} onClick={() =>navigate("/products/:id")}>
            <Card surat="carImg.png" heart="true" name="Oasis Ombre Towel" />
          </div>

          <div className="card" style={{cursor:"pointer"}} onClick={() =>navigate("/products/:id")}>
            <Card surat="carImg.png" heart="true" name="Oasis Ombre Towel" />
          </div>        
            
          <div className="card" style={{cursor:"pointer"}} onClick={() =>navigate("/products/:id")}>
            <Card surat="carImg.png" heart="true" name="Oasis Ombre Towel" />
          </div>

          <div className="card" style={{cursor:"pointer"}} onClick={() =>navigate("/products/:id")}>
            <Card surat="carImg.png" heart="true" name="Oasis Ombre Towel" />
          </div>

          <div className="card" style={{cursor:"pointer"}} onClick={() =>navigate("/products/:id")}>
            <Card surat="carImg.png" heart="true" name="Oasis Ombre Towel" />
          </div>

          <div className="card" style={{cursor:"pointer"}} onClick={() =>navigate("/products/:id")}>
            <Card surat="carImg.png" heart="true" name="Oasis Ombre Towel" />
          </div>

          <div className="card" style={{cursor:"pointer"}} onClick={() =>navigate("/products/:id")}>
            <Card surat="carImg.png" heart="true" name="Oasis Ombre Towel" />
          </div>
          
               
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Favorites
