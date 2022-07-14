import React from 'react';
import ColorButton from '/src/components/button/ColorButton';
import styled from 'styled-components';

const OrderInfo = () => {
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
          <input />
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
          <input />
        </article>
        <article>
          <p>휴대폰</p>
          <input />
        </article>
        <article>
          <p>배송주소</p>
          <div>
            <div>
              <input />
              <ColorButton size="S" width="150px">우편번호 조회</ColorButton>
            </div>
            <input className="long" />
            <input className="long" />
          </div>
        </article>
        <article>
          <p>배송 메시지</p>
          <input className="long" />
        </article>
      </InfoForm>
    </Container>
  );
};

export default React.memo(OrderInfo);

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

  article {
    display: flex;
    align-items: center;
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
