import React from 'react'

function Alert(props) {
  return (
    <div style={{height:"60px"}}>
      {props.alert && <div className="alert alert-success d-flex align-items-center" role="alert">
        {/* <svg class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg> */}
        <strong>{props.alert.type}</strong>: {props.alert.msg}
        </div>
      }
    </div>
    
  )
}

export default Alert
