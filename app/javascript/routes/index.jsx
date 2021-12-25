import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage, CartPage } from '../views';

export default (
  <Router>
    <Routes>
      <Route path="cart" element={<CartPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
);
