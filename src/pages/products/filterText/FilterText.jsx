import React from 'react'

import './FilterText.css'
import cancel from '../../../images/cancel.svg'

const FilterText = (props) => {
  return (
      <div className="Filtertext_container mb-2 mr-2">
        <div className="filtertext_div" data-aos="flip-right">
          <div className="filtertext_cancel !min-w-[24px]:">
            <img src={cancel} alt="cancel" className='filtertext_cancelicon' />
          </div>
          <p className='filtertext_header'>{props.header}:</p>
          <h2 className='filterText_text'>{props.text}</h2>
        </div>
      </div>
  )
}

export default FilterText
