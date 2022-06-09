import React from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import './page1.css'

function Page1(props) {
    const location = useLocation()
    let y =location.state
    console.log(y)
    return (
        <div className='page01'>
            <h1 className='hh'><b>Here are the Details, please Verify:- </b></h1>
            
            <h2><b>First Name :</b> {y.c}</h2>
            <h2><b>Last Name :</b> {y.d}</h2>
            <h2><b>Age :</b> {y.e}</h2>
            <h2><b>Phone :</b> {y.f}</h2>
            <h2><b>School :</b> {y.school}</h2>
            <h2><b>Subject :</b> {y.subject}</h2>
            <Link to ='/'>
                <button className='button01'>Go back!</button>
            </Link>
        </div>
  )
}

export default Page1