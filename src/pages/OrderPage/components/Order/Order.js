import React from 'react';
import { OrderList } from './components/OrderList';
import { OrderInfo } from './components/OrderInfo';
import { OrderPay } from './components/OrderPay';
import styled from 'styled-components';

export const Order = ({ data }) => {
  return (
    <Container>
      <Title>주문/결제하기</Title>
      <OrderList data={data} />
      <OrderInfo />
      <OrderPay data={data} />
    </Container>
  );
};

const Container = styled.main`
  width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  align-self: center;
  padding: 54px;

  h3 {
    margin-bottom: 18px;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
`;
