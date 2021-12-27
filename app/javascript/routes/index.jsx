import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MenuPage, CartPage, HomePage } from '../views';

export default (
  <Router>
    <Routes>
      <Route path="cart" element={<CartPage />} />
      <Route path="menu/:category" element={<MenuPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
);
