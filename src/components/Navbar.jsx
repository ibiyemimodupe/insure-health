import React, { useState } from "react";
import "./Navbar.css"
import logo from "./images/Group 23.png"
import {Link} from 'react-router-dom'

function backToHome(event) {
    event.preventDefault();
    // handle login logic here
    window.location.href = "/";
}

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    }

    return(
        <nav>
            <div className="nav">
                <div className="logo">
                    <img onClick={backToHome} src={logo} alt="logo" width='100%' />
                </div>
                <div className="options" style={{ display: showLinks ? "block" : "none" }} >
                    <ul className="opt">
                        <Link to="/about" style={{textDecoration:'none', color:'black', paddingTop:8}}>
                            <li>About Us</li>
                        </Link>
                        <Link to="/contact" style={{textDecoration:'none'}}>
                            <li style={{paddingTop:8, color:"black"}}>Contact Us</li>
                        </Link>
                        <Link to="/signup"><li className="click-signs">Get Started</li></Link>
                        <Link to="/login" ><li className="click-sign">Login</li></Link>
                    </ul>
                </div>
                <button className="nav-toggle" onClick={toggleLinks} >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </nav>
    )
}
