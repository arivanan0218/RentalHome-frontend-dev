import React from 'react';
import { Link } from 'react-router-dom';

import '../style/navbar.css' 

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>HOME</h1>

            <div className="links">

                <Link to="/dashboard">Dashboard</Link>
                <Link to="/">Home</Link>
                

                {/* <Link to="/home">Home-User</Link> */}
                <Link to="/cart">Cart</Link>
                {/* <Link to="/login">Login</Link> */}

            </div>
        </nav>
    );
};

export default Navbar;