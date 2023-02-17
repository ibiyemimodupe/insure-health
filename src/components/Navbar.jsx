import React from "react";
import "./Navbar.css"
import logo from "./images/Group 23.png"
import {Link} from 'react-router-dom'

export default function Navbar() {
    return(
        <nav>
            <div className="nav">
                <div className="logo">
                    <img src={logo} alt="logo" width='100%' />
                </div>
                <div className="options">
                    <ul className="opt">
                        <li>Services</li>
                        <li>About us</li>
                        <li>Contact us</li>

                     <span >
                        <Link to="/signup"><button className="click-sign">Sign up</button></Link>
                        <Link to="/login" ><button className="click-signs">Login</button></Link>
                     </span>
                    </ul>
                </div>
            </div>
        </nav>
    )
}