import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const { t } = useTranslation(); // Hook para acceder a traducciones

    const handleLogin = async (event) => {
        event.preventDefault();

        if (!email || !password) {
            setErrorMessage(t('login.errorMessages.fillFields'));
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
                if (errorData.message === 'Invalid user') {
                    setErrorMessage(t('login.errorMessages.userNotFound'));
                } else if (errorData.message === 'Invalid password') {
                    setErrorMessage(t('login.errorMessages.wrongPassword'));
                } else {
                    setErrorMessage(t('login.errorMessages.unexpectedError'));
                }
                return;
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            navigate('/sessions');
        } catch (error) {
            setErrorMessage(t('login.errorMessages.unexpectedError'));
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = 'http://localhost:3000/auth/google';
    };

    return (
        <div>
            <header title={t('login.title')} />
            <div className="container" id="container">
                <div className="form-container sign-in">
                    <form onSubmit={handleLogin}>
                        <span id="Loginsuggestions">{t('login.title')}</span>
                        {errorMessage && <div className="error-message">{errorMessage}</div>}
                        <input
                            type="email"
                            placeholder={t('login.emailPlaceholder')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder={t('login.passwordPlaceholder')}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">{t('login.loginButton')}</button>
                        <button
                            type="button"
                            onClick={() => navigate('/register')}
                            className="toggle-view"
                        >
                            {t('login.registerButton')}
                        </button>
                    </form>
                </div>
                <div className="oauth-container">
                    <span>{t('login.googleLogin')}</span>
                    <button onClick={handleGoogleLogin} className="google-login">
                        {t('login.googleLogin')}
                    </button>
                </div>
            </div>
            <footer />
        </div>
    );
}

export default Login;
