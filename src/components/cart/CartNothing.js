import React from 'react';
import styled from 'styled-components';

const CartNothing = () => {
  return (
    <Container>
      <h2>장바구니에 담긴 상품이 없습니다.</h2>
      <p>원하는 상품을 장바구니에 담아보세요!</p>
    </Container>
  );
};

export default CartNothing;

const Container = styled.section`
  margin-top: 200px;
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
  }

  p {
    margin-top: 17px;
    font-size: 14px;
    line-height: 18px;
    color: #767676;
  }
`;
