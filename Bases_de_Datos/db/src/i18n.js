import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                login: {
                    title: "Log In",
                    emailPlaceholder: "Email Address",
                    passwordPlaceholder: "Enter your password",
                    loginButton: "Log In",
                    registerButton: "Register",
                    googleLogin: "Login with Google",
                    errorMessages: {
                        fillFields: "Please fill in all fields.",
                        userNotFound: "User not found.",
                        wrongPassword: "Incorrect password.",
                        unexpectedError: "Unexpected error occurred.",
                    }
                }
            }
        },
        es: {
            translation: {
                login: {
                    title: "Iniciar Sesión",
                    emailPlaceholder: "Correo Electrónico",
                    passwordPlaceholder: "Ingresa tu contraseña",
                    loginButton: "Iniciar Sesión",
                    registerButton: "Registrarse",
                    googleLogin: "Login con Google",
                    errorMessages: {
                        fillFields: "Por favor, completa todos los campos.",
                        userNotFound: "Usuario inexistente.",
                        wrongPassword: "Contraseña incorrecta.",
                        unexpectedError: "Ocurrió un error inesperado.",
                    }
                }
            }
        }
    },
    lng: "es", // Idioma predeterminado
    fallbackLng: "en", // Idioma de respaldo
    interpolation: { escapeValue: false },
});

export default i18n;
