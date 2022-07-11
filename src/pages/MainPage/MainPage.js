import React from 'react';
import styled from 'styled-components';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import { Carousel } from './components/carousel';
import { ProductList } from './components/productList';

const MainPage = () => {
  return (
    <Container>
      <Header />
      <Carousel />
      <ProductList />
      <Footer />
    </Container>
  );
};

export default MainPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
