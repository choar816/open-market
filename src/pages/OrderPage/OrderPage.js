import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import { Order } from './components/Order';

export const OrderPage = () => {
  const { state } = useLocation();
  // useEffect(() => {
  //   console.log(state);
  // });

  return (
    <Container>
      <Header />
      <Order data={state.data} />
      <Footer />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
