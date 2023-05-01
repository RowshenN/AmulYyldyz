import React, { useState } from "react"

import './checkbox.css'
import img from '../../images/Check box.svg'

const CheckBox = (props)=>{
    const [checked,setChecked] = useState(props.checked?props.checked:false);
    return <div className="checked" onClick={()=>setChecked(!checked)}>
            {
                checked?<img src={img} alt="true" />:<div></div>
            }
    </div>
}

export default CheckBox;