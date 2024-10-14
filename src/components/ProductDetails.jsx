import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import productsData from '../mock-data/menProducts.json';
import '../styles/productdetail.css';


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const userEmail = localStorage.getItem('currentUser') || 'guest'; // Get user email for localStorage key or fallback to 'guest'

  useEffect(() => {
    // Fetch product based on ID from params
    const selectedProduct = productsData.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct);

    // Retrieve cart items from localStorage when the component mounts
    const storedCart = JSON.parse(localStorage.getItem(`cartItems-${userEmail}`)) || [];
    setCartItems(storedCart);
  }, [id, userEmail]);

  const addToCart = () => {
    if (!product) {
      alert('Product not found.');
      return;
    }

    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    let updatedCart;
    if (existingItemIndex !== -1) {
      // If the item exists, update its quantity
      updatedCart = cartItems.map((item, index) =>
        index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // If the item does not exist, add it with a quantity of 1
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }

    // Update cart and store in localStorage
    setCartItems(updatedCart);
    localStorage.setItem(`cartItems-${userEmail}`, JSON.stringify(updatedCart));
    alert(`${product.name} added to cart!`);
  };

  // Proceed to checkout
  const proceedToCheckout = () => {
    navigate('/checkout');
  };

  // Go Back Function
  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details">

       {/* Go Back Button at the Top Right Corner */}
       <button onClick={goBack} className="go-back-button">
        Go Back
      </button>
      <img src={`/assets/images/mensimage/${product.image}`} alt={product.name} className="product-image" />
      <h1>{product.name}</h1>
      <p>${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={proceedToCheckout}>Proceed to Checkout</button> {/* Add this button */}
    </div>
  );
};

export default ProductDetails;
