import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { setMetaTag } from '/src/utils/meta';
import { LoginPage, JoinPage, NotFoundPage } from './pages';
import {
  Main,
  Product,
  Cart,
  Order,
  MyInfo,
  Dashboard,
  ProductUpload,
} from './pages/pageContents';
import { PageWithHeaderFooter } from './pages/PageWithHeaderFooter';
import './App.css';

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => setMetaTag({}), []);

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<PageWithHeaderFooter />}>
          <Route index element={<Main />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
          <Route path="mypage" element={<MyInfo />} />
          <Route path="seller_center">
            <Route index element={<Dashboard />} />
            <Route path="upload_product" element={<ProductUpload />} />
          </Route>
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="join" element={<JoinPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
