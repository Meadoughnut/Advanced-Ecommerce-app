import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../mock-data/products.json';
// Import the CSS file if necessary

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setProducts(productsData);
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => {
        // Ensure the image path is correct and images are stored in public/assets/images
        const imagePath = `/assets/images/${product.image}`; // Correct path based on public folder

        return (
          <div className="product-card" key={product.id}>
            <img src={imagePath} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`}>View Details</Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
