import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AmountPicker from '../AmountPicker';
import IconOn from '../../../public/assets/check-circle-on.svg';
import IconOff from '../../../public/assets/check-circle-off.svg';
import IconDelete from '../../../public/assets/icon-delete.svg';
import ProductImg from '../../../public/assets/loading-icon.png';
import ColorButton from '../button/ColorButton';

const CartItem = ({ product_id, quantity }) => {
  // const [itemInfo, setItemInfo] = useState({});
  const [itemInfo, setItemInfo] = useState({
    seller_store: '로딩중...',
    product_name: '로딩중...',
    image: ProductImg,
    price: 0,
    shipping_method: 'DELIVERY',
    shipping_fee: 0,
  });

  const getItemInfo = async () => {
    const url = 'https://openmarket.weniv.co.kr';
    fetch(`${url}/products/${product_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        // if (!res.ok) throw new Error('http 에러');
        return res.json();
      })
      .then((data) => {
        setItemInfo(data);
      })
      .catch((e) => alert(e.message));
  };

  useEffect(() => {
    getItemInfo();
  }, []);

  return (
    <Container>
      <DeleteButton src={IconDelete} />
      <Checkbox type="checkbox" id={'checkItem'} />
      <label htmlFor={'checkItem'} />
      <ItemImg src={itemInfo.image} />
      <ItemInfoContainer>
        <GrayText>{itemInfo.seller_store}</GrayText>
        <ProductText>{itemInfo.product_name}</ProductText>
        <PriceText>{itemInfo.price.toLocaleString('ko-KR')}원</PriceText>
        <GrayText>
          {itemInfo.shipping_method === 'PARCEL' ? '소포' : '택배'}배송 /{' '}
          {itemInfo.shipping_fee === 0
            ? '무료배송'
            : `${itemInfo.shipping_fee.toLocaleString('ko-KR')}원`}
        </GrayText>
      </ItemInfoContainer>
      <AmountContainer>
        <AmountPicker amount={1} stock={5} />
      </AmountContainer>
      <PriceContainer>
        <p>{itemInfo.price.toLocaleString('ko-KR')}원</p>
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
    background: url(${IconOn}) center/20px 20px;
  }
  &:checked + label {
    background-image: url(${IconOff});
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
