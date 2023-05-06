import React, {useState} from 'react'

import './Card.css'
import empty from '../../images/emptyheart.svg'
import red from '../../images/redheart.svg'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
  const [selected, setSelected] = useState(true);
  const navigate = useNavigate()
  return ( 
      <div  className="cardContainer">
        <div className="cardImage">
          <img src={props.surat} alt="surat" onClick={()=>navigate("/products/1")} />
          <div className="iconDiv" onClick={() => setSelected(!selected)}>
           {selected ? <img src={empty} alt="surat"  className='cardIcon'/> : <img src={red} alt="empty" className='cardIcon' /> }
          </div>
        </div>
        <p className="cardName">{props.name}</p>
      </div> 
  )
}

export default Card
