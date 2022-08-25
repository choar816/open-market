import React, { useEffect } from 'react';
import { Carousel } from './components/Carousel';
import { ProductList } from './components/ProductList';

const Main = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Carousel />
      <ProductList />
    </>
  );
};

export default Main;
