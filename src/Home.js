import React, { useState } from 'react'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import './Home.css'
// import Button from 'react-bootstrap/Button';

function Home() {
    // const location = useLocation()
    // const navigate= useNavigate()
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const data = {firstName, lastName}
    const [print, setPrint] = useState(false)
    const [prints, setPrints] = useState(false)
    // Another way we can pass through components as per below 
    // function nav(){ 
    //     let x=false
    //     if(x){
    //         navigate('/page1')
    //     }
    //     else{
    //         navigate('/page2')
    //     }
    // }
    function fHandle(e){
        let item1 = e.target.value.length
        setfirstName(e.target.value)
        if(item1<3){
            setPrint(false)
        }
        else{
            setPrint(true)
        }
        }
    function lHandle(e){
        let item2 = e.target.value.length
        setlastName(e.target.value)
        if(item2<3){
            setPrints(false)
        }
        else{
            setPrints(true)
        }
    }
    // if(fHandle.item || lHandle.item <3){
    //     setPrint(false)
    // }
    // else{
    //     setPrint(true)
    // }
  return (
    <div className='Home'>
        <h1>Heliverse Task 🚁 </h1>
        {/* <input className='input'></input> */}
        {/* <div className='input'> */}
        <input className='input' placeholder='Enter Your First Name' onChange={fHandle} ></input><br /><br />
        {
            print?
            <div>
            <input className='input' placeholder='Enter Your Last Name' onChange={lHandle}></input><br /><br />
            </div>
            :
            <div>
                
            </div>

        }
        {/* </div> */}
        
        {
            prints?
            <Link to="/page2" state={data}>
            <button className='button' type="button">Next!</button>
            </Link>
            :
            <div>
                
            </div>
        }
        
        {/* <button onClick={()=> nav()}>Next</button> */}
        {/* <button>Next</button> */}
    </div>
  )
}

export default Home