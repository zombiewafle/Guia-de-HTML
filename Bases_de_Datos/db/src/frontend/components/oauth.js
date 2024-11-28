import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function OAuthCallback() {
    const navigate = useNavigate();

    useEffect(() => {
        // Simulating token retrieval from backend
        async function fetchUserData() {
            try {
                const response = await fetch('/auth/google/callback', {
                    method: 'GET',
                    credentials: 'include', // Include cookies if backend sets them
                });

                if (response.ok) {
                    const data = await response.json();
                    localStorage.setItem('token', data.token); // Save token to localStorage
                    console.log('OAuth successful:', data);
                    navigate('/home'); // Redirect to your main page
                } else {
                    console.error('OAuth callback failed');
                    navigate('/login'); // Redirect to login on failure
                }
            } catch (error) {
                console.error('Error during OAuth callback:', error);
                navigate('/login');
            }
        }

        fetchUserData();
    }, [navigate]);

    return <p>Processing authentication...</p>;
}

export default OAuthCallback;
