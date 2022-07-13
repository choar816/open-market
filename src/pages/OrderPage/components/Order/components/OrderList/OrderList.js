import React from 'react';
import styled from 'styled-components';
import { OrderItem } from './components/OrderItem';

export const OrderList = ({ data }) => {
  return (
    <Container>
      <Header>
        <div>상품정보</div>
        <div>할인</div>
        <div>배송비</div>
        <div>주문금액</div>
      </Header>
      {data.map((item) => (
        <OrderItem {...item} />
      ))}
      <PriceTotal>
        총 주문금액{' '}
        <span>
          {data
            .reduce((acc, cur) => {
              return acc + cur.price * cur.quantity + cur.shipping_fee;
            }, 0)
            .toLocaleString('ko-KR')}
          원
        </span>
      </PriceTotal>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Header = styled.article`
  margin-top: 50px;
  margin-bottom: 6px;
  padding: 20px 8px;
  display: flex;

  width: 1280px;
  background-color: #f2f2f2;
  border-radius: 10px;

  div {
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    &:first-child {
      flex-grow: 1;
    }
    &:not(:first-child) {
      width: 200px;
    }
  }
`;

const PriceTotal = styled.div`
  align-self: end;
  margin-top: 30px;
  font-size: 18px;
  line-height: 23px;

  span {
    display: inline-block;
    margin-left: 10px;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #eb5757;
  }
`;
