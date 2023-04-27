import React from 'react'
import { useNavigate } from 'react-router-dom'

import './AboutProduct.css'
import Navigation from '../../../components/navigation/Navigation'
import Footer from '../../../components/footer/Footer'
import big from '../../../images/big.png'
import small from '../../../images/small.png'
import FilterInfo from './filterInfo/FilterInfo'
import heart from '../../../images/simple-heart.svg'

const AboutProduct = (props) => {
  const navigate = useNavigate();
  return (
    <div>
        <Navigation />

        <div className="navigasiyaDiv">
         <h2 className='navigasiya'><span onClick={() =>navigate("/homepage")}>Homepage</span> / <span onClick={() =>navigate("/products")}>Products</span> / Product page</h2>
        </div>

        <div className="aboutproductContainer">
            <div className="aboutproductDiv">

                <div className="aboutImagesDiv">
                  <img src={big} alt="big" className='bigImg' />
                  <div className="smallImageDiv">
                   <img src={small} alt="small" className='smallimg' />
                   <img src={small} alt="small" className='smallimg' />
                   <img src={small} alt="small" className='smallimg' />
                   <img src={small} alt="small" className='smallimg' />
                  </div>
                </div>

                <div className="aboutInformationDiv">
                  <h1 className="aboutHeader">
                    Ethereal Nights: The Ultimate Collection of Luxurious
                     and Breathable 100% Turkmen Cotton Bedsheets
                  </h1>

                  <div className="infoDiv">
                    <div className="infodiv1">
                      <FilterInfo name="Category:" text="Bedsheets" />
                      <FilterInfo name="Product code:" text="RT 24142" />
                    </div>

                    <div className="infodiv1">
                      <FilterInfo name="Material:" text="Cotton" />
                      <FilterInfo name="Color:" text="Brown" />
                    </div>
                  </div>

                  <div className="infoTextDiv">
                    <p className="infoText infoText0">Постельное белье 100% хлопок.</p>
                    <p className="infoText infoText1">Размеры на односпальное постельное белье: </p>
                    <p className="infoText infoText1">Наволочка: 50 x 70</p>
                    <p className="infoText infoText1">Пододеяльник: 160 x 220</p>
                    <p className="infoText infoText1">Простыня: 160 x 240</p>
                    <p className="infoText infoText2">Размеры на двуспальное постельное белье: </p>
                    <p className="infoText infoText3">Наволочка: 50 x 70</p>
                    <p className="infoText infoText3">Пододеяльник: 200 x 220</p>
                    <p className="infoText infoText3">Простыня: 240 x 260</p>
                  </div>

                  <div className="infoButonDiv">
                    <img src={heart} alt="heart" className="heart-icon" />
                    <button className="infobuton"><span className="infobutonText">Add to favourites</span></button>
                  </div>

                </div>

            </div>
          
        </div>

        <Footer />
      
    </div>
  )
}

export default AboutProduct