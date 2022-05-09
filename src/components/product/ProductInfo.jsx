import React from 'react';
import styled from 'styled-components';
import ProductSummary from './ProductSummary';
import ProductDetail from './ProductDetail';
import Product3 from '../../../public/assets/product-3.jpg';

function ProductInfo() {
  return (
    <Container>
      <ProductIntro>
        <img src={Product3} />
        <ProductSummary />
      </ProductIntro>
      <ProductDetail />
    </Container>
  );
}

export default ProductInfo;

const Container = styled.main`
  width: 1280px;
  padding-top: 80px;
  padding-bottom: 80px;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 140px;
`;

const ProductIntro = styled.section`
  display: flex;
  justify-content: center;
  gap: 50px;

  img {
    width: 600px;
    height: 600px;
    object-fit: cover;
  }
`;
