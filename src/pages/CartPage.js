import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/cart/Cart';

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
