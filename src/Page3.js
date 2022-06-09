import React, { useState } from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import './page3.css'

function Page3() {
    const [subject, setSubject] = useState("")
    const [school, setSchool] = useState("")
    const location = useLocation()
    let c =location.state.a
    let d =location.state.b
    let e =location.state.age
    let f =location.state.phone
    // console.log(a,b)
    const data2 = {c,d,e,f,subject,school}
    // console.warn(data2)
    const [print, setPrint]= useState(false)
    const [prints, setPrints] = useState(false)
    function sub(e){
        setSubject(e.target.value)
        if(e.target.value.length<3){
            setPrint(false)
        }
        else{
            setPrint(true)
        }
    }
    function sch(e){
        setSchool(e.target.value)
        if(e.target.value.length<3){
            setPrints(false)
        }
        else{
            setPrints(true)
        }
    }
  return (
    <div className='page3'>
        <h1>Page3</h1>
        <input className='input3' placeholder='Enter Your Subject' onChange={sub}/><br /><br />
        {
            print?
            <div><input className='input3' placeholder='Enter Your School' onChange={sch}/><br /><br /></div>
            :""
        }
        {prints?
        <Link to="/page1" state={data2}>
            <button className='button03' type="button">Display Data</button>
        </Link>:""}
    </div>
  )
}

export default Page3