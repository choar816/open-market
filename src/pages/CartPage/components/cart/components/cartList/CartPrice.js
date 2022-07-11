import React from 'react';
import styled from 'styled-components';
import TextPrice from './TextPrice';
import ColorButton from '/src/components/button/ColorButton';
import IconPlus from '/public/assets/icon-circle-plus.svg';
import IconMinus from '/public/assets/icon-circle-minus.svg';

const CartPrice = ({ priceProduct, priceShip }) => {
  return (
    <Container>
      <PriceContainer>
        <TextPrice title={'총 상품금액'} price={priceProduct} />
        <img src={IconMinus} />
        <TextPrice title={'상품 할인'} price={0} />
        <img src={IconPlus} />
        <TextPrice title={'배송비'} price={priceShip} />
        <div></div>
        <TextPrice
          title={'결제 예정 금액'}
          price={priceProduct + priceShip}
          color={'red'}
        />
      </PriceContainer>
      <ColorButton size={'L'} width={'220px'}>
        주문하기
      </ColorButton>
    </Container>
  );
};

export default React.memo(CartPrice);

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
  padding: 40px 70px;
  background-color: #f2f2f2;
  border-radius: 10px;
`;
