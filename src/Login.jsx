import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import qs from 'qs'; // Import qs to handle URL-encoded data
import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post(
                'http://localhost:8080/realms/rentalhome/protocol/openid-connect/token',
                qs.stringify({
                    grant_type: 'password',
                    client_id: 'rentalhome-rest-api',
                    username,
                    password,
                }),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }
            );

            // Store the token in local storage
            const token = response.data.access_token;
            localStorage.setItem('token', token);
            localStorage.setItem('refresh_token', response.data.refresh_token);

            // Decode the token to extract roles
            const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode JWT
            const userRoles = decodedToken.realm_access?.roles || []; // Get roles

            // Store roles in local storage
            localStorage.setItem('roles', JSON.stringify(userRoles));

            console.log('Login successful:', response.data);
            console.log('User roles:', userRoles);

            // Redirect based on user role
            if (userRoles.includes('admin')) {
                navigate('/dashboard'); // Admin route
            } else if (userRoles.includes('user')) {
                navigate('/home'); // User route
            } else {
                console.error('No valid role found. Unable to redirect.');
                setError('No valid role found. Please contact admin.');
            }
        } catch (error) {
            console.error('Login error:', error.response || error.message);
            setError('Invalid username or password');
        }
    };

    return (
        <div className="signup-container">
             <p>Our user-friendly platform makes arranging cost-effective shared journeys simple and <br/>secure. Join today and start collaborating on your travels!</p>
            <form onSubmit={handleSubmit} className="signup-form">
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default Login;
