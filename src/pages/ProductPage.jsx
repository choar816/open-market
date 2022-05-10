import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductInfo from '../components/product/ProductInfo';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const params = useParams();

  return (
    <Container>
      <Header />
      <ProductInfo productId={params.id} />
      <Footer />
    </Container>
  )
}

export default ProductPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
