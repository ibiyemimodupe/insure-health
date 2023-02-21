import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return(
        <div>
            <div>
                <h1>Get The Best Health Plan</h1>
                <p>Let's connect you and your loved ones to the best HMO plans that suits your condition and pocket without you stressing about it</p>
            </div>

            <div>
                <div>
                   <div>
                    <ul>
                        <ol>Services</ol>
                        <ol>Health Insurance plans</ol>
                        <ol>Personal Health Records</ol>
                    </ul>
                   </div>
                   <div>
                    <ul>
                        <ol>Blog</ol>
                        <ol>News</ol>
                        <ol>Articles</ol>
                        <ol>Suggestions</ol>
                    </ul>
                   </div>
                   <div>
                    <ul>
                        <ol>Information</ol>
                        <ol>Rules and Guidelines</ol>
                        <ol>Privacy Policy</ol>
                        <ol>Cookie Policy</ol>
                    </ul>
                   </div>
                   <div>
                    <ul>
                        <ol>About Us</ol>
                        <ol>About InsureHealth</ol>
                        <ol>How To Use</ol>
                        <ol>Contact us</ol>
                    </ul>
                   </div>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Get updates on HMO's & Hospital activities and Health related news on InsureHealth Newsletter </p>
                    <input type="text" placeholder="Enter Email"/>
                    <button>Subscribe</button>
                </div>
                <div>
                <p>&copy; {new Date().getFullYear()} InsureHealth UI. All rights reserved.</p>
                </div>
                <div >
                    <p>Communities</p>
                    <ul >
                    <li><SocialIcon url="https://facebook.com"  style={{width: 50, height:50}}/></li>
                    <li><SocialIcon url="https://twitter.com"  style={{width: 50, height:50}}/></li>
                    <li><SocialIcon url="https://instagram.com"  style={{width: 50, height:50}}/></li>
                    <li><SocialIcon url="https://linkedin.com"  style={{width: 50, height:50}}/></li>
                    </ul>
                </div>
                <div>
                    <p>Back to the top</p>
                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.29419 12.25V3.80884" stroke="#5B0B55" stroke-width="1.20587" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3.07349 8.0294L7.29405 3.80884L11.5146 8.0294" stroke="#5B0B55" stroke-width="1.20587" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </div>
            </div>
        </div>
    )
}