import React, { useState } from "react"

import './checkbox.css'
import img from '../../images/Check box.svg'
import img2 from '../../images/empty_checked.svg'

const CheckBox = (props)=>{
    const [checked,setChecked] = useState(props.checked?props.checked:false);
    // const check = props.ischecked(props.itemId)
    // console.log("category check:",check)
    // const [checked,setChecked] = useState(check);
    return <div className="checked" onClick={()=>setChecked(!checked)}>
            {
                checked?<img src={img} alt="true" />: <img src={img2} alt="empty" />
            }
            <span></span>
    </div>
}

export default CheckBox;