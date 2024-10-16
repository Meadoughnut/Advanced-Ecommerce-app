import React, { useState, useEffect } from 'react';
import '../styles/checkout.css'

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    payment: ''
  });

  const [cartItems, setCartItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(false); // New state for loading spinner
  const [errors, setErrors] = useState({}); // Error state for form validation

  useEffect(() => {
    // Load cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.payment) newErrors.payment = 'Payment details are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form before submitting
    if (!validateForm()) {
      return;
    }

    // Simulate a loading spinner
    setLoading(true);

    // Simulate a delay for order processing
    setTimeout(() => {
      // Simulate checkout process
      console.log('Order details:', formData);

      // Clear cart and show order placed message
      localStorage.removeItem('cartItems');
      setOrderPlaced(true);
      setLoading(false); // Turn off loading spinner
    }, 2000); // 2-second delay to simulate order processing
  };

  if (loading) {
    return (
      <div className="loading-spinner">
        <p>Processing your order...</p>
        {/* You can add a CSS animation for the spinner here */}
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="order-confirmation">
        <h1>Thank you for your order!</h1>
        <p>Your order has been placed successfully. We will ship your items soon.</p>
      </div>
    );
  }

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <h2>Order Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="order-summary">
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name} (x{item.quantity}) - ${item.price.toFixed(2)}</p>
            </div>
          ))}
          <p><strong>Total: ${totalPrice.toFixed(2)}</strong></p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name" // Added autocomplete attribute
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            autoComplete="street-address" // Added autocomplete attribute
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>
        <div>
          <label>Payment Details</label>
          <input
            type="text"
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            required
            autoComplete="cc-number" // Added autocomplete attribute
          />
          {errors.payment && <p className="error">{errors.payment}</p>}
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
