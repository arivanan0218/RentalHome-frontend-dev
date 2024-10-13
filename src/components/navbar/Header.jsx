import React from 'react';
import './Header.css';
import Logo1 from "../../assets/icons/HomeLogo.png";
import { Link } from 'react-router-dom';

const Header = ({ userType }) => {
  return (
    <header className="navbar">
      <img src={Logo1} alt="Logo" className="logo" />
      <nav className="nav-links">
        {userType === 'SUPPLIER' ? (
          <Link to="/dashboard">Dashboard</Link>
        ) : (
          <>
            <Link to="/home">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
          </>
        )}
      </nav>
      <div className="auth-buttons">
        {!userType && (
          <>
            <Link to="/login">
              <button className="auth-button">Login</button>
            </Link>
            <Link to="/signup">
              <button className="auth-button">Signup</button>
            </Link>
          </>
        )}
        {/* {userType && (
          <Link to="/logout">
            <button className="auth-button">Logout</button>
          </Link>
        )} */}
      </div>
    </header>
  );
};

export default Header;

