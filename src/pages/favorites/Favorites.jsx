import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import './Favorites.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import Card from '../../components/card/Card'
import Pagename from '../../components/pagename/Pagename'
import { Context } from '../../context/Context'

const Favorites = () => {
  const {dil} = useContext(Context)
  const navigate = useNavigate();
  return (
    <div>
      <Navigation />

      <div className="navigasiyaDiv">
       <h2 className='navigasiya'><span onClick={() =>navigate("/homepage")}>{dil === "RU" ? "Домашняя страница" : "Homepage"}</span> / <span onClick={() =>navigate("/favourites")}>Favourites</span></h2>
      </div>

      <div className="favoritesContainer">
        <Pagename head={dil === "RU" ? "Избранное" :"Favourites"} />
        <div className="favoritesCardDiv">
          <div className="card" style={{cursor:"pointer"}} onClick={() =>navigate("/products/:id")}>
            <Card surat="carImg.png" heart="true" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />
          </div>

          <div className="card" style={{cursor:"pointer"}} onClick={() =>navigate("/products/:id")}>
            <Card surat="carImg.png" heart="true" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />
          </div>

          <div className="card" style={{cursor:"pointer"}} onClick={() =>navigate("/products/:id")}>
            <Card surat="carImg.png" heart="true" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />
          </div>        
            
          <div className="card" style={{cursor:"pointer"}} onClick={() =>navigate("/products/:id")}>
            <Card surat="carImg.png" heart="true" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />
          </div>

          <div className="card" style={{cursor:"pointer"}} onClick={() =>navigate("/products/:id")}>
            <Card surat="carImg.png" heart="true" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />
          </div>

          <div className="card" style={{cursor:"pointer"}} onClick={() =>navigate("/products/:id")}>
            <Card surat="carImg.png" heart="true" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />
          </div>

          <div className="card" style={{cursor:"pointer"}} onClick={() =>navigate("/products/:id")}>
            <Card surat="carImg.png" heart="true" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />
          </div>

          <div className="card" style={{cursor:"pointer"}} onClick={() =>navigate("/products/:id")}>
            <Card surat="carImg.png" heart="true" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />
          </div>
          
               
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Favorites
