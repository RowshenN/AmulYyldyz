import React, { useContext } from 'react'

import './Section5.css'
import img from '../../../images/section5.png'
import { Context } from '../../../context/Context'

const Section5 = () => {
  const {dil} =useContext(Context)
  return (
    <div>
      
      <div className="section5Container">
        <div className="section5div">
         <div className="section5TextDiv">
           <h3 className='section5h3' data-aos="fade-up">
              {dil === "RU" ? "Наши полотенца изготовлены из высококачественных материалов, мягких и впитывающих влагу, что делает их идеальными для использования в любых условиях." 
              : "Our towels are made from high-quality materials that are soft and absorbent, making them perfect for use in any setting."} 
            </h3>
            <p className='section5text' data-aos="fade-down">
              {dil === "RU" ? "Нужны ли вам полотенца для ванной, тренажерного зала или бассейна, у нас есть широкий выбор вариантов, отвечающих вашим потребностям. Наши полотенца бывают разных размеров и цветов, так что вы сможете найти идеальное сочетание для вашего интерьера. Кроме того, они просты в уходе и долговечны, так что вы сможете наслаждаться ими долгие годы." 
              : "Whether you need towels for the bathroom, gym, or pool, we have a wide range of options to suit your needs. Our towels come in a variety of sizes and colors, so you can find the perfect match for your décor. Plus, they are easy to care for and long-lasting, so you can enjoy them for years to come."}
            </p>
            <button className="section5button" data-aos="fade-up"><span className="section5butontext">{dil === "RU" ? "Перейти к полотенцам" : "Go to towels"}</span></button>
          </div>
          <div className="section5ImgDiv" data-aos="fade-up">
            <img src={img} alt="img" className='section5Img' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Section5
