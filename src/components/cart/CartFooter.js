import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ColorButton from '../button/ColorButton';
import IconPlus from '../../../public/assets/icon-circle-plus.svg';
import IconMinus from '../../../public/assets/icon-circle-minus.svg';
import TextPrice from './TextPrice';
import { API_URL } from '../../util/api';

const CartFooter = ({ cartDetail }) => {
  const [priceProduct, setPriceProduct] = useState(
    cartDetail.reduce((acc, cur) => acc.price + cur.price, 0),
  );
  const [priceShip, setPriceShip] = useState(
    cartDetail.reduce((acc, cur) => acc.shipping_fee + cur.shipping_fee, 0),
  );

  return (
    <Container>
      <PriceContainer>
        <TextPrice title={'총 상품금액'} price={priceProduct} />
        <img src={IconMinus} />
        <TextPrice title={'상품 할인'} price={0} />
        <img src={IconPlus} />
        <TextPrice title={'배송비'} price={priceShip} />
        <div></div>
        <TextPrice title={'결제 예정 금액'} price={priceProduct + priceShip} color={'red'} />
      </PriceContainer>
      <ColorButton size={'L'} width={'220px'}>
        주문하기
      </ColorButton>
    </Container>
  );
};

export default CartFooter;

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PriceContainer = styled.article`
  display: flex;
  justify-content: space-between;
  width: 1280px;
  margin-top: 80px;
  margin-bottom: 40px;
  padding: 40px 100px;
  background-color: #f2f2f2;
  border-radius: 10px;
`;
