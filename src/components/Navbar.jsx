import React from "react";
import "./Navbar.css"
import logo from "./images/Group 23.png"
import {Link} from 'react-router-dom'

function backToHome(event) {
    event.preventDefault();
    // handle login logic here
    window.location.href = "/";
  }

export default function Navbar() {
    return(
        <nav>
            <div className="nav">
                <div className="logo">
                    <img onClick={backToHome} src={logo} alt="logo" width='100%' />
                </div>
                <div className="options">
                    <ul className="opt">
                        <Link to="/about" style={{textDecoration:'none', color:'black', paddingTop:8}}>
                            <li>About Us</li>
                        </Link>
                        <Link to="/contact" style={{textDecoration:'none'}}>
                            <li style={{paddingTop:8, color:"black"}}>Contact Us</li>
                        </Link>

                     <span >
                        <Link to="/signup"><button className="click-signs">Get Started</button></Link>
                        <Link to="/login" ><button className="click-sign">Login</button></Link>
                     </span>
                    </ul>
                </div>
            </div>
        </nav>
    )
}