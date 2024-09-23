import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../mock-data/products.json';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product based on the ID
    const selectedProduct = productsData.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <h1>{product.name}</h1>
      <p>${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
