import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Contact(props) {


  const msgDisplay = () => {
    console.log("ih")
    props.showAlert('Thank you for contacting us.','Success')
  }


  return (
    <div className='container mt-3'>
      <form >
        <div className="form-group mt-2">
            <label htmlFor="exampleInputEmail1" style={{color: props.mode==='dark'?'white':'black'}}>Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your name"/>
            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div className="form-group mt-2">
            <label htmlFor="exampleInputPassword1" style={{color: props.mode==='dark'?'white':'black'}}>Email</label>
            <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Enter your email"/>
        </div>
        <div className="form-group mt-2">
            <label htmlFor="exampleInputPassword1" style={{color: props.mode==='dark'?'white':'black'}}>Contact Number</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Enter your phone number"/>
        </div>
        <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1" style={{color: props.mode==='dark'?'white':'black'}}>Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter your message" rows="3"></textarea>
  </div>
        {/* <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div> */}
        <NavLink to='/contact'><button type="submit" className="btn btn-primary mt-3 mb-2" onClick={msgDisplay}>Submit</button></NavLink>
      </form>
      </div>
  )
}
