import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import './Section3.css'
import img from '../../../images/section3.png'
import { Context } from '../../../context/Context'

const Section3 = () => {
  const {dil} = useContext(Context)
  const navigate = useNavigate();
  return (
      <div className="section3Conatiner">
        <div className="section3div">
         <div className="section3TextDiv">
           <h3 className='section3h3' data-aos="fade-up">
              {dil === "RU" ? "Наши простыни изготовлены из ткани премиум-класса, мягкий и прочный, обеспечивая комфортный и спокойный ночной сон." 
              : "Our bedsheets are crafted from premium-quality fabrics that are both soft and durable, ensuring a comfortable and restful night's sleep."} 
            </h3>
            <p className='section3text' data-aos="fade-down" >{dil === "RU" ? "Мы предлагаем различные стили и размеры в соответствии с вашими потребностями, независимо от того, предпочитаете ли вы свежий хлопок или роскошный шелк. Наши простыни также доступны в различных цветах и ​​​​узорах, поэтому вы можете найти идеальное сочетание для декора вашей спальни. При надлежащем уходе наши простыни сохранят свою мягкость и цвет на долгие годы, что делает их выгодным вложением в любой дом." 
            : "We offer a variety of styles and sizes to suit your specific needs, whether you prefer crisp cotton or luxurious silk. Our bedsheets are also available in a range of colors and patterns, so you can find the perfect match for your bedroom décor. With proper care, our bedsheets will maintain their softness and color for years to come, making them a worthwhile investment for any home."}
            </p>
            <button className="section3button" data-aos="zoom-out" onClick={() => navigate("/products")}><span className="section3butontext">{dil === "RU" ? "Перейти к простыням" : "Go to bedsheets"}</span></button>
          </div>

          <div className="section3ImgDiv" data-aos="fade-left">
            <img src={img} alt="img" className='section3Img' />
          </div>
        </div>
      </div>
  )
}

export default Section3
