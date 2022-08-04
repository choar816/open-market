import React, { useState } from 'react';
import { sendRequestWithCallback, updateBody } from '../../utils/cartRequest';
import {
  Container,
  Checkbox,
  ItemInfoContainer,
  AmountContainer,
  PriceContainer,
} from './style';

const CartHeader = ({ cartItems, refetch }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleAll = () => {
    Promise.all(
      cartItems.map(({ cart_item_id, product_id, quantity }) =>
        sendRequestWithCallback(
          cart_item_id,
          updateBody(product_id, quantity, !isChecked),
          refetch,
        ),
      ),
    );
    setIsChecked((checked) => !checked);
  };

  return (
    <Container>
      <Checkbox
        type="checkbox"
        id="checkAll"
        checked={isChecked}
        onChange={toggleAll}
      />
      <label htmlFor="checkAll" />
      <ItemInfoContainer>상품정보</ItemInfoContainer>
      <AmountContainer>수량</AmountContainer>
      <PriceContainer>상품금액</PriceContainer>
    </Container>
  );
};

export default CartHeader;
