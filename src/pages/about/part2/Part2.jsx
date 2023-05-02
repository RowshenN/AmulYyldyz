import React, { useContext } from 'react'

import './Part2.css'
import { Context } from '../../../context/Context'

const Part2 = () => {
  const {dil} = useContext(Context)
  return (
    <div>

        <div className="part2Container">
          <div className="part2Div">
          <div className="part2HeaderDiv">
              <h1 className="partHeaderText" data-aos="zoom-out-right">{dil === "RU" ? "Мы фокусируемся" : "We focus"}</h1>
            </div>

          <div className="part2TextDiv">
            <div className= "part2TextDiv">
                <div className="parttextDiv1" data-aos="fade-right" >
                    <h2 className='part2H2'>01</h2>
                    <h3 className='part2H3'>{dil === "RU" ? "Качество:" : "Quality:"}</h3>
                    <p className='part2P'>{dil === "RU" ? "Высококачественные полотенца и простыни, изготовленные с профессиональным мастерством." : "High-quality towels & bedsheets made with expert craftsmanship."}</p>
                </div>

                <div className="parttextDiv2" data-aos="fade-up" >
                    <h2 className='part2H2'>02</h2>
                    <h3 className='part2H3'>{dil === "RU" ? "Устойчивость:" : "Sustainability:"}</h3>
                    <p className='part2P'>{dil === "RU" ? "Экологичность и ответственный подход к выбору материалов." : "Eco-friendly practices and responsible sourcing of materials."}</p>
                </div>
                
                <div className="parttextDiv3" data-aos="fade-left" >
                    <h2 className='part2H2'>03</h2>
                    <h3 className='part2H3'>{dil === "RU" ? "Удовлетворенность клиентов:" : "Customer satisfaction:"}</h3>
                    <p className='part2P'>{dil === "RU" ? "Исключительный сервис и быстрая и надежная доставка по всему миру." : "Exceptional service and fast, reliable shipping worldwide."}</p>
                </div>
            </div>
          </div>
       
          </div>
        </div>
      
    </div>
  )
}

export default Part2
