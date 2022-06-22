import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Loading from '../Loading';
import CartList from './CartList';
import CartHeader from './CartHeader';
import CartNothing from './CartNothing';
import CartNoaccess from './CartNoaccess';
import { API_URL } from '../../util/api';

const getCartItems = async () => {
  return fetch(`${API_URL}/cart/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error('http 에러');
      return res.json();
    })
    .then((data) => data.results);
};

const Cart = () => {
  const isSeller = localStorage.getItem('userType') === 'SELLER' ? true : false;
  const isLogined = localStorage.getItem('token');

  const {
    data: cartItems,
    isLoading,
    error,
    refetch
  } = useQuery('cartItems', getCartItems);

  if (!isLogined || isSeller)
    return (
      <>
        {!isLogined && <CartNoaccess type={'login'} />}
        {isSeller && <CartNoaccess type={'seller'} />}
      </>
    );

  if (isLoading) return <Loading />;
  if (error)
    return <ErrorMessage emoji="😭" message={`에러 발생: ${error.message}`} />;

  return (
    <CartContainer>
      <h2>장바구니</h2>
      <CartHeader />
      {cartItems.length === 0 ? (
        <CartNothing />
      ) : (
        <CartList cartItems={cartItems} getCartItems={getCartItems} refetchCartItems={refetch} />
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
