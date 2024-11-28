const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Manejo de conexión
io.on('connection', (socket) => {
    console.log('Cliente conectado:', socket.id);

    // Enviar notificación de bienvenida
    socket.emit('notification', { message: '¡Bienvenido al sistema de notificaciones!' });

    // Escuchar mensajes del cliente
    socket.on('sendMessage', (data) => {
        console.log('Mensaje recibido:', data);
        io.emit('notification', { message: `Nuevo mensaje: ${data.message}` });
    });

    // Manejar desconexión
    socket.on('disconnect', () => {
        console.log('Cliente desconectado:', socket.id);
    });
});

// Iniciar servidor
server.listen(5000, () => console.log('Servidor corriendo en http://localhost:5000'));
