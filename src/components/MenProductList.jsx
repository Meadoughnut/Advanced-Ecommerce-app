import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenProductsData from '../mock-data/menProducts.json'; // Import menProducts data
import MainNavBar from './MainNavbar';
import '../styles/productlist.css';

const MenProductList = () => {
  const [menProducts, setMenProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setMenProducts(MenProductsData);
  }, []);

  return (
    <div className="product-grid">
      <MainNavBar />
      {menProducts.map((product) => {
        // Build the image path using the public folder path
        const imagePath = `/assets/images/mensimage/${product.image}`; // Directly reference the image in the public folder

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

export default MenProductList;
