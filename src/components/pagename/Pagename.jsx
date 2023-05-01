import React from 'react'

const Pagename = (props) => {
  return (
    <div>
      <h1 className="pagename" style={{fontSize:"28px", fontFamily: "pts" , fontWeight:"400", marginTop:"0px"}}>{props.head}</h1>
    </div>
  )
}

export default Pagename
