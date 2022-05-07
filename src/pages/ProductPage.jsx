import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductDetail from '../components/ProductDetail';

function ProductPage() {
  return (
    <Container>
      <Header />
      <ProductDetail />
      <Footer />
    </Container>
  )
}

export default ProductPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
