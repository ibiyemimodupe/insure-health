import React from "react";
import logo from "../components/images/Group 23.png"
import  {FaSignOutAlt, FaStethoscope} from 'react-icons/fa';
import  {BiHelpCircle } from 'react-icons/bi';
import  {MdOutlineMedicalServices } from 'react-icons/md';
import {IoPersonCircleSharp} from 'react-icons/io5';

export default function MyProfile() {
    return(
        <div className="mp-cont">
            <div className="mp-dash">
                <img src={logo} alt="logo" width='90%' />
                <ol>
                    <li >
                        <MdOutlineMedicalServices className="navbar__dropdown-icon" />
                        <a href="/" className="navbar-dropdown-link"> HMO Details </a>
                    </li>
                    <li >
                        <FaStethoscope className="navbar__dropdown-icon" />
                        <a href="/" className="navbar-dropdown-link"> Medicals </a>
                    </li>
                    <li >
                        <BiHelpCircle className="navbar__dropdown-icon" />
                        <a href="/contact" className="navbar-dropdown-link"> help </a>
                    </li>
                    <li >
                        <FaSignOutAlt className="navbar__dropdown-icon" />
                        <a href="/" className="navbar-dropdown-link"> Log Out </a>
                    </li>
                </ol>
            </div>

            <div className="mp-prof">

                <div className="prof-text">
                    <h1>My Profile</h1>
                    <div className="mp-navbar__avatar" >
                      <IoPersonCircleSharp />
                      {/* <FaCamera className="camera-icon" /> */}
                    </div>
                </div>
                <form className="mp-form">
                    <div className="mp-form-group">
                        <div className="mp-input-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" name="name" required />
                        </div>
                        <div className="mp-input-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required />
                        </div>
                    </div>
                    <div className="mp-form-group">
                        <div className="mp-input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="number" id="phone" name="phone" required />
                        </div>
                        <div className="mp-input-group">
                        <label htmlFor="gender">Gender</label>
                        {/* <input type="text" id="gender" name="gender" required /> */}
                        <select id="gender" name="gender" required>
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        </div>
                    </div>
                    <div className="mp-form-group">
                        <div className="mp-input-group">
                        <label htmlFor="nin">NIN</label>
                        <input type="text" id="nin" name="nin" required />
                        </div>
                        <div className="mp-input-group">
                        <label htmlFor="dob">Date of birth</label>
                        <input type="date" id="dob" name="dob" required />
                        </div>
                    </div>
                    <div className="mp-form-group">
                        <div className="mp-input-group">
                        <label htmlFor="address">Address</label> <br />
                        <textarea id="address" name="address" placeholder="Enter Address" required></textarea>
                        </div>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}