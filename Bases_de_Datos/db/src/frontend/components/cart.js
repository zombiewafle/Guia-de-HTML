import React, { useEffect, useState } from "react";

function Cart() {
    const [cartItems, setCartItems] = useState([]); // Estado para los productos en el carrito
    const [message, setMessage] = useState(''); // Mensaje de éxito o error

    // Obtener productos del carrito
    useEffect(() => {
        async function fetchCart() {
            const token = localStorage.getItem('token');
            const url = 'http://209.126.125.63:5000/cart';

            try {
                const response = await fetch(url, {
                    headers: {
                        'Authorization': `Bearer ${token}`, // Enviar token para autenticación
                    },
                });

                if (!response.ok) {
                    throw new Error('Error al obtener el carrito'); // Manejo de errores
                }

                const data = await response.json();
                setCartItems(data); // Actualizar el estado con los productos obtenidos
            } catch (error) {
                console.error("Error:", error.message);
                setMessage("Error al obtener el carrito");
            }
        }

        fetchCart();
    }, []);

    // Agregar producto al carrito
    const addToCart = async (productId, quantity) => {
        const token = localStorage.getItem('token');
        const url = 'http://209.126.125.63:5000/cart/add';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ productId, quantity }), // Enviar datos en formato JSON
            });

            if (!response.ok) {
                throw new Error('Error al agregar producto al carrito');
            }

            const data = await response.json();
            setMessage(data.message); // Mostrar mensaje de éxito
        } catch (error) {
            console.error("Error:", error.message);
            setMessage("Error al agregar producto");
        }
    };

    // Eliminar producto del carrito
    const removeFromCart = async (productId) => {
        const token = localStorage.getItem('token');
        const url = `http://209.126.125.63:5000/cart/remove/${productId}`;

        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Error al eliminar producto del carrito');
            }

            const data = await response.json();
            setMessage(data.message); // Mostrar mensaje de éxito
            setCartItems((prevItems) => prevItems.filter(item => item.id !== productId)); // Actualizar el estado
        } catch (error) {
            console.error("Error:", error.message);
            setMessage("Error al eliminar producto");
        }
    };

    return (
        <div>
            <h1>Carrito</h1>
            {message && <p>{message}</p>}
            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.quantity} - ${item.price}
                        <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            {/* Botón simulado para agregar al carrito */}
            <button onClick={() => addToCart(1, 1)}>Agregar Producto 1</button>
        </div>
    );
}

export default Cart;
