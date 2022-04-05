import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import Product1 from '../../public/assets/product-1.jpg';
import ColorButton from '../components/ColorButton';

function MainPage() {
  return (
    <Container>
      <Header></Header>
    </Container>
  )
}

export default MainPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
