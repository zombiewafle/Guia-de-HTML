import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { state, dispatch } = useCart();

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {state.items.map(item => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price.toFixed(2)}
            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ${state.total.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
