import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import './Favorites.css'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import Card from '../../components/card/Card'
import Pagename from '../../components/pagename/Pagename'
import { Context } from '../../context/Context'

AOS.init({duration: 600, delay: 100})

const Favorites = () => {
  const {dil} = useContext(Context)
  const navigate = useNavigate();
  return (
    <div>
      <Navigation />

      <div className="navigasiyaDiv" data-aos="fade-right">
       <h2 className='navigasiya'><span onClick={() =>navigate("/homepage")}>{dil === "RU" ? "Главная" : "Homepage"}</span> / <span onClick={() =>navigate("/favourites")}>{dil === "RU" ? "Избранное" : "Favourites"}</span></h2>
      </div>

      <div className="pagename_div" data-aos="fade-left">
        <Pagename head={dil === "RU" ? "Избранное" :"Favourites"}/>
      </div>
      <div className="favoritesContainer">
       
        <div className="favoritesCardDiv">
          <Card surat="carImg.png" heart="true" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />
          <Card surat="carImg.png" heart="true" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />               
          <Card surat="carImg.png" heart="true" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />               
          <Card surat="carImg.png" heart="true" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />               
          <Card surat="carImg.png" heart="true" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />               
          <Card surat="carImg.png" heart="true" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />               
          <Card surat="carImg.png" heart="true" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />               
          <Card surat="carImg.png" heart="true" name={dil === "RU" ? "Полотенце Oasis Ombre" : "Oasis Ombre Towel"} />               
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Favorites
