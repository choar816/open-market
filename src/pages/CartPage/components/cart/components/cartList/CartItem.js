import React, { useCallback } from 'react';
import styled from 'styled-components';
import { removeBody, sendRequestWithCallback, updateBody } from '../../../../utils/cartRequest';
import AmountPicker from '/src/components/AmountPicker';
import ColorButton from '/src/components/button/ColorButton';
import IconOn from '/public/assets/check-circle-on.svg';
import IconOff from '/public/assets/check-circle-off.svg';
import IconDelete from '/public/assets/icon-delete.svg';

const CartItem = ({ item, refetch }) => {
  const {
    cart_item_id,
    product_id,
    quantity,
    is_active,
    product_name,
    image,
    price,
    shipping_method,
    shipping_fee,
    stock,
    seller_store,
  } = item;

  const onIncrease = useCallback(() => {
    if (quantity === stock) return;
    sendRequestWithCallback(
      cart_item_id,
      updateBody(product_id, quantity + 1, is_active),
      refetch,
    );
  }, [quantity, is_active]);

  const onDecrease = useCallback(() => {
    if (quantity === 1) return;
    sendRequestWithCallback(
      cart_item_id,
      updateBody(product_id, quantity - 1, is_active),
      refetch,
    );
  }, [quantity, is_active]);

  const toggleCheck = useCallback(() => {
    sendRequestWithCallback(
      cart_item_id,
      updateBody(product_id, quantity, !is_active),
      refetch,
    );
  }, [quantity, is_active]);

  const onRemove = useCallback(() => {
    sendRequestWithCallback(
      cart_item_id,
      removeBody(),
      refetch,
    );
  }, []);

  return (
    <Container>
      <DeleteButton
        src={IconDelete}
        onClick={onRemove}
      />
      <Checkbox
        type="checkbox"
        id={`cartItem_${product_id}`}
        checked={is_active}
        onChange={toggleCheck}
      />
      <label htmlFor={`cartItem_${product_id}`} />
      <ItemImg src={image} />
      <ItemInfoContainer>
        <TextGray>{seller_store}</TextGray>
        <TextProduct>{product_name}</TextProduct>
        <TextPrice>{price.toLocaleString('ko-KR')}원</TextPrice>
        <TextGray>
          {shipping_method === 'PARCEL' ? '소포' : '택배'}배송 /{' '}
          {shipping_fee === 0
            ? '무료배송'
            : `${shipping_fee.toLocaleString('ko-KR')}원`}
        </TextGray>
      </ItemInfoContainer>
      <AmountContainer>
        <AmountPicker
          amount={quantity}
          stock={stock}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      </AmountContainer>
      <PriceContainer>
        <p>{(price * quantity + shipping_fee).toLocaleString('ko-KR')}원</p>
        <ColorButton size={'S'} width={'130px'}>
          주문하기
        </ColorButton>
      </PriceContainer>
    </Container>
  );
};

export default React.memo(CartItem);

const Container = styled.article`
  display: flex;
  align-items: center;
  position: relative;

  width: 1280px;
  height: 200px;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;

  & + article {
    margin-top: 10px;
  }
`;

const Checkbox = styled.input`
  display: none;
  & + label {
    width: 20px;
    height: 20px;
    margin-top: 1px;
    margin-left: 30px;
    background: url(${IconOff}) center/20px 20px;
  }
  &:checked + label {
    background-image: url(${IconOn});
  }
`;

const ItemImg = styled.img`
  margin-left: 40px;
  object-fit: cover;
  width: 160px;
  height: 160px;
  border-radius: 10px;
`;

const ItemInfoContainer = styled.div`
  margin-left: 36px;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextGray = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #767676;
`;
const TextProduct = styled.p`
  margin-top: 10px;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;
const TextPrice = styled.p`
  margin-top: 10px;
  flex-grow: 1;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

const AmountContainer = styled.div`
  & > article {
    margin: 0 auto;
  }
  width: 250px;
`;

const PriceContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    color: #eb5757;
  }
  button {
    margin-top: 26px;
  }
`;

const DeleteButton = styled.img`
  position: absolute;
  top: 18px;
  right: 18px;
  cursor: pointer;
  width: 22px;
  height: 22px;
`;
