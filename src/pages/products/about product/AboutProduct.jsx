import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import './AboutProduct.css'
import Navigation from '../../../components/navigation/Navigation'
import Footer from '../../../components/footer/Footer'
import big from '../../../images/big.png'
import small from '../../../images/small.png'
import FilterInfo from './filterInfo/FilterInfo'
import heart from '../../../images/simple-heart.svg'
import redheart from '../../../images/redheart.svg'
import { Context } from '../../../context/Context'

const AboutProduct = (props) => {
  const [added, setAdded] = useState(true);
  const {dil} = useContext(Context)
  const navigate = useNavigate();
  AOS.init({duration: 600, delay: 100})
  return (
    <div>
        <Navigation />

        <div className="navigasiyaDiv">
         <h2 className='navigasiya' data-aos="fade-down"><span onClick={() =>navigate("/homepage")}>{dil === "RU" ? "Главная" :"Homepage"}</span> / <span onClick={() =>navigate("/products")}>{dil === "RU" ? "Продукты" : "Products"}</span> / Product page</h2>
        </div>

        

        <div className="aboutproductContainer">
            <div className="aboutproductDiv">

                <div className="aboutImagesDiv">
                  <img src={big} alt="big" className='bigImg' data-aos="fade-right" />
                  <div className="smallImageDiv" data-aos="fade-up">
                   <img src={small} alt="small" className='smallimg' />
                   <img src={small} alt="small" className='smallimg' />
                   <img src={small} alt="small" className='smallimg' />
                   <img src={small} alt="small" className='smallimg' />
                  </div>
                </div>

                <div className="aboutInformationDiv">
                  <h1 className="aboutHeader" data-aos="fade-left">
                    {dil === "RU" ? "Эфирные ночи: полная коллекция роскошных и дышащих простыней из 100% туркменского хлопка" 
                    : "Ethereal Nights: The Ultimate Collection of Luxurious and Breathable 100% Turkmen Cotton Bedsheets"}
                  </h1>

                  <div className="infoDiv">
                    <div className="infodiv1" data-aos="zoom-out-left">
                      <FilterInfo name={dil === "RU" ? "Категория:" :"Category:"} text={dil === "RU" ? "Простыни" : "Bedsheets"} />
                      <FilterInfo name={dil === "RU" ? "Код продукта:" : "Product code:"} text="RT 24142" />
                    </div>

                    <div className="infodiv1" data-aos="zoom-out-right">
                      <FilterInfo name={dil === "RU" ? "Материал:" : "Material:"} text={dil === "RU" ? "Хлопок" : "Cotton"} />
                      <FilterInfo name={dil === "Ru" ? "Цвет:" : "Color:"} text={dil === "RU" ? "Коричневый" : "Brown"} />
                    </div>
                  </div>

                  <div className="infoTextDiv" data-aos="fade-left">
                    <p className="infoText">Постельное белье 100% хлопок.</p>
                    <p className='infoText'> Размеры на односпальное постельное белье:
                     Наволочка: 50 x 70
                     Пододеяльник: 160 x 220
                     Простыня: 160 x 240
                     Размеры на двуспальное постельное белье:
                     Наволочка: 50 x 70
                     Пододеяльник: 200 x 220
                     Простыня: 240 x 260</p>
                  </div>

                  <div className="infoButonDiv" onClick={() => setAdded(!added)}>
                    {added ? <img src={heart} alt="heart" className="heart-icon" /> : <img src={redheart} alt="heart" className="heart-icon" /> }
                    <button className="infobuton"><span className="infobutonText">{dil === "RU" ? "Добавить в избранное" : "Add to favourites"}</span></button>
                  </div>

                </div>

            </div>
          
        </div>

        <Footer />
      
    </div>
  )
}

export default AboutProduct