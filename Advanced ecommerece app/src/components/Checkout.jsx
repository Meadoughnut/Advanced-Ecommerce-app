import React, { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    payment: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate checkout process
    console.log('Checkout successful', formData);
    alert('Order placed successfully!');
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Address</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Payment Method</label>
          <input type="text" name="payment" value={formData.payment} onChange={handleChange} required />
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
