import React from 'react';
import ColorButton from '/src/components/button/ColorButton';
import styled from 'styled-components';

const OrderForm = ({
  orderFormError,
  address,
  onChangeOrderForm,
  onChangeOrderAddress,
  onClickPostcode,
}) => {
  return (
    <Container>
      <h3>배송정보</h3>
      <InfoForm>
        <h4>주문자 정보</h4>
        <article>
          <p>이름</p>
          <input />
        </article>
        <article>
          <p>휴대폰</p>
          <input inputMode="numeric" />
        </article>
        <article>
          <p>이메일</p>
          <input />
        </article>
      </InfoForm>
      <InfoForm>
        <h4>배송지 정보</h4>
        <article>
          <p>수령인</p>
          <input name="receiver" onChange={onChangeOrderForm} />
          {orderFormError.receiver && <Error>{orderFormError.receiver}</Error>}
        </article>
        <article>
          <p>휴대폰</p>
          <input
            name="receiver_phone_number"
            inputMode="numeric"
            onChange={onChangeOrderForm}
          />
          {orderFormError.receiver_phone_number && (
            <Error>{orderFormError.receiver_phone_number}</Error>
          )}
        </article>
        <article>
          <p>배송주소</p>
          <div>
            <div>
              <input
                readOnly
                name="address1"
                className="readonly"
                value={address[0]}
                onClick={onClickPostcode}
                onChange={onChangeOrderAddress}
              />
              <ColorButton size="S" width="150px" onClick={onClickPostcode}>
                우편번호 조회
              </ColorButton>
            </div>
            <input
              readOnly
              name="address2"
              className="long readonly"
              value={address[1]}
              onChange={onChangeOrderAddress}
            />
            <input
              name="address3"
              className="long"
              onChange={onChangeOrderAddress}
            />
          </div>
          {orderFormError.address && <Error>{orderFormError.address}</Error>}
        </article>
        <article>
          <p>배송 메시지</p>
          <input
            name="address_message"
            className="long"
            onChange={onChangeOrderForm}
          />
          {orderFormError.address_message && (
            <Error>{orderFormError.address_message}</Error>
          )}
        </article>
      </InfoForm>
    </Container>
  );
};

export default React.memo(OrderForm);

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    width: 100%;
    border-bottom: 2px solid #c4c4c4;
    padding-bottom: 18px;
  }
`;

const InfoForm = styled.section`
  margin-top: 40px;

  h4 {
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    border-bottom: 2px solid #c4c4c4;
  }

  & > article {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 1px solid #c4c4c4;
    padding-top: 8px;
    padding-bottom: 8px;

    p {
      width: 170px;
      font-size: 16px;
      line-height: 20px;
    }
    input {
      padding: 8px;
      border: 1px solid #c4c4c4;
      outline: none;
      height: 40px;
      width: 330px;
      &.long {
        width: 800px;
      }
      &.readonly {
        cursor: default;
      }
    }
    & > div {
      display: flex;
      flex-direction: column;
      gap: 8px;
      button {
        margin-left: 8px;
      }
    }
  }
`;

const Error = styled.article`
  width: 100%;
  margin-top: 10px;
  color: #eb5757;
`;
