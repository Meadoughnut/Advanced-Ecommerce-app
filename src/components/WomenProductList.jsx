import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WomenProductsData from '../mock-data/womenProducts.json'; // Import menProducts data
import MainNavBar from './MainNavbar';
import '../styles/productlist.css';

const WomenProductList = () => {
  const [womenProducts, setWomenProducts] = useState([]); // Use correct variable name

  useEffect(() => {
    // Simulate fetching data
    setWomenProducts(WomenProductsData);
  }, []);

  return (
    <div className="product-grid">
      <MainNavBar />
      {womenProducts.map((product) => {
        // Ensure the image path is correct and images are stored in public/assets/images
        const imagePath = `/assets/images/${product.image}`;

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

export default WomenProductList;
