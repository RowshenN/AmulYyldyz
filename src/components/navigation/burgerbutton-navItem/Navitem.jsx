import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import icon from '../../../images/right narrow.svg'

import './Navitem.css'

const Navitem = (props) => {
    const navigate = useNavigate();  
    const pathN = useLocation(); 
  return (
    <div className="Navitem_list" onClick={() =>navigate(props.pagePathname)}>
        <li className={pathN.pathname=== props.pagePathname ?" active burgerbutton_navItem":" burgerbutton_navItem "}>{props.pagename}</li>
        <img src={icon} alt="icon" className='Navitem_icon' />
    </div>
  )
}

export default Navitem
