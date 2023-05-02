import React, { useContext } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import './Homepage.css'

import { Context } from '../../context/Context'
import Navigation from '../../components/navigation/Navigation'
import Footer from '../../components/footer/Footer'
import Section2 from './section2/Section2'
// import ImgCarousel from './ImgCarousel/ImgCarousel'
import Section3 from './section3/Section3'
import Section4 from './section4/Section4'
import Section5 from './section5/Section5'
import ContactForm from '../contact/contactform/ContactForm'
import narrow from '../../images/left narrow.svg'
import narrow2 from '../../images/right narrow.svg'
import img1 from '../../images/home-img1.png'
const Homepage = (props) => {
  const {dil } = useContext(Context);
  console.log(dil)
    AOS.init({duration: 600, delay: 100})

  return (
    <div>
      <Navigation />
      <div className="homeHeaderDiv" data-aos="fade-down" data-aos-ease = 'ease'>
        <div className="homeHeader">
          <h1 className='homeHeaderText'>
            {dil==="RU"?"Поднимите свой повседневный уровень на новый уровень с нашими естественными элегантными полотенцами и простынями"
            :"Elevate Your Everyday with Our Naturally Elegant Towels and Bedsheets"}
          </h1>
        </div>
      </div>
      <div className="homeimgDiv">
        <img src={img1} alt="img1" className='homeImg' data-aos="fade-left"/>
        <div className="narrow1Div" 
          data-aos="fade-up" 
          data-aos-delay="300"
          data-aos-ease="ease"
        >
          <img src={narrow} alt="narrow" className='narrow' />
        </div>
        <div className="narrow2Div" data-aos="fade-down" data-aos-delay="200">
         <img src={narrow2} alt="narrow" className='narrow' />
        </div>
        <div className="homeImgTextDiv" data-aos="fade-down" data-aos-dalay="200">
          <p className='homeImgText1'>01 /</p>
          <p className="homeImgText2">03</p>
        </div>
      </div>
      
      <Section2 />
      {/* <ImgCarousel /> */}
      <Section3 />
      <Section4 /> 
      <Section5 />
      <ContactForm /> 
      <Footer/>
    </div>
  )
}

export default Homepage
