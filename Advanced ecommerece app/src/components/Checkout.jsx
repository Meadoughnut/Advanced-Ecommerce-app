import React, { useState, useEffect } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    payment: ''
  });

  const [cartItems, setCartItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
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

    // Simulate checkout process
    console.log('Order details:', formData);

    // Clear cart and show order placed message
    localStorage.removeItem('cartItems');
    setOrderPlaced(true);
  };

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
          />
          {errors.payment && <p className="error">{errors.payment}</p>}
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
