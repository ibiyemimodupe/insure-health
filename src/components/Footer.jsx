import React, {useState} from "react";
import sub from "./images/Group 345.png"
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    const [password, setPassword] = useState('');

    function handleLogin(event) {
        event.preventDefault();
        // handle login logic here
       
      }
    return(
        <div className="footer-cont">
            <div className="footer-head">
                <h1>Get The Best Health Plan</h1>
                <p>Let's connect you and your loved ones to the best HMO plans that suits your condition and pocket without you <br /> stressing about it</p>
            </div>

            <div className="footer-info-cont">
                <div className="footer-info">
                   <div>
                    <ol className="footer-table">
                       <li><span>Services</span></li>
                        <li>Health Insurance plans</li>
                        <li>Personal Health Records</li>
                    </ol>
                   </div>
                   <div>
                    <ol className="footer-table">
                        <li><span>Blog</span></li>
                        <li>News</li>
                        <li>Articles</li>
                        <li>Suggestions</li>
                    </ol>
                   </div>
                   <div>
                    <ol className="footer-table">
                       <li><span>Information</span></li>
                        <Link to='/rules'>
                            <li>Rules and Guidelines</li>
                        </Link>
                        <Link to='/privacy'>
                            <li>Privacy Policy</li>
                        </Link>
                        <Link to='/cookie'>
                            <li>Cookie Policy</li>
                        </Link>
                    </ol>
                   </div>
                   <div>
                    <ol className="footer-table">
                        <span> About Us</span>
                        <Link to="/about" style={{textDecoration:'none'}}>
                            <li>About InsureHealth</li>
                        </Link>
                        <Link to='/contact'>
                            <li>Contact us</li>
                        </Link>
                    </ol>
                   </div>
                    <div className="footer-news">
                        <img src={sub} alt="sub" width={100}/>
                        <p>Get updates on HMO's & Hospital activities and Health related news on InsureHealth Newsletter </p>
                        <input
                            id="email-input"
                            type="email"
                            className="fot-input"
                            placeholder="Enter Email"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button onClick={handleLogin} type="submit" className="fot-btn">
                            Subscribe
                        </button>
                    </div>
                </div>


                <div className="footer-bottom">
                    <div>
                    <p>&copy; {new Date().getFullYear()} InsureHealth UI. All rights reserved.</p>
                    <p>Developed with ❤️ by Ibiyemi Oluwamodupe.</p>
                    </div>
                    <div className="com">
                        <p>Communities</p>
                        <ul >
                        <li><SocialIcon bgColor="#fff" url="https://facebook.com" /></li>
                        <li><SocialIcon bgColor="#fff" url="https://twitter.com" /></li>
                        <li><SocialIcon bgColor="#fff" url="https://instagram.com" /></li>
                        <li><SocialIcon bgColor="#fff" url="https://linkedin.com"  /></li>
                        </ul>
                    </div>
                    
                    <a href="#" className="up" onClick={() => window.scrollTo(0, 0)}>
                        <p>Back to the top</p>
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.29419 12.25V3.80884" stroke="#5B0B55" stroke-width="1.20587" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.07349 8.0294L7.29405 3.80884L11.5146 8.0294" stroke="#5B0B55" stroke-width="1.20587" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}