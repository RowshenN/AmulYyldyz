import React from 'react'

import './Filter_items.css'
import Checkbox from '../../../components/checked/checkbox'

const Filter_items = (props) => {
  return (
    <div className='filter_items_div pb-4 pt-5'>
      <Checkbox /> 
      <p className='filter_items_text font-light text-[16px] '>{props.text}</p>
    </div>
  )
}

export default Filter_items
