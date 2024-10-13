import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1 className="landing-title"><span>Have you found</span> your <br/> boarding house</h1>
      <p>Centralize all your boarding houses into one convenient location to streamline management and provide easy access for both administrators and residents, enhancing overall efficiency and organization.</p>
      <div className="button-container">

        <Link to="/signup"><button className='traveler-button'>Signup</button></Link>     
        <Link to="/login"><button className='driver-button'>Signin</button></Link>
        
      </div>
    </div>
  );
};

export default LandingPage;
