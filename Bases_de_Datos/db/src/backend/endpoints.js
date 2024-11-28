const express = require('express');
const app = express();
const db = require('./conn');  
const secretKey = 'your-secret-key'; 
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); 

// Establecer Content-Security-Policy para permitir imágenes (favicon)
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; img-src 'self';"  
  );
  next();
});


const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
  });
};


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

// const obtenerUsuarioPorEmail = async (email) => {
//     const users = [
//         { id: 1, email: 'usuario@example.com', password: '$2b$10$...hashed_password...' } // Contraseña cifrada
//     ];
    
//     return users.find(user => user.email === email);
// };

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


app.get('/profile', authenticateToken, (req, res) => {
  const userId = req.user.id;
  const sql = 'SELECT id, email, phone_number, type_of_user FROM users WHERE id = ?';

  db.query(sql, [userId], (err, results) => {
      if (err) {
          console.error("Error al obtener el perfil:", err);
          res.status(500).json({ message: 'Error al obtener el perfil' });
      } else {
          res.json(results[0]);
      }
  });
});


app.put('/users/update', authenticateToken, (req, res) => {
    const userId = req.user.id;
    const { email, phone_number } = req.body;

    const sql = 'UPDATE users SET email = ?, phone_number = ? WHERE id = ?';

    db.query(sql, [email, phone_number, userId], (err, results) => {
        if (err) {
            console.error("Error al actualizar datos:", err);
            res.status(500).json({ message: 'Error al actualizar datos' });
        } else {
            res.json({ message: 'Datos actualizados correctamente' });
        }
    });
});


app.get('/products', (req, res) => {
  const sql = 'SELECT * FROM products';

  db.query(sql, (err, results) => {
      if (err) {
          console.error("Error al obtener productos:", err);
          res.status(500).json({ message: 'Error al obtener productos' });
      } else {
          res.json(results);
      }
  });
});


app.get('/cart', authenticateToken, (req, res) => {
  const userId = req.user.id;
  const sql = `
      SELECT p.id, p.name, p.price, c.quantity 
      FROM cart c
      JOIN products p ON c.product_id = p.id
      WHERE c.user_id = ?;
  `;

  db.query(sql, [userId], (err, results) => {
      if (err) {
          console.error("Error al obtener el carrito:", err);
          res.status(500).json({ message: 'Error al obtener el carrito' });
      } else {
          res.json(results);
      }
  });
});


app.post('/cart/add', authenticateToken, (req, res) => {
  const userId = req.user.id;
  const { productId, quantity } = req.body;
  const sql = `
      INSERT INTO cart (user_id, product_id, quantity)
      VALUES (?, ?, ?)
      ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity);
  `;

  db.query(sql, [userId, productId, quantity], (err, results) => {
      if (err) {
          console.error("Error al agregar al carrito:", err);
          res.status(500).json({ message: 'Error al agregar al carrito' });
      } else {
          res.json({ message: 'Producto agregado al carrito' });
      }
  });
});


app.delete('/cart/remove/:productId', authenticateToken, (req, res) => {
  const userId = req.user.id;
  const productId = req.params.productId;
  const sql = 'DELETE FROM cart WHERE user_id = ? AND product_id = ?';

  db.query(sql, [userId, productId], (err, results) => {
      if (err) {
          console.error("Error al eliminar del carrito:", err);
          res.status(500).json({ message: 'Error al eliminar del carrito' });
      } else {
          res.json({ message: 'Producto eliminado del carrito' });
      }
  });
});


app.post('/payments', authenticateToken, (req, res) => {
  const { type_of_payment, amount, status } = req.body;
  const sql = `
      INSERT INTO payments (type_of_payment, amount, status)
      VALUES (?, ?, ?)
  `;

  db.query(sql, [type_of_payment, amount, status], (err, results) => {
      if (err) {
          console.error("Error al agregar el pago:", err);
          res.status(500).json({ message: 'Error al agregar el pago' });
      } else {
          res.json({ message: 'Pago registrado', paymentId: results.insertId });
      }
  });
});


app.get('/users/:userId/addresses', (req, res) => {
    const userId = req.params.userId;
    const sql = 'SELECT * FROM user_addresses WHERE user_id = ?';

    db.query(sql, [userId], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Error al obtener direcciones' });
        } else {
            res.json(results);
        }
    });
});

app.post('/cart/checkout', authenticateToken, (req, res) => {
    const userId = req.user.id;
    const { paymentId } = req.body;  

    
    const calculateTotalSQL = `
        SELECT SUM(p.price * c.quantity) AS totalAmount 
        FROM cart c
        JOIN products p ON c.product_id = p.id
        WHERE c.user_id = ?
    `;

    db.query(calculateTotalSQL, [userId], (err, results) => {
        if (err) {
            console.error("Error al calcular el total:", err);
            return res.status(500).json({ message: 'Error al calcular el total' });
        }

        const totalAmount = results[0].totalAmount;

        if (!totalAmount) {
            return res.status(400).json({ message: 'El carrito está vacío' });
        }

        // Ahora, creamos una nueva orden en la tabla `orders`
        const createOrderSQL = `
            INSERT INTO orders (amount, date, user_id, payment_id)
            VALUES (?, CURDATE(), ?, ?)
        `;

        db.query(createOrderSQL, [totalAmount, userId, paymentId], (err, orderResults) => {
            if (err) {
                console.error("Error al crear la orden:", err);
                return res.status(500).json({ message: 'Error al crear la orden' });
            }

            const orderId = orderResults.insertId;

            // Vaciar el carrito del usuario después de crear la orden
            const clearCartSQL = `
                DELETE FROM cart WHERE user_id = ?
            `;

            db.query(clearCartSQL, [userId], (err) => {
                if (err) {
                    console.error("Error al vaciar el carrito:", err);
                    return res.status(500).json({ message: 'Error al vaciar el carrito' });
                }

                res.json({ message: 'Compra completada', orderId: orderId });
            });
        });
    });
});


app.get('/search', (req, res) => {
    const { query } = req.query;

    const sql = `
        SELECT * FROM products WHERE name LIKE ? 
        UNION 
        SELECT * FROM users WHERE email LIKE ? 
    `;

    db.query(sql, [`%${query}%`, `%${query}%`], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Error en la búsqueda' });
        } else {
            res.json(results);
        }
    });
});


app.get('/products', (req, res) =>{
    const { query} = req.query;

    const sql = `
        SELECT * FROM product_categories
    `;
});


app.post('/orders', authenticateToken, (req, res) => {
    const userId = req.user.id;
    const { paymentId } = req.body;
  
    const createOrderSQL = `
        INSERT INTO orders (amount, date, user_id, payment_id)
        SELECT SUM(p.price * c.quantity), CURDATE(), ?, ? 
        FROM cart c
        JOIN products p ON c.product_id = p.id
        WHERE c.user_id = ?
    `;
  
    db.query(createOrderSQL, [userId, paymentId, userId], (err, results) => {
        if (err) {
            console.error("Error al crear la orden:", err);
            res.status(500).json({ message: 'Error al crear la orden' });
        } else {
            res.json({ message: 'Orden creada con éxito', orderId: results.insertId });
        }
    });
  });



  // Iniciar servidor en el puerto 5000
app.listen(5000, () => {
    console.log('Servidor corriendo en http://209.126.125.63:5000');
});