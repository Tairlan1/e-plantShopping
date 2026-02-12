import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import Cart from './CartItem'; // Assuming CartItem.jsx is the cart page component
import AboutUs from './AboutUs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

const Landing = () => {
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>
      <Link to="/plants">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default App;