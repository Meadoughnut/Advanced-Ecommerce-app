import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../mock-data/products.json';

const ProductDetails = () => {
  const { id } = useParams(); // Extract product ID from URL
  const [product, setProduct] = useState(null); // State for the selected product
  const [cartItems, setCartItems] = useState([]); // State for cart items
  const userEmail = localStorage.getItem('currentUser') || 'guest'; // Get current user or set as guest

  // Fetch product details and retrieve cart items from localStorage
  useEffect(() => {
    // Fetch the product based on ID
    const selectedProduct = productsData.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct);

    // Get cart items from localStorage based on user (or guest)
    const storedCart = JSON.parse(localStorage.getItem(`cartItems-${userEmail}`)) || [];
    setCartItems(storedCart);
  }, [id, userEmail]);

  // Function to handle adding products to the cart
  const addToCart = () => {
    if (!userEmail) {
      alert('Please log in to add items to your cart.');
      return;
    }

    if (!product) {
      alert('Product not found.');
      return;
    }

    // Check if the product already exists in the cart
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    let updatedCart;
    if (existingItemIndex !== -1) {
      // If the product already exists in the cart, update its quantity
      updatedCart = cartItems.map((item, index) =>
        index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }

    // Update the cart state and store it in localStorage
    setCartItems(updatedCart);
    localStorage.setItem(`cartItems-${userEmail}`, JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
  };

  // Handle case where product is not found
  if (!product) {
    return <div>Product not found!</div>;
  }

  // Render product details
  return (
    <div className="product-details">
      <img src={`/assets/images/${product.image}`} alt={product.name} className="product-image" />
      <h1>{product.name}</h1>
      <p>${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
