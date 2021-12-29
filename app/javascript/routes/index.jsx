import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  MenuPage, CartPage, HomePage, LoginPage,
} from '../views';
import { RequireAuth } from '../components';

export default (
  <Router>
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="cart" element={<RequireAuth><CartPage /></RequireAuth>} />
      <Route path="menu/:category" element={<RequireAuth><MenuPage /></RequireAuth>} />
      <Route path="/" element={<RequireAuth><HomePage /></RequireAuth>} />
    </Routes>
  </Router>
);
