import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Loading from '/src/components/Loading';
import ErrorMessage from '/src/components/ErrorMessage';
import CartNothing from './CartNothing';
import CartNoaccess from './CartNoaccess';
import { CartHeader } from './components/CartHeader';
import { CartList } from './components/CartList';
import { getCartDetails } from './utils/cartRequest';

const Cart = () => {
  const navigate = useNavigate();

  const isSeller = localStorage.getItem('userType') === 'SELLER' ? true : false;
  const isLogined = localStorage.getItem('token');

  const { data, isLoading, error, refetch } = useQuery(
    'cartItems',
    getCartDetails,
  );

  const onClickCartOrder = () => {
    navigate('/order', {
      state: {
        data: data.filter((item) => item.is_active === true),
        order_kind: 'cart_order',
        extra_body: {},
      },
    });
  };
  const onClickCartOrderOne = (cart_item_id, product_id, quantity) => {
    navigate('/order', {
      state: {
        data: data.filter((item) => item.cart_item_id === cart_item_id),
        order_kind: 'cart_one_order',
        extra_body: {
          product_id,
          quantity,
        },
      },
    });
  };

  if (!isLogined) return <CartNoaccess type={'login'} />;
  if (isSeller) return <CartNoaccess type={'seller'} />;
  if (isLoading) return <Loading />;
  if (error)
    return <ErrorMessage emoji="😭" message={`에러 발생: ${error.message}`} />;

  return (
    <CartContainer>
      <h2>장바구니</h2>
      <CartHeader cartItems={data} refetch={refetch} />
      {data.length === 0 ? (
        <CartNothing />
      ) : (
        <CartList
          cartItems={data}
          refetch={refetch}
          onClickCartOrder={onClickCartOrder}
          onClickCartOrderOne={onClickCartOrderOne}
        />
      )}
    </CartContainer>
  );
};

export default Cart;

const CartContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;

  & > h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
  }
`;
