import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [shippingFee, setShippingFee] = useState(5); // Default shipping fee
  const navigate = useNavigate(); // Initialize useNavigate

  // Assuming you store the current user's email in localStorage when they log in
  const userEmail = localStorage.getItem('currentUser'); 

  useEffect(() => {
    // Retrieve cart items from localStorage based on the user's email
    try {
      const storedCart = JSON.parse(localStorage.getItem(`cartItems-${userEmail}`)) || [];
      setCartItems(storedCart);
    } catch (error) {
      console.error("Error parsing cart items from localStorage", error);
    }
  }, [userEmail]);

  // Update localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem(`cartItems-${userEmail}`, JSON.stringify(cartItems));
  }, [cartItems, userEmail]);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
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
  };

  const handleSaveForLater = (id) => {
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    const itemToSave = cartItems.find((item) => item.id === id);
    const updatedCart = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedCart);
    localStorage.setItem(`cartItems-${userEmail}`, JSON.stringify(updatedCart));
    localStorage.setItem('savedItems', JSON.stringify([...savedItems, itemToSave]));
  };

  const applyCoupon = () => {
    const validCoupons = { 'SAVE10': 10, 'DISCOUNT15': 15 };

    if (validCoupons[coupon]) {
      setDiscount(validCoupons[coupon]);
      alert(`Coupon applied! You saved $${validCoupons[coupon]}`);
    } else {
      alert("Invalid Coupon Code");
    }
  };

  const proceedToCheckout = () => {
    // Navigate to the Checkout page
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return <div>Your cart is empty!</div>;
  }

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const finalTotal = totalPrice - discount + (totalPrice > 50 ? 0 : shippingFee); // Free shipping on orders above $50

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
            <button onClick={() => handleSaveForLater(item.id)}>Save for Later</button>
          </div>
        </div>
      ))}

      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <p><strong>Total Price: ${totalPrice.toFixed(2)}</strong></p>
        <p>Discount: ${discount}</p>
        <p>Shipping Fee: ${totalPrice > 50 ? 'Free' : `$${shippingFee}`}</p>
        <p><strong>Final Total: ${finalTotal.toFixed(2)}</strong></p>

        <div className="coupon-section">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button onClick={applyCoupon}>Apply Coupon</button>
        </div>

        <button onClick={proceedToCheckout} className="proceed-checkout">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
