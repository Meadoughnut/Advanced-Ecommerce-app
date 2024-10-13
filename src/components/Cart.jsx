import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/cart.css';


const Cart = () => {
  const [cartItems, setCartItems] = useState([]); // State to store cart items
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch cart items from localStorage when the component mounts
  useEffect(() => {
    console.log('Retrieving cart items from localStorage...');
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    console.log('Stored cart items:', storedCart);
    setCartItems(storedCart);
  }, []);

  // Function to handle removing an item from the cart
  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    console.log('Cart after removal:', updatedCart);
  };

  // Function to handle changing the quantity of a cart item
  const handleQuantityChange = (id, increment) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + increment > 0 ? item.quantity + increment : 1,
        };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    console.log('Cart after quantity change:', updatedCart);
  };

  // Function to handle proceeding to the checkout page
  const proceedToCheckout = () => {
    navigate('/checkout');
    console.log('Proceeding to checkout...');
  };

  // If the cart is empty, display a message
  if (cartItems.length === 0) {
    console.log('Cart is empty');
    return (
      <div style={{ 
        color: '#fff', /* White text */
        backgroundColor: '#000', /* Black background */
        padding: '20px',
        textAlign: 'center',
        borderRadius: '10px',
        fontFamily: "'Playfair Display', serif", /* Luxurious font */
        fontSize: '1.5rem'
      }}>
        Your cart is empty!
        {/* Go Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            color: '#fff', /* White text */
            backgroundColor: '#000', /* Black background */
            border: '2px solid #fff', /* White border */
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, color 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#fff';
            e.target.style.color = '#000';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#000';
            e.target.style.color = '#fff';
          }}
        >
          Go Back
        </button>
      </div>
    );
    
  }

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce((acc, item) => {
    if (item && item.price && item.quantity) {
      return acc + item.price * item.quantity;
    } else {
      console.warn('Invalid item in cart:', item); // Warn if there's an issue with an item
      return acc;
    }
  }, 0);

  console.log('Total Price:', totalPrice);

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.map((item) => {
        // Check if the item is valid before rendering
        if (!item || !item.name || !item.price) {
          console.error('Item is invalid or missing properties:', item);
          return null; // Skip rendering if the item is invalid
        }

        return (
          <div key={item.id} className="cart-item">
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
        );
      })}
      <p><strong>Total: ${totalPrice.toFixed(2)}</strong></p>
      <button onClick={proceedToCheckout} className="proceed-checkout">Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
