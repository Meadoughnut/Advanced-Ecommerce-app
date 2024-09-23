import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../mock-data/products.json';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const selectedProduct = productsData.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct);
    
    // Retrieve cart items from localStorage when the component mounts
    const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCart);
  }, [id]);

  const addToCart = () => {
    const updatedCart = [...cartItems, { ...product, quantity: 1 }]; // Add product to cart with quantity
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Store updated cart in localStorage
    alert(`${product.name} added to cart!`);
  };

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <h1>{product.name}</h1>
      <p>${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
