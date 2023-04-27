import React from 'react'

import './Section3.css'
import img from '../../../images/section3.png'

const Section3 = () => {
  return (
    <div>
      <div className="section3Conatiner">
        <div className="section3div">
         <div className="section3TextDiv">
           <h3 className='section3h3'>
              Our bedsheets are crafted from 
              premium-quality fabrics that are
              both soft and durable, ensuring a 
              comfortable and restful night's sleep. 
            </h3>
            <p className='section3text'>We offer a variety of styles and sizes to suit your specific needs,
              whether you prefer crisp cotton or luxurious silk. Our bedsheets 
              are also available in a range of colors and patterns, so you can
              find the perfect match for your bedroom décor. With proper care,
              our bedsheets will maintain their softness and color for years to
              come, making them a worthwhile investment for any home.
            </p>
            <button className="section3button"><span className="section3butontext">Go to bedsheets</span></button>
          </div>

          <div className="section3ImgDiv">
            <img src={img} alt="img" className='section3Img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
