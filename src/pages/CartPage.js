import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartFooter from '../components/cart/CartFooter';
import CartHeader from '../components/cart/CartHeader';
import CartItem from '../components/cart/CartItem';
import CartNothing from '../components/cart/CartNothing';

const CartPage = () => {
  const [nothing, setNothing] = useState(false);

  return (
    <Container>
      <Header />
      <CartContainer>
        <h2>장바구니</h2>
        <CartHeader all={nothing} setAll={setNothing} />
        {nothing ? (
          <CartNothing />
        ) : (
          <>
            <CartItem />
            <CartFooter />
          </>
        )}
      </CartContainer>
      <Footer />
    </Container>
  );
};

export default CartPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const CartContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  & > h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
  }
`;
