import React from 'react';
import styled from 'styled-components';

const CartNoaccess = () => {
  return (
    <Container>
      <span>⛔🙅🏻⛔</span>
      <br />
      판매자는 장바구니 접근이 불가능합니다.
    </Container>
  );
};

export default CartNoaccess;

const Container = styled.article`
  margin: 150px auto 150px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  span {
    font-size: 80px;
  }
`;
