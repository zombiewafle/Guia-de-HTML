import React from 'react';
import { useCart } from './CartContext';

const Product = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
