import React from 'react'

import './ImgCarousel.css'
import img1 from '../../../images/carouselImg1.png'
import img2 from '../../../images/carouselImg2.png'
import img3 from '../../../images/carouselImg3.png'

const ImgCarousel = () => {
  return (
    <div>

        <div className="imgCarouselDiv">
            <div className="imgDiv">
              <img src={img1} alt="img" />
              <img src={img2} alt="img" />
              <img src={img3} alt="img" />
            </div>
        </div>
      
    </div>
  )
}

export default ImgCarousel
