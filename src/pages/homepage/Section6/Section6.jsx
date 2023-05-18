import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'

import { Context } from '../../../context/Context'

import './Section6.css'
import img from '../../../images/bathropes.png'

const Section6 = () => {
  const {dil} = useContext(Context)
  const navigate = useNavigate();
  return (
    <div className="section6Conatiner">
    <div className="section6div">
     <div className="section6TextDiv">
       <h3 className='section6h3' data-aos="fade-up">
          {dil === "RU" ? "Когда вы наденете наш купальный халат, вас встретит подобная облаку мягкость, которая мгновенно окутает вас, заставляя вас чувствовать себя избалованным и расслабленным." 
          : "As you slip into our bathrobe, you'll be greeted by a cloud-like softness that instantly envelops you, making you feel pampered and relaxed."} 
        </h3>
        <p className='section6text' data-aos="fade-down" >{dil === "RU" ? "Побалуйте себя роскошными купальными халатами, изготовленными из мягчайшего хлопка высочайшего качества. Откройте для себя новый уровень релаксации и позвольте нашим халатам стать вашим убежищем комфорта. Откройте для себя идеальное сочетание роскоши, стиля и долговечности и превратите ежедневное купание в омолаживающее приключение." 
        : "Indulge in the opulence bathrobes, made from the softest, highest quality cotton. Embrace a new level of relaxation and let our bathrobes become your sanctuary of comfort. Discover the perfect blend of luxury, style, and durability, and transform your everyday bathing routine into a rejuvenating experience. "}
        </p>
        <button className="section6button" data-aos="zoom-out" onClick={() => navigate("/products")}><span className="section6butontext">{dil === "RU" ? "Перейти к халатам" : "Go to bathrobes"}</span></button>
      </div>

      <div className="section6ImgDiv" data-aos="fade-left">
        <img src={img} alt="img" className='section6Img' />
      </div>
    </div>
  </div>
  )
}

export default Section6
