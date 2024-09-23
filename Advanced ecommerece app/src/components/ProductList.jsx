import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../mock-data/products.json';
import './ProductList.css'; // Import the CSS file

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setProducts(productsData);
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
