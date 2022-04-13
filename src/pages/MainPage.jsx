import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import ProductList from '../components/ProductList';

function MainPage() {
  return (
    <Container>
      <Header />
      <Carousel />
      <ProductList />
    </Container>
  )
}

export default MainPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
