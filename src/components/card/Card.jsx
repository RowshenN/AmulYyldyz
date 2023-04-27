import React from 'react'

import './Card.css'
import empty from '../../images/emptyheart.svg'
import red from '../../images/redheart.svg'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
  const navigate = useNavigate()
  return ( 
      <div onClick={()=>navigate("/products/1")} className="cardContainer">
        <div className="cardImage">
          <img src={props.surat} alt="image" />
          <div className="iconDiv">
           <img src={props.heart === "false" ? empty : red} alt=""  className='cardIcon'/>
          </div>
        </div>
        <p className="cardName">{props.name}</p>
      </div> 
  )
}

export default Card
