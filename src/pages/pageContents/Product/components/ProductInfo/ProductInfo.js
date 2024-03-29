import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ColorButton from '/src/components/button/ColorButton';
import AmountPicker from '/src/components/AmountPicker';
import CartModal from './CartModal';
import { addProductToCart } from '../../utils/productRequest';
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
    image,
  } = data;

  const isLogined = localStorage.getItem('token');
  const userType = localStorage.getItem('userType');
  const navigate = useNavigate();

  const [amount, setAmount] = useState(0);
  const [modalOn, setModalOn] = useState(false);
  const [modalContent, setModalContent] = useState('content');
  const [canClickOrder, setCanClickOrder] = useState(
    userType !== 'SELLER' && amount !== 0,
  );
  useEffect(() => {
    setCanClickOrder(userType !== 'SELLER' && amount !== 0);
  }, [amount]);
  const onIncrease = () =>
    setAmount((amount) => (amount < stock ? amount + 1 : amount));
  const onDecrease = () => setAmount((amount) => (amount > 0 ? amount - 1 : 0));
  useEffect(() => setAmount(0), [id]);

  const setModal = (content, on) => {
    setModalContent(content);
    setModalOn(on);
  };

  const onClickCart = async (product_id, quantity, check) => {
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

  const onClickOrder = () => {
    const itemToOrder = {
      image,
      seller_store,
      product_name,
      shipping_fee,
      price,
      quantity: amount,
    };
    navigate('/order', {
      state: {
        data: [itemToOrder],
        order_kind: 'direct_order',
        extra_body: {
          product_id,
          quantity: amount,
        },
      },
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
              {shipping_method === 'PARCEL' ? '직접' : '택배'}배송 /{' '}
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
            <ColorButton
              color={canClickOrder ? 'green' : 'gray'}
              onClick={canClickOrder ? onClickOrder: () => {}}
            >
              바로 구매
            </ColorButton>
            <ColorButton
              color={'gray'}
              width={'200px'}
              onClick={() => onClickCart(product_id, amount, amount !== 0)}
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
