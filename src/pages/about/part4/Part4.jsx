import React, { useContext } from 'react'

import './Part4.css'
import aboutImg from '../../../images/aboutImg.png'
import { Context } from '../../../context/Context'

const Part4 = () => {
    const {dil} = useContext(Context)
  return (
    <div className='part4Container'>
      <div className="part4Div">
      <div className="part4TextDiv1">
              <p className="part3text" data-aos="fade-right">
               {dil === "RU" ? "Побалуйте себя роскошными купальными халатами, изготовленными из мягчайшего хлопка высочайшего качества. Откройте для себя новый уровень релаксации и позвольте нашим халатам стать вашим убежищем комфорта. Откройте для себя идеальное сочетание роскоши, стиля и долговечности и превратите ежедневное купание в омолаживающее приключение."
                : "Indulge in the opulence bathrobes, made from the softest, highest quality cotton. Embrace a new level of relaxation and let our bathrobes become your sanctuary of comfort. Discover the perfect blend of luxury, style, and durability, and transform your everyday bathing routine into a rejuvenating experience. "}
              </p>
              <img src={aboutImg} alt="img" className='aboutimg1' data-aos="fade-up" />
            </div>
      </div>
    </div>
  )
}

export default Part4
