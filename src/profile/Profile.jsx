// Import necessary dependencies and icons
import { useState } from 'react';
import '../profile/Profile.css';
import  {FaUser, FaAngleDown, FaSignOutAlt, FaUserEdit } from 'react-icons/fa';
import {IoPersonCircleSharp} from 'react-icons/io5';

// Define the Navbar component
const Profile = () => {

  // Define state variables
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Define functions to toggle the sidebar and dropdown menus
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Render the navbar
  return (
    <div className="navbar__wrapper">
     
     
      {/* User avatar and dropdown menu */}
      <div className="navbar-right">
       
        {/* User avatar */}
        <div className="navbar__avatar" onClick={toggleDropdown}>
          <IoPersonCircleSharp />
          <FaAngleDown className="navbar-dropdown-icon" />
        </div>
        {/* Dropdown menu */}
        {dropdownOpen && (
          <div className="navbar__dropdown">
            <div className="navbar-dropdown-header">
              <div className="navbar__dropdown-avatar">
                <IoPersonCircleSharp />
              </div>
              <div className="navbar-dropdown-user">
                <h3 className="navbar-dropdown-name">Jane Doe</h3>
                <p className="navbar-dropdown-email">User@example.com</p>
              </div>
            </div>
            <ul className="navbar-dropdown-menu">
              <li className="navbar-dropdown-item">
                <FaUser className="navbar__dropdown-icon" />
                <a href="#" className="navbar-dropdown-link"> My Profile </a>
              </li>
              <li className="navbar-dropdown-item">
                <FaUserEdit className="navbar__dropdown-icon" />
                <a href="#" className="navbar-dropdown-link"> Edit Profile </a>
              </li>
              <li className="navbar-dropdown-item">
                <FaSignOutAlt className="navbar__dropdown-icon" />
                <a href="/" className="navbar-dropdown-link"> Log Out </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Export the Navbar component
export default Profile;
