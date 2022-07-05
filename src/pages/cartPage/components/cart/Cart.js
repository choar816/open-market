import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Loading from '/src/components/Loading';
import ErrorMessage from '/src/components/ErrorMessage';
import { CartList } from './components/cartList/';
import CartHeader from './components/CartHeader';
import CartNothing from './components/CartNothing';
import CartNoaccess from './components/CartNoaccess';
import { getCartDetails } from '../../utils/cartRequest';

const Cart = () => {
  const isSeller = localStorage.getItem('userType') === 'SELLER' ? true : false;
  const isLogined = localStorage.getItem('token');

  const { data, isLoading, error, refetch } = useQuery(
    'cartItems',
    getCartDetails,
  );

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
        <CartList cartItems={data} refetch={refetch} />
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
