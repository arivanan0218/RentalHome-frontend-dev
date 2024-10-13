// Logout.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear local storage
        localStorage.removeItem('token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('roles');

        // Optionally, you can add a message to inform the user they have logged out
        console.log('User logged out.');

        // Redirect to login page
        navigate('/'); // Adjust the route as needed
    }, [navigate]);

    return null; // You can return a loading indicator or nothing
};

export default Logout;
