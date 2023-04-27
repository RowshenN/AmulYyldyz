import React from 'react'

import './Homepage.css'
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
  return (
    <div>
      <Navigation />
      <div className="homeHeaderDiv">
        <div className="homeHeader">
          <h1 className='homeHeaderText'>Elevate Your Everyday with Our Naturally Elegant Towels and Bedsheets</h1>
        </div>
      </div>
      <div className="homeimgDiv">
        <img src={img1} alt="img1" className='homeImg' />
        <div className="narrow1Div">
          <img src={narrow} alt="narrow" className='narrow' />
        </div>
        <div className="narrow2Div">
         <img src={narrow2} alt="narrow" className='narrow' />
        </div>
        <div className="homeImgTextDiv">
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
