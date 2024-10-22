import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() { // No es asíncrono
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Estado para manejar mensajes de error
    const navigate = useNavigate(); // Hook para la navegación
  
    const handleLogin = async (event) => {
        event.preventDefault();
  
        // Validar campos vacíos
        if (!email || !password) {
            setErrorMessage('Por favor, completa todos los campos.');
            return;
        }
    
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
      
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Respuesta del servidor:', errorData);
        
                // Mostrar mensaje de error actualizado
                if (errorData.message === 'Invalid user') {
                    setErrorMessage('Usuario inexistente.');
                } else if (errorData.message === 'Invalid password') {
                    setErrorMessage('Contraseña incorrecta.');
                } else {
                    setErrorMessage('Error de inicio de sesión: ' + errorData.message);
                }
                return;
            }
      
            const data = await response.json();
            localStorage.setItem('token', data.token); // Guarda el token recibido en localStorage
            console.log('Inicio de sesión exitoso:', data);
            navigate('/sessions'); // Navega a las sesiones tras un inicio de sesión exitoso
        } catch (error) {
            console.error('Error de inicio de sesión:', error);
            setErrorMessage('Error de inicio de sesión: Ocurrió un error inesperado.');
        }
    };

    return (
        <div>
            <header title="Iniciar Sesión" />
            <div className='container' id='container'>
                <div className='form-container sign-in'>
                    <form onSubmit={handleLogin}>
                        <span id='Loginsuggestions'>Usa tu correo electrónico y contraseña para iniciar sesión</span>
                        {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Cuadro de texto para mensajes de error */}
                        <input 
                            type="email" 
                            placeholder="Correo Electrónico" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                        />
                        <input 
                            type="password" 
                            placeholder="Ingresa tu contraseña" 
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                        />
                        <button type="submit">Iniciar Sesión</button>
                        <button 
                            type="button" 
                            onClick={() => navigate('/register')} 
                            className="toggle-view"
                        >
                            Registrarse
                        </button>
                    </form>
                </div>
            </div>
            <footer />     
        </div>
    );
}

export default Login;
