import React from 'react';
import styled from 'styled-components';
import ColorButton from '../button/ColorButton';
import IconPlus from '../../../public/assets/icon-circle-plus.svg';
import IconMinus from '../../../public/assets/icon-circle-minus.svg';

const CartFooter = () => {
  return (
    <Container>
      <PriceContainer>
        <div>price1</div>
        <img src={IconMinus} />
        <div>price2</div>
        <img src={IconPlus} />
        <div>price3</div>
        <div></div>
        <div>price4</div>
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
