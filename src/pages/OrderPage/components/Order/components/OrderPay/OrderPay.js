import React from 'react';
import styled from 'styled-components';
import OrderPayInfo from './OrderPayInfo/OrderPayInfo';

const OrderPay = ({ data }) => {
  return (
    <Container>
      <section>
        <h3>결제수단</h3>
        <PayMethodContainer>
          <input
            name="payMethod"
            type="radio"
            id="card"
            value="신용/체크카드"
          />
          <label htmlFor="card">신용/체크카드</label>
          <input
            name="payMethod"
            type="radio"
            id="account"
            value="무통장 입금"
          />
          <label htmlFor="account">무통장 입금</label>
          <input name="payMethod" type="radio" id="phone" value="휴대폰 결제" />
          <label htmlFor="phone">휴대폰 결제</label>
          <input
            name="payMethod"
            type="radio"
            id="naverpay"
            value="네이버페이"
          />
          <label htmlFor="naverpay">네이버페이</label>
          <input
            name="payMethod"
            type="radio"
            id="kakaopay"
            value="카카오페이"
          />
          <label htmlFor="kakaopay">카카오페이</label>
        </PayMethodContainer>
      </section>
      <section>
        <h3>최종결제 정보</h3>
        <OrderPayInfo data={data} />
      </section>
    </Container>
  );
};

export default OrderPay;

const Container = styled.section`
  display: flex;
  gap: 40px;
  width: 100%;

  & > section {
    display: flex;
    flex-direction: column;
  }
  & > section:first-child {
    flex-grow: 1;
  }
`;

const PayMethodContainer = styled.section`
  display: flex;
  border-top: 2px solid #c4c4c4;
  border-bottom: 2px solid #c4c4c4;
  padding: 18px 4px;

  input {
    margin-right: 10px;
  }
  label + input {
    margin-left: 20px;
  }
`;
