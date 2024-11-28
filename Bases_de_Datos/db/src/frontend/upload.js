import React, { useState } from 'react';

function FileUpload() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) {
            setMessage('Por favor, selecciona un archivo');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Error al subir el archivo');
            }

            const data = await response.json();
            setMessage(data.message);
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div>
            <h1>Subir Archivo</h1>
            <form onSubmit={handleUpload}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Subir</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default FileUpload;
