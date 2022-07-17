import React, { useState } from 'react';
import ColorButton from '/src/components/button/ColorButton';
import styled from 'styled-components';
import IconUnchecked from '/public/assets/check-box.svg';
import IconChecked from '/public/assets/check-fill-box.svg';

const OrderPayInfo = ({ data, onClickPay }) => {
  const [checkedTerm, setCheckedTerm] = useState(false);

  const priceProduct = data.reduce((acc, cur) => {
    return acc + cur.price * cur.quantity;
  }, 0);
  const priceShip = data.reduce((acc, cur) => {
    return acc + cur.shipping_fee;
  }, 0);

  return (
    <Container>
      <Upper>
        <TextPrice>
          <div>- 상품금액</div>
          <div>
            <span>{priceProduct.toLocaleString('ko-KR')}</span>원
          </div>
        </TextPrice>
        <TextPrice>
          <div>- 할인금액</div>
          <div>
            <span>{0}</span>원
          </div>
        </TextPrice>
        <TextPrice>
          <div>- 배송비</div>
          <div>
            <span>{priceShip.toLocaleString('ko-KR')}</span>원
          </div>
        </TextPrice>
        <TextPrice>
          <div>- 결제금액</div>
          <div>
            <strong>
              {(priceProduct + priceShip).toLocaleString('ko-KR')}원
            </strong>
          </div>
        </TextPrice>
      </Upper>
      <Lower>
        <div>
          <Checkbox
            type="checkbox"
            id="checkOrder"
            onChange={() => setCheckedTerm((checkedTerm) => !checkedTerm)}
          />
          <label htmlFor="checkOrder" />
          <p>주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</p>
        </div>
        <ColorButton
          size="L"
          width="220px"
          color={checkedTerm ? 'green' : 'gray'}
          onClick={checkedTerm ? onClickPay : () => {}}
        >
          결제하기
        </ColorButton>
      </Lower>
    </Container>
  );
};

export default OrderPayInfo;

const Container = styled.section`
  border: 2px solid #21bf48;
  border-radius: 10px;
`;

const Upper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 20px;
`;

const TextPrice = styled.article`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 20px;

  span {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
  }
  strong {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #eb5757;
  }

  & + article {
    margin-top: 12px;
  }

  &:last-child {
    border-top: 1px solid #c4c4c4;
    padding-top: 24px;
    margin-top: 18px;
  }
`;

const Lower = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 30px;
  background-color: #f2f2f2;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  & > div {
    display: flex;
  }
`;

const Checkbox = styled.input`
  display: none;

  & + label {
    margin-right: 10px;
    margin-top: 1px;
    width: 17px;
    height: 16px;
    background: url(${IconUnchecked}) center/16px 16px;
  }
  &:checked + label {
    background-image: url(${IconChecked});
  }
`;
