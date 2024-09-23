import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Update localStorage
  };

  const handleQuantityChange = (id, increment) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + increment > 0 ? item.quantity + increment : 1
        };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Update localStorage
  };

  if (cartItems.length === 0) {
    return <div>Your cart is empty!</div>;
  }

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div>
            <h2>{item.name}</h2>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>
              Quantity: {item.quantity}{' '}
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>{' '}
              <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
            </p>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <p><strong>Total: ${totalPrice.toFixed(2)}</strong></p>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
