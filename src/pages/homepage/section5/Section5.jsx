import React from 'react'

import './Section5.css'
import img from '../../../images/section5.png'

const Section5 = () => {
  return (
    <div>
      
      <div className="section5Container">
        <div className="section5div">
         <div className="section5TextDiv">
           <h3 className='section5h3'>
              Our towels are made from high- 
              quality materials that are soft and 
              absorbent, making them perfect for 
              use in any setting. 
            </h3>
            <p className='section5text'>
              Whether you need towels for the bathroom, gym, or pool, we 
              have a wide range of options to suit your needs. Our towels come 
              in a variety of sizes and colors, so you can find the perfect match 
              for your décor. Plus, they are easy to care for and long-lasting, so 
              you can enjoy them for years to come.
            </p>
            <button className="section5button"><span className="section5butontext">Go to towels</span></button>
          </div>
          <div className="section5ImgDiv">
            <img src={img} alt="img" className='section5Img' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Section5
