import React from 'react'

import './DrawerItem.css'
import right from '../../../images/right.svg'

const DrawerItem = (props) => {
  return (
      <div className="draweritem_div" onClick={props.open}>
        <h2 className='Draweritem_header pt-4 pb-3 font-pts text-[18px]'>{props.header}</h2>
        <div className="draweritem_div2">
          <p className='Draweritem_text font-regular text-[16px]'>{props.text}</p>
          <img src={right} alt="right" className='Draweritem_icon' />
        </div>
      </div>
  )
}

export default DrawerItem
