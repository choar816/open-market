import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ColorButton from '/src/components/button/ColorButton';
import AmountPicker from '../../../../components/AmountPicker';
import CartModal from './CartModal';
import { addProductToCart } from '../../utils/productRequest';

const ProductInfo = ({ id, data }) => {
  const {
    seller_store,
    product_id,
    product_name,
    price,
    shipping_method,
    shipping_fee,
    stock,
  } = data;

  const isLogined = localStorage.getItem('token');
  const [amount, setAmount] = useState(0);
  const [modalOn, setModalOn] = useState(false);
  const [modalContent, setModalContent] = useState('content');
  const onIncrease = () => setAmount(amount => amount < stock ? amount + 1 : amount);
  const onDecrease = () => setAmount(amount => amount > 0 ? amount - 1 : 0);
  useEffect(() => setAmount(0), [id]);

  const setModal = (content, on) => {
    setModalContent(content);
    setModalOn(on);
  };

  const onCartClick = async (product_id, quantity, check) => {
    if (!isLogined) {
      setModal('장바구니는 로그인 후 이용 가능합니다.', true);
      return;
    }

    if (!check) {
      setModal('0개를 담을 수 없습니다.', true);
      return;
    }

    addProductToCart(product_id.toString(), quantity, true).then((data) => {
      if (data?.FAIL_message) {
        setModal('현재 재고보다 더 많은 수량을 담을 수 없습니다.', true);
      } else {
        setModal('장바구니에 상품을 담았습니다!', true);
      }
    });
  };

  return (
    <>
      <Container>
        <PartFirst>
          <article>
            <StoreName>{seller_store}</StoreName>
            <ProductName>{product_name}</ProductName>
            <ProductPrice>
              <span>{price.toLocaleString('ko-KR')}</span>원
            </ProductPrice>
          </article>
          <article>
            <Delivery>
              {shipping_method === 'PARCEL' ? '소포' : '택배'}배송 /{' '}
              {shipping_fee === 0
                ? '무료배송'
                : `${shipping_fee.toLocaleString('ko-KR')}원`}
            </Delivery>
          </article>
        </PartFirst>
        <Divider />
        <AmountPicker
          amount={amount}
          stock={stock}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
        <Divider />
        <PartThird>
          <PartPrice>
            <p>총 상품 금액</p>
            <div>
              <TotalAmount>
                총 수량 <span>{amount}</span>개
              </TotalAmount>
              <TotalPrice>
                <span>{(price * amount).toLocaleString('ko-KR')}</span>원
              </TotalPrice>
            </div>
          </PartPrice>
          <PartBtn>
            <ColorButton>바로 구매</ColorButton>
            <ColorButton
              color={'charcoal'}
              width={'200px'}
              onClick={() =>
                onCartClick(product_id, amount, amount !== 0)
              }
            >
              장바구니
            </ColorButton>
          </PartBtn>
        </PartThird>
      </Container>
      {modalOn && <CartModal setIsOn={setModalOn} content={modalContent} />}
    </>
  );
};

export default ProductInfo;

const Container = styled.section`
  width: 630px;
  display: flex;
  flex-direction: column;
`;

const PartFirst = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

const PartThird = styled.section`
  display: flex;
  flex-direction: column;
`;

const PartPrice = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  & > p {
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
  }
  div {
    display: flex;
    align-items: flex-end;
    p + p::before {
      content: '';
      display: inline-block;
      position: relative;
      top: 2px;
      width: 1px;
      height: 17px;
      background-color: #c4c4c4;
      margin-left: 12px;
      margin-right: 12px;
    }
  }
`;

const PartBtn = styled.article`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  gap: 14px;
  button:nth-child(1) {
    flex-shrink: 1;
  }
`;

const Divider = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  height: 2px;
  background-color: #c4c4c4;
`;

const StoreName = styled.p`
  font-size: 18px;
  line-height: 23px;
`;

const ProductName = styled.p`
  margin-top: 16px;
  font-size: 36px;
  line-height: 45px;
`;

const ProductPrice = styled.p`
  margin-top: 20px;
  font-size: 18px;
  line-height: 23px;
  span {
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
  }
`;

const Delivery = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #767676;
`;

const TotalAmount = styled.p`
  font-size: 18px;
  line-height: 23px;
  color: #767676;
  span {
    color: #21bf48;
  }
`;

const TotalPrice = styled.p`
  font-size: 18px;
  line-height: 23px;
  color: #21bf48;
  span {
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    display: inline-block;
    margin-bottom: -8px;
  }
`;
