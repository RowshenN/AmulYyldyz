import React from 'react'

import './DrawerHeader.css'
import trash from '../../../images/trash.svg'

const DrawerHeader = (props) => {
  return (
        <div className="drawerHeader_div">
            <img src={props.icon} alt="icon" className='drawerheader_icon' onClick={() => props.close()} />
            <h2 className='drawerheader_header font-pts text-[24px]'>{props.header}</h2>
            <img src={trash} alt="trash" className='drawerheader_icon' />
        </div>
  )
}

export default DrawerHeader
