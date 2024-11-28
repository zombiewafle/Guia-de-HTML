import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Conexión al servidor

function Notifications() {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Escuchar notificaciones del servidor
        socket.on('notification', (data) => {
            setNotifications((prev) => [...prev, data.message]);
        });

        // Limpiar eventos al desmontar el componente
        return () => socket.off('notification');
    }, []);

    const sendMessage = () => {
        const message = prompt('Escribe tu mensaje:');
        socket.emit('sendMessage', { message });
    };

    return (
        <div>
            <h1>Notificaciones en Tiempo Real</h1>
            <button onClick={sendMessage}>Enviar Mensaje</button>
            <ul>
                {notifications.map((notification, index) => (
                    <li key={index}>{notification}</li>
                ))}
            </ul>
        </div>
    );
}

export default Notifications;
