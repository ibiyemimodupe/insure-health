import React, { useState } from 'react';
// import google from "./images/google.png"
import fame from "./images/amico1.png"
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faAppleWhole, faEyeSlash, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    // handle login logic here
  }

  return (
    <div className='login-page'>
      <div className='login-cont'>
          <h1>Create an account</h1>
          <p>Get on board! lets get you started</p>
     
         <form onSubmit={handleLogin}>
         <div className="form-group">
            <label htmlFor="name-input">
              <FontAwesomeIcon icon={faUser} className="form-icon" />
            </label>
            <input
              id="name-input"
              type="text"
              className="form-input"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username-input">
              <FontAwesomeIcon icon={faEnvelope} className="form-icon" />
            </label>
            <input
              id="username-input"
              type="email"
              className="form-input"
              placeholder="Email Address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label  htmlFor="password-input">
              <FontAwesomeIcon icon={faEyeSlash} className="form-icon" />
            </label>
            <input
              id="password-input"
              type="password"
              className="form-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='expert'>
              <p className='p'><span>or</span></p>
          </div>
          <h3>Sign up using</h3>
          <div className='icon-cont'>

            <div className='icon'>
                <ul className="footer-list">
                <li><SocialIcon url="https://facebook.com" bgColor="#0000FF" style={{width: 50, height:50}}/></li>
                </ul>
            </div>

            <div className='icon'>
                <ul className="footer-list">
                <li><SocialIcon url="https://google.com"  bgColor="#DD4C4C"style={{width: 50, height:50}}/></li>
                </ul>
            </div>

            <div className='icon'>
                <ul className="footer-list">
                <li><FontAwesomeIcon icon={faAppleWhole} bgColor="#282D2D"style={{width: 50, height:50}} /></li>
                </ul>
            </div>

          </div>

         
         </form>
     <div className='swi'>
          <label className="switch">
            <input type="checkbox"/>
           <span className="slider round"></span>
          </label> 
          <p>I agree to the  <span>terms of service</span> and <span>condition</span>.</p>
      </div>

          <button type="submit" className="form-button">
              Get Started
          </button>
        </div>

      <div className='frame-cont'>
        <div className='frame'>
          <img src={fame} alt="hospital" width="55%" />
        </div>
        <h2>Let us help you find <br /> the most suitable HMO</h2>
        <p>A few clicks away from creating <br /> your account</p>
      </div>

    </div>
  )
  }

  export default Signup;

