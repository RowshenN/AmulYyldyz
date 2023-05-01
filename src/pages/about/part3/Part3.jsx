import React, { useContext } from 'react'

import './Part3.css'
import aboutImg from '../../../images/aboutImg.png'
import aboutImg2 from '../../../images/aboutImg2.png'
import { Context } from '../../../context/Context'

const Part3 = () => {
  const {dil} = useContext(Context)
  return (
    <div>
        <div className="part3Container">
          <div className="part3Div">

            <div className="part3TextDiv1">
              <p className="part3text">
               {dil === "RU" ? "Как индивидуальное предприятие, мы стремимся предоставлять нашим клиентам наилучшие продукты и услуги. Наша команда опытных профессионалов стремится к тому, чтобы каждый продукт, который мы производим, соответствовал нашим высоким стандартам качества и совершенства."
                : "As an individual enterprise, we are committed to providing our customers with the best possible products and services. Our team of experienced professionals is dedicated to ensuring that every product we make meets our high standards of quality and excellence."}
              </p>
              <img src={aboutImg} alt="img" className='aboutimg1' />
            </div>

            <div className="part3TextDiv2">
              <p className="part3text">
                {dil === "RU" ? "Наше основное внимание сосредоточено на производстве текстиля, и мы гордимся тем, что производим широкий ассортимент высококачественной текстильной продукции. Мы стремимся использовать лучшие доступные материалы и технологии, а также нанимать квалифицированных мастеров, которые очень тщательно подходят к созданию каждого продукта." 
                : "Our main focus is on textile manufacturing and we take great pride in producing a wide range of high-quality textile products. We strive to use the best materials and technologies available, and to employ skilled artisans who take great care in creating each and every product.  "}
              </p>
              <img src={aboutImg2} alt="img" className='aboutimg1' />
            </div>

          </div>
        </div>      
    </div>
  )
}

export default Part3
