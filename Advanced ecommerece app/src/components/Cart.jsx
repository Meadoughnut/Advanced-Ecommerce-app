import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // Replace with actual cart state later

  if (cartItems.length === 0) {
    return <div>Your cart is empty!</div>;
  }

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div>
            <h2>{item.name}</h2>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        </div>
      ))}
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
