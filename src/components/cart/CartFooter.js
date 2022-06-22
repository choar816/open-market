import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ColorButton from '../button/ColorButton';
import IconPlus from '../../../public/assets/icon-circle-plus.svg';
import IconMinus from '../../../public/assets/icon-circle-minus.svg';
import TextPrice from './TextPrice';
import { API_URL } from '../../util/api';

const CartFooter = ({ checkedIds, cartItems, itemPrices }) => {
  const priceAll = 0;
  const priceDelivery = 0;

  const priceOfItem = (id) => {
    console.log(itemPrices);
    return { ...itemPrices.filter((it) => it.id === id) };
  };

  // const [itemsWithPrice, setItemsWithPrice] = useState(
  //   cartItems
  //     .map((item) => {
  //       if (checkedIds.includes(item.product_id))
  //         return {
  //           ...itemsWithPrice,
  //           id: item.product_id,
  //           quantity: item.quantity,
  //           // ...priceOfItem(item.product_id),
  //         };
  //     })
  // );

  // useEffect(() => {
  //   // setItemsWithPrice(itemsWithPrice.map((item) => addPriceToItems(item)));
  //   console.log(itemsWithPrice);
  // }, []);

  return (
    <Container>
      <PriceContainer>
        <TextPrice title={'총 상품금액'} price={46500} />
        <img src={IconMinus} />
        <TextPrice title={'상품 할인'} price={0} />
        <img src={IconPlus} />
        <TextPrice title={'배송비'} price={0} />
        <div></div>
        <TextPrice title={'결제 예정 금액'} price={46500} color={'red'} />
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
