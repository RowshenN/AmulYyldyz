import React, { useContext } from 'react'

import './Part1.css'
import { Context } from '../../../context/Context'

const Part1 = () => {
  const {dil} = useContext(Context)
  return (
    <div>
     <div className="section1Container">
        <div className="aboutHeaderDIv">
          <h2 className='aboutHeaderText'> 
          {dil === "RU" ? "«Амуль Йылдызы» — частная текстильная компания, базирующаяся в Ашхабаде, Туркменистан." : " Amul Yyldyzy is a privately-owned textile company based in Ashgabat, Turkmenistan."}
          </h2>
          <h2 className='aboutHeaderText aboutHeaderText2'> {dil === "RU" ? "Мы специализируемся на производстве высококачественных текстильных изделий, которые с гордостью производятся в Туркменистане. Наша компания зарегистрирована в" : "We specialize in producing high-quality textile products that are proudly made in Turkmenistan. Ourcompany is registered with the"} <span className='part1Highlited'>{dil === "RU" ? "Министерство Финансов" : "Ministry of Finance"}</span> {dil === "RU" ? "и" :"and"}
           <span className='part1Highlited'> {dil === "RU" ? "Экономика Туркменистана" : "Economy of Turkmenistan"}</span>, {dil === "RU" ? "и наш регистрационный номер №15483596." : "and our registration number is №15483596."}
         </h2>
       </div>
     </div> 
    </div>
  )
}

export default Part1
