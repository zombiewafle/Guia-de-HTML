import React, { useState } from "react";

function UpdateProfile() {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleUpdate = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const url = 'http://209.126.125.63:5000/users/update';

        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ email, phone_number: phoneNumber }),
            });

            if (!response.ok) {
                throw new Error('Error al actualizar los datos');
            }

            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            console.error("Error:", error.message);
            setMessage("Error al actualizar los datos");
        }
    };

    return (
        <div>
            <h1>Actualizar Perfil</h1>
            <form onSubmit={handleUpdate}>
                <label>
                    Email:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </label>
                <br />
                <label>
                    Teléfono:
                    <input 
                        type="text" 
                        value={phoneNumber} 
                        onChange={(e) => setPhoneNumber(e.target.value)} 
                    />
                </label>
                <br />
                <button type="submit">Actualizar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default UpdateProfile;
