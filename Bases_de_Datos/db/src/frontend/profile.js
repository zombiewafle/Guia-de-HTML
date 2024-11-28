import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
    const [profile, setProfile] = useState(null); 
    const [errorMessage, setErrorMessage] = useState(''); 
    const navigate = useNavigate(); 

    // Redirigir al login si no hay token
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); 
        }
    }, [navigate]);

    // Obtener el perfil del usuario
    useEffect(() => {
        async function fetchProfile() {
            const token = localStorage.getItem('token'); 
            const url = 'http://209.126.125.63:5000/profile'; 

            try {
                const response = await fetch(url, {
                    headers: {
                        'Authorization': `Bearer ${token}`, 
                    },
                });

                if (!response.ok) {
                    throw new Error('Error al obtener el perfil'); 
                }

                const data = await response.json(); 
                setProfile(data); 
            } catch (error) {
                console.error("Error al obtener el perfil:", error.message); 
                setErrorMessage(`Failed to fetch profile: ${error.message || 'Unknown error'}`); 
            }
        }

        fetchProfile();
    }, []);

    // Renderizado de la vista de perfil
    return (
        <div>
            <h1>Perfil de Usuario</h1>
            {errorMessage && <p className="error">{errorMessage}</p>} {}

            {profile ? (
                <div className="profile-container">
                    <p><strong>ID:</strong> {profile.id}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Teléfono:</strong> {profile.phone_number}</p>
                    <p><strong>Tipo de Usuario:</strong> {profile.type_of_user}</p>
                </div>
            ) : (
                <p>Cargando perfil...</p> 
            )}
        </div>
    );
}

export default Profile;
