import React from 'react';
import styled from 'styled-components';
import IconOn from '../../../public/assets/check-circle-on.svg';
import IconOff from '../../../public/assets/check-circle-off.svg';

const CartItem = () => {
  const store_name = '백엔드글로벌';
  const item_name = '딥러닝 개발자 무릎 담요';
  const item_price = 17500;
  const shipping_method = 'PARCEL';
  const shipping_fee = 0;

  return (
    <Container>
      <Checkbox type="checkbox" id="checkItem" />
      <label htmlFor="checkItem" />
      <ItemImg />
      <ItemInfoContainer>
        {shipping_method === 'PARCEL' ? '소포' : '택배'}배송 /{' '}
        {shipping_fee === 0
          ? '무료배송'
          : `${shipping_fee.toLocaleString('ko-KR')}원`}
      </ItemInfoContainer>
      <AmountContainer></AmountContainer>
      <PriceContainer></PriceContainer>
    </Container>
  );
};

export default CartItem;

const Container = styled.article`
  display: flex;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  width: 1280px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ItemInfoContainer = styled.div``;

const AmountContainer = styled.div``;

const PriceContainer = styled.div``;

const Checkbox = styled.input`
  display: none;
  & + label {
    width: 20px;
    height: 20px;
    background: url(${IconOn}) center/20px 20px;
  }
  &:checked + label {
    background-image: url(${IconOff});
  }
`;

const ItemImg = styled.img``;

const ItemInfo = styled.section``;
