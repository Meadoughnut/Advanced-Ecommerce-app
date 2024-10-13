import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenProductsData from '../mock-data/menProducts.json'; // Import menProducts data
import MainNavBar from './MainNavbar';
import '../styles/productlist.css';
// import greenman from '../assets/Images/mens/greenman.png'

const MenProductList = () => {
  const [menProducts, setMenProducts] = useState([]); // Use correct variable name

  useEffect(() => {
    // Simulate fetching data
    setMenProducts(MenProductsData);
  }, []);

  return (
    <div className="product-grid">
      <MainNavBar />
      {menProducts.map((product) => {
        // Ensure the image path is correct and images are stored in public/assets/images
        const imagePath = `.src/${product.image}`;

        return (
          <div className="product-card" key={product.id}>
            <img src={greenman} alt={product.name} className="product-image" />
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
