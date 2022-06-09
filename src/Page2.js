import React, { useState } from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import './page2.css'

function Page2() {
    const [age, setAge] = useState("")
    const [phone, setPhone] = useState("")
    const [print, setPrint] = useState(false)
    const [prints, setPrints] = useState(false)
    const location = useLocation()
    let a =location.state.firstName
    let b =location.state.lastName
    // console.log(a,b)
    const data1 = {a,b, age, phone}

    function ageHandle(e){
        setAge(e.target.value)
        if(e.target.value<18){
            setPrint(false)
        }
        else{
            setPrint(true)
    }
    }

    function phoneHandle(e){
        setPhone(e.target.value)
        if(e.target.value.length<10){
            setPrints(false)
        }
        else{
            setPrints(true)
        }
    }
  return (
    <div className='page02'>
        <h1>Page2</h1>
        <input className='input02' placeholder='Enter Your Age' onChange={ageHandle}></input><br /><br />
        {print ? <div><input className='input02' placeholder='Enter Your Phone Number' onChange={phoneHandle}/><br /><br /></div>:""}
        {prints?
        <Link to="/page3" state={data1}>
            <button className='button03' type="button">Next!</button>
        </Link>
        :""}
    </div>
  )
}

export default Page2