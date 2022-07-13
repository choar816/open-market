import React from 'react';
import { OrderList } from './components/OrderList';
import styled from 'styled-components';

export const Order = ({ data }) => {
  return (
    <Container>
      <Title>주문/결제하기</Title>
      <OrderList data={data} />
    </Container>
  );
};

const Container = styled.main`
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 54px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
`;
