import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import HomePage from '../views/HomePage';

export default (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
);
