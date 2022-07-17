import React from 'react';
import styled from 'styled-components';
import OrderPayInfo from './OrderPayInfo/OrderPayInfo';

const OrderPay = ({ data, error, onClickPayMethod, onClickPay }) => {
  return (
    <Container>
      <section>
        <h3>결제수단</h3>
        <PayMethodContainer>
          <input
            name="payMethod"
            type="radio"
            id="CARD"
            onClick={onClickPayMethod}
          />
          <label htmlFor="CARD">신용/체크카드</label>
          <input
            name="payMethod"
            type="radio"
            id="DEPOSIT"
            onClick={onClickPayMethod}
          />
          <label htmlFor="DEPOSIT">무통장 입금</label>
          <input
            name="payMethod"
            type="radio"
            id="PHONE_PAYMENT"
            onClick={onClickPayMethod}
          />
          <label htmlFor="PHONE_PAYMENT">휴대폰 결제</label>
          <input
            name="payMethod"
            type="radio"
            id="NAVERPAY"
            onClick={onClickPayMethod}
          />
          <label htmlFor="NAVERPAY">네이버페이</label>
          <input
            name="payMethod"
            type="radio"
            id="KAKAOPAY"
            onClick={onClickPayMethod}
          />
          <label htmlFor="KAKAOPAY">카카오페이</label>
        </PayMethodContainer>
        {error && <Error>{error}</Error>}
      </section>
      <section>
        <h3>최종결제 정보</h3>
        <OrderPayInfo data={data} onClickPay={onClickPay} />
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

const Error = styled.p`
  margin-top: 10px;
  color: #eb5757;
`;