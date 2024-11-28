import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    // Redirigir al login si no hay token
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    // Obtener productos
    useEffect(() => {
        async function fetchProducts() {
            const token = localStorage.getItem('token');
            const url = 'http://209.126.125.63:5000/products';

            try {
                const response = await fetch(url, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Error al obtener productos');
                }

                const data = await response.json();
                setProducts(data); // Actualizar el estado con los productos obtenidos
            } catch (error) {
                console.error("Error al obtener productos:", error.message);
                setErrorMessage(`Failed to fetch products: ${error.message || 'Unknown error'}`);
            }
        }

        fetchProducts();
    }, []);

    // Obtener categorías
    useEffect(() => {
        async function fetchCategories() {
            const token = localStorage.getItem('token');
            const url = 'http://209.126.125.63:5000/categories';

            try {
                const response = await fetch(url, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Error al obtener categorías');
                }

                const data = await response.json();
                setCategories(data); // Actualizar el estado con las categorías obtenidas
            } catch (error) {
                console.error("Error al obtener categorías:", error.message);
                setErrorMessage(`Failed to fetch categories: ${error.message || 'Unknown error'}`);
            }
        }

        fetchCategories();
    }, []);

    // Renderizar productos
    const renderProducts = () => {
        if (products.length === 0) {
            return <p>No hay productos disponibles.</p>;
        }

        return products.map((product) => (
            <div key={product.id} className="product-card">
                <h3>{product.name}</h3>
                <p>Precio: ${product.price}</p>
                <button onClick={() => addToCart(product.id)}>Agregar al carrito</button>
            </div>
        ));
    };

    // Simular la función para agregar al carrito
    const addToCart = (productId) => {
        console.log(`Producto ${productId} agregado al carrito.`);
        // Aquí iría la lógica para agregar el producto al carrito
    };

    return (
        <div>
            <h1>Vista de Productos</h1>
            {errorMessage && <p className="error">{errorMessage}</p>}

            <div className="product-container">
                {renderProducts()}
            </div>
        </div>
    );
}

export default Home;
