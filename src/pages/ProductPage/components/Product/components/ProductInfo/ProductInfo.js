import React, { useEffect, useState } from 'react';
import ColorButton from '/src/components/button/ColorButton';
import AmountPicker from '/src/components/AmountPicker';
import CartModal from './CartModal';
import { addProductToCart } from '../../../../utils/productRequest';
import {
  Container,
  PartFirst,
  PartThird,
  PartPrice,
  PartBtn,
  Divider,
  StoreName,
  ProductName,
  ProductPrice,
  Delivery,
  TotalAmount,
  TotalPrice,
} from './style';

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
  const onIncrease = () =>
    setAmount((amount) => (amount < stock ? amount + 1 : amount));
  const onDecrease = () => setAmount((amount) => (amount > 0 ? amount - 1 : 0));
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
              onClick={() => onCartClick(product_id, amount, amount !== 0)}
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
