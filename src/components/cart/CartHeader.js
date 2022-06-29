import React, { useState } from 'react';
import styled from 'styled-components';
import { toggleAll } from './editCartItem';
import IconOn from '../../../public/assets/check-circle-on.svg';
import IconOff from '../../../public/assets/check-circle-off.svg';

const CartHeader = ({ cartItems, refetch }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container>
      <Checkbox
        type="checkbox"
        id="checkAll"
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
          toggleAll(cartItems, isChecked, refetch);
        }}
      />
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
  background-color: #f2f2f2;

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
