import React, { useEffect } from 'react';
import { Carousel } from './components/Carousel';
import { StoreList } from './components/StoreList';

const Main = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      {/* <Carousel /> */}
      <StoreList />
    </>
  );
};

export default Main;
