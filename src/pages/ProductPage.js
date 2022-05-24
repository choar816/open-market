import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductContent from '../components/product/ProductContent';

const ProductPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <Container>
      <Header />
      <ProductContent />
      <Footer />
    </Container>
  );
};

export default ProductPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
