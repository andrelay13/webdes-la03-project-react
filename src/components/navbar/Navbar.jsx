import React from 'react'
import "./Navbar.css"
import {Link, NavLink} from "react-router-dom"

function Navbar() {
    return (
        <div>
          <div class="navi">
            <h1>BMI ADVISOR</h1>            
                <ul>
                    <li><NavLink to={"/home"}>Home</NavLink></li>
                    <li><NavLink to={"/history"}>History</NavLink></li>
                    <li><NavLink to={"/Advisor"}>Advisor</NavLink></li>
                    <li><Link to={"/"}>Logout</Link></li>
                </ul>
   </div>  
        </div>
    )
}

export default Navbar
