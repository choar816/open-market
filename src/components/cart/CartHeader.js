import React from 'react';
import styled from 'styled-components';
import IconOn from '../../../public/assets/check-circle-on.svg';
import IconOff from '../../../public/assets/check-circle-off.svg';

const CartHeader = () => {
  return (
    <Container>
      <Checkbox type="checkbox" id="checkAll" />
      <label htmlFor="checkAll" />
      <ItemInfoContainer>상품정보</ItemInfoContainer>
      <AmountContainer>수량</AmountContainer>
      <PriceContainer>상품금액</PriceContainer>
    </Container>
  );
};

export default CartHeader;

const Container = styled.article`
  margin-top: 50px;
  margin-bottom: 35px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  
  width: 1280px;
  background-color: #F2F2F2;

  div {
    font-size: 18px;
    line-height: 23px;
    text-align: center;
  }
`;

const Checkbox = styled.input`
  display: none;
  & + label {
    width: 20px;
    height: 20px;
    margin-top: 1px;
    margin-left: 30px;
    background: url(${IconOn}) center/20px 20px;
  }
  &:checked + label {
    background-image: url(${IconOff});
  }
`;

const ItemInfoContainer = styled.div`
  flex-grow: 1;
`;

const AmountContainer = styled.div`
  width: 250px;
`;

const PriceContainer = styled.div`
  width: 300px;
`;
