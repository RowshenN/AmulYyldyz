import React from 'react'

import './FilterInfo.css'

const FilterInfo = (props) => {
  return (
    <div>

        <div className="filterinfoContainer">
            <div className="filterinfoDiv">
                <p className='infoname'>{props.name}</p>
                <p className="infotext">{props.text}</p>
            </div>
        </div>
      
    </div>
  )
}

export default FilterInfo
