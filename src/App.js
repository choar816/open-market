import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { setMetaTag } from './util/meta';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import TestPage from './pages/TestPage';
import './App.css';

const App = () => {
  useEffect(() => setMetaTag({}), []);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="product/:id" element={<ProductPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="join" element={<JoinPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
