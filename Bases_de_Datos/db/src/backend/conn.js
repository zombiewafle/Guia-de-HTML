const mysql = require('mysql2');

// Conectar a MySQL
const db = mysql.createConnection({
  host: '209.126.125.63',  // La IP pública de tu servidor MySQL
  user: 'remote_user',      // El nombre de usuario que creaste
  password: 'Enanito1998',  // La contraseña de tu usuario
  database: 'example1' // El nombre de tu base de datos
});

// Probar conexión a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error al conectarse a MySQL:', err);
  } else {
    console.log('Conexión exitosa a MySQL');
  }
});

