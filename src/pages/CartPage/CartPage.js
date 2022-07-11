import React from 'react';
import styled from 'styled-components';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import { Cart } from './components/cart/';

const CartPage = () => {
  return (
    <Container>
      <Header />
      <Cart />
      <Footer />
    </Container>
  );
};

export default CartPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
