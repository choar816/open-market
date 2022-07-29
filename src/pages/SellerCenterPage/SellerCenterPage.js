import React from 'react';
import styled from 'styled-components';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import { SellerCenter } from './components/SellerCenter';

const SellerCenterPage = () => {
  return (
    <Container>
      <Header />
      <SellerCenter />
      <Footer />
    </Container>
  );
};

export default SellerCenterPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
