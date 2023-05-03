import React from 'react'

import './Filter_items.css'
import Checkbox from '../../../components/checked/checkbox'

const Filter_items = (props) => {
  return (
    <div className='filter_items_div'>
      <Checkbox /> 
      <p className='filter_items_text'>{props.text}</p>
    </div>
  )
}

export default Filter_items
