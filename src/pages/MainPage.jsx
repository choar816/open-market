import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import Product1 from '../../public/assets/product-1.jpg';

function MainPage() {
  return (
    <Container>
      <Header></Header>
      <ProductItem src={Product1} desc="우당탕탕 라이캣의 실험실" title="Hack Your Life 개발자 노트북 파우치" price={29000}/>
    </Container>
  )
}

export default MainPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
