import React, { useState } from 'react';
import fame from "./images/amico1.png"
import { SocialIcon } from 'react-social-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, json } from 'react-router-dom';
import { faUser,faAppleWhole, faEyeSlash, faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons';

function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function  handleLogin(event) {
    event.preventDefault();

    const url = "https://insurenceapis.vercel.app/api/signup";
    const payload = {
      name,
      email: username,
      password
    }
    const opts = {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    }
    try {
       const req = await fetch(url, opts);
    const res = await req.json();

    console.log(req.status)
    console.log(res);
    } catch (error) {
      alert(`your request failed with error message: ${error.message}`)
    }
   
    
    // handle login logic here
    window.location.href = "/home";
  }


  return (
    <div className='login-page'>

      <div className='login-cont'>

          <h1>Create an account</h1>
          <p>Get on board! lets get you started</p>
     
         <form onSubmit={handleLogin}>

         <div className='lab'>
           <div className='labs'><label htmlFor="name-input"> Name</label></div>
           <div className="form-group">
              <div className='label'>
                <FontAwesomeIcon icon={faUser} className="form-icon" />
              </div>
              <input
                id="name-input"
                type="text"
                className="form-input"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
         </div>

          <div className='lab'>
            <div className='labs'><label htmlFor="email-input">Email</label></div>
            <div className="form-group">
                <div className='label'>
                  <FontAwesomeIcon icon={faEnvelope} className="form-icon" />
                </div>
            
              <input
                id="username-input"
                type="email"
                className="form-input"
                placeholder="Email Address"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className='lab'>
      <div className='labs'>
        <label htmlFor="password-input">
          Password
        </label>
      </div>
      <div className="form-group">
        <div className='label' onClick={togglePasswordVisibility}>
          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="form-icon" />
        </div>
        <input
          id="password-input"
          type={showPassword ? "text" : "password"}
          className="form-input"
          placeholder="8 digits characters"
          maxLength={8}
          pattern="^[0-9]{1,8}$" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>

          <div className='expert'>
              <p className='p'><span>or</span></p>
          </div>

          <h3>Sign up using</h3>

          <div className='icon-cont'>

            <div className='icon'>
                <ul className="footer-list">
                <li><SocialIcon url="https://facebook.com" bgColor="#891180" style={{width: 50, height:50}}/></li>
                </ul>
            </div>

            <div className='icon'>
                <ul className="footer-list">
                <li><SocialIcon url="https://google.com"  bgColor="#891180"style={{width: 50, height:50}}/></li>
                </ul>
            </div>

            <div className='icon'>
                <ul className="footer-list">
                <li><a href="/">
                  <FontAwesomeIcon icon={faAppleWhole} bgColor="#891180"style={{width: 50, color:"#891180",height:50}} />
                </a></li>
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

          <button className="form-button" onClick={handleLogin}>
              Get Started
          </button>
          <div className='acc-cont'>
          <p>Already have an account? <Link to='/login' style={{textDecoration:'none'}}><span className='acc'>Login</span></Link> </p>
        </div>
      </div>

      <div className='frame-cont'>
        <div className='frame'>
          <img src={fame} alt="hospital" width="65%" />
        </div>
        <h2>Let us help you find <br /> the most suitable HMO</h2>
        <p>A few clicks away from creating <br /> your account</p>
      </div>

    </div>
  )
  }

  export default Signup;

