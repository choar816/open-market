import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AmountPicker from '../AmountPicker';
import IconOn from '../../../public/assets/check-circle-on.svg';
import IconOff from '../../../public/assets/check-circle-off.svg';
import IconDelete from '../../../public/assets/icon-delete.svg';
import IconLoading from '../../../public/assets/icon-loading.png';
import ColorButton from '../button/ColorButton';
import { API_URL } from '../../util/api';

const CartItem = ({
  product_id,
  quantity,
  // is_active,
  product_name,
  image,
  price,
  shipping_method,
  shipping_fee,
  stock,
  seller,
  toggleCheck,
  onRemove,
  updateItemQuantity,
}) => {
  // QUANTITY
  const onIncrease = () => {
    if (quantity === itemInfo.stock) return;
    updateItemQuantity(quantity + 1);
  };
  const onDecrease = () => {
    if (quantity === 1) return;
    updateItemQuantity(quantity - 1);
  };

  // ITEM INFO
  // const [itemInfo, setItemInfo] = useState({
  //   seller_store: '로딩중...',
  //   product_name: '로딩중...',
  //   image: IconLoading,
  //   price: 0,
  //   shipping_method: 'DELIVERY',
  //   shipping_fee: 0,
  //   stock: 0,
  // });

  useEffect(() => {
    console.log(price);
  }, []);

  return (
    <Container>
      <DeleteButton src={IconDelete} onClick={onRemove} />
      <Checkbox
        type="checkbox"
        id={`cartItem_${product_id}`}
        // is_active={is_active}
        onChange={toggleCheck}
      />
      <label htmlFor={`cartItem_${product_id}`} />
      <ItemImg src={image} />
      <ItemInfoContainer>
        <GrayText>{seller}</GrayText>
        <ProductText>{product_name}</ProductText>
        <PriceText>{price.toLocaleString('ko-KR')}원</PriceText>
        <GrayText>
          {shipping_method === 'PARCEL' ? '소포' : '택배'}배송 /{' '}
          {shipping_fee === 0
            ? '무료배송'
            : `${shipping_fee.toLocaleString('ko-KR')}원`}
        </GrayText>
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

export default CartItem;

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

const GrayText = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #767676;
`;
const ProductText = styled.p`
  margin-top: 10px;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;
const PriceText = styled.p`
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
