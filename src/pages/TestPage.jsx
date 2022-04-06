import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import Product1 from '../../public/assets/product-1.jpg';
import ColorButton from '../components/ColorButton';
import TabButton from '../components/TabButton';
import TabBar from '../components/TabBar';

function TestPage() {
  return (
    <Container>
      <Header></Header>
      <ProductItem src={Product1} desc="우당탕탕 라이캣의 실험실" title="Hack Your Life 개발자 노트북 파우치" price={29000}/>
      <TabBar></TabBar>
      <ColorButton size="L">L버튼</ColorButton>
      <ColorButton size="L" color="white">L버튼 white</ColorButton>
      <ColorButton size="L" color="gray">L버튼 gray</ColorButton>
      <ColorButton size="L" color="charcoal">L버튼 charcoal</ColorButton>
      <ColorButton size="M">M버튼</ColorButton>
      <ColorButton size="M" color="white">M버튼 white</ColorButton>
      <ColorButton size="M" color="gray">M버튼 gray</ColorButton>
      <ColorButton size="M" color="charcoal">M버튼 charcoal</ColorButton>
      <ColorButton size="MS">MS버튼</ColorButton>
      <ColorButton size="MS" color="white">MS버튼 white</ColorButton>
      <ColorButton size="MS" color="gray">MS버튼 gray</ColorButton>
      <ColorButton size="MS" color="charcoal">MS버튼 charcoal</ColorButton>
      <ColorButton size="S">S버튼</ColorButton>
      <ColorButton size="S" color="white">S버튼 white</ColorButton>
      <ColorButton size="S" color="gray">S버튼 gray</ColorButton>
      <ColorButton size="S" color="charcoal">S버튼 charcoal</ColorButton>
    </Container>
  )
}

export default TestPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
