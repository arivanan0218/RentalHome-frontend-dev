import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import qs from 'qs'; // Import qs to handle URL-encoded data
import './Login.css';
import Logo from "../src/assets/icons/HomeLogo.png";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            // Get the admin token
            const adminToken = await getAdminToken();

            // Create a new user in Keycloak
            const response = await axios.post(
                'http://localhost:8080/admin/realms/rentalhome/users',
                {
                    username: username,
                    email: email,
                    enabled: true,
                    credentials: [
                        {
                            type: 'password',
                            value: password,
                            temporary: false,
                        },
                    ],
                },
                {
                    headers: {
                        Authorization: `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status === 201) {
                setSuccess('User registered successfully!');
                // Optionally redirect to login or dashboard after successful signup
                navigate('/login'); // Change this if you want a different redirect
            } else {
                setError('Failed to register user.');
            }
        } catch (error) {
            setError('Signup error: ' + error.message);
        }
    };

    return (
        <div className="signup-container">
            <img src={Logo} alt="Logo" className="signin-logo" />
            <p>Our user-friendly platform makes arranging cost-effective shared journeys simple and <br/>secure. Join today and start collaborating on your travels!</p>
            <form onSubmit={handleSignup} className='signup-form'>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
                {success && <p>{success}</p>}
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

// Helper function to get admin token
const getAdminToken = async () => {
    const data = new URLSearchParams({
        grant_type: 'password',
        client_id: 'rentalhome-rest-api', // Admin client
        username: 'arivanan',      // Your admin username
        password: 'arivanan', // Admin password
    });

    try {
        const response = await axios.post(
            'http://localhost:8080/realms/rentalhome/protocol/openid-connect/token',
            data,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );

        return response.data.access_token;
    } catch (error) {
        throw new Error('Unable to fetch admin token: ' + error.message);
    }
};

export default Signup;
