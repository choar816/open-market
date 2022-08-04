import React from 'react';
import styled from 'styled-components';

export const OrderItem = ({
  image,
  seller_store,
  product_name,
  quantity,
  shipping_fee,
  price,
}) => {
  return (
    <Container>
      <Img src={image} />
      <ItemInfo>
        <TextSeller>{seller_store}</TextSeller>
        <TextProduct>{product_name}</TextProduct>
        <TextQuantity>수량 : {quantity}개</TextQuantity>
      </ItemInfo>
      <ShipFee>-</ShipFee>
      <ShipFee>
        {shipping_fee === 0
          ? '무료배송'
          : `${shipping_fee.toLocaleString('ko-KR')}원`}
      </ShipFee>
      <Price>
        {(quantity * price + shipping_fee).toLocaleString('ko-KR')}원
      </Price>
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  align-items: center;

  width: 1280px;
  height: 130px;
  padding: 18px 8px;
  border-bottom: 1px solid #c4c4c4;
`;

const Img = styled.img`
  width: 104px;
  height: 104px;
  border-radius: 10px;
  object-fit: cover;
`;

const ItemInfo = styled.div`
  margin-left: 36px;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextSeller = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #767676;
`;

const TextProduct = styled.p`
  margin-top: 6px;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;

const TextQuantity = styled.p`
  margin-top: 10px;
  font-size: 14px;
  line-height: 18px;
  color: #767676;
`;

const ShipFee = styled.div`
  width: 200px;
  text-align: center;

  font-size: 18px;
  line-height: 23px;
  color: #76767676;
`;

const Price = styled.div`
  width: 200px;
  text-align: center;

  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
`;
