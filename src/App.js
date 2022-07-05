import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import { setMetaTag } from '/src/utils/meta';
import { MainPage, CartPage } from './pages';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => setMetaTag({}), []);

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="join" element={<JoinPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
