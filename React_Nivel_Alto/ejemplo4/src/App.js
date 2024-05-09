import React from 'react';
import { CartProvider } from './CartContext';
import Product from './Product';
import Cart from './Cart';

const products = [
  { id: 1, name: 'Apple', price: 0.99 },
  { id: 2, name: 'Bread', price: 1.49 },
  { id: 3, name: 'Carrot', price: 0.89 }
];

function App() {
  return (
    <CartProvider>
      <div className="App">
        <h1>Products</h1>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
