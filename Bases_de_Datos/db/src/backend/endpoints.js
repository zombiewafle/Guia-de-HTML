const express = require('express');
const app = express();
const db = require('./conn');  // Importa la conexión desde conn.js
const secretKey = 'your-secret-key'; // Clave para firmar el JWT
const bcrypt = require('bcrypt'); // Para comparar las contraseñas cifradas
const jwt = require('jsonwebtoken'); // Para generar el token de autenticación

// Establecer Content-Security-Policy para permitir imágenes (favicon)
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self';"  // Permite imágenes solo desde el mismo servidor
  );
  next();
});

// Resto del código de tu aplicación...

// Ruta para obtener datos
app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM users';  //listado de usuarios
    console.log("Consultando la tabla users...");
    
    db.query(sql, (err, results) => {
      if (err) {
        console.error("Error al obtener datos:", err);  // Log del error
        res.status(500).send('Error al obtener datos');
      } else {
        console.log("Datos obtenidos:", results);  // Log de los resultados
        res.json(results);  // Enviar resultados al cliente
      }
    });
});

const obtenerUsuarioPorEmail = async (email) => {
    const users = [
        { id: 1, email: 'usuario@example.com', password: '$2b$10$...hashed_password...' } // Contraseña cifrada
    ];
    
    return users.find(user => user.email === email);
};

// Endpoint de login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar si el usuario existe
        const user = await obtenerUsuarioPorEmail(email);
        if (!user) {
            return res.status(404).json({ message: 'Invalid user' });
        }

        // Verificar si la contraseña es correcta
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generar un token JWT si la autenticación es correcta
        const token = jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '1h' });

        // Devolver el token al frontend
        res.status(200).json({ token });
    } catch (error) {
        console.error('Error en el login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


  // Iniciar servidor en el puerto 5000
app.listen(5000, () => {
    console.log('Servidor corriendo en http://209.126.125.63:5000');
});