import React from 'react'

import './DrawerItem.css'
import right from '../../../images/right.svg'

const DrawerItem = (props) => {
  return (
      <div className="draweritem_div" onClick={props.open}>
        <h2 className='Draweritem_header'>{props.header}</h2>
        <div className="draweritem_div2">
          <p className='Draweritem_text'>{props.text}</p>
          <img src={right} alt="right" className='Draweritem_icon' />
        </div>
      </div>
  )
}

export default DrawerItem
