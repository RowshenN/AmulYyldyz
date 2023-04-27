import React from 'react'

import './FilterText.css'
import cancel from '../../../images/cancel.svg'

const FilterText = (props) => {
  return (
    <div>
      <div className="filterContainer">
        <div className="filterDiv">
          <div className="cancelDiv">
            <img src={cancel} alt="cancel" className='cancelIcon' />
          </div>
          <p className='filterHeader'>{props.header}:</p>
          <h2 className='filterText'>{props.text}</h2>
        </div>
      </div>
    </div>
  )
}

export default FilterText
