const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Configuración de Multer para almacenamiento local
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Carpeta donde se guardarán los archivos
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Nombre único para evitar colisiones
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // Límite de 5MB
    fileFilter: (req, file, cb) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Tipo de archivo no permitido'));
        }
    },
});

// Endpoint para subir archivos
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No se ha subido ningún archivo' });
    }
    res.status(200).json({ message: 'Archivo subido con éxito', filePath: req.file.path });
});

// Iniciar servidor
app.listen(5000, () => console.log('Servidor corriendo en http://localhost:5000'));
