import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Loading from '../Loading';
import CartList from './CartList';
import CartHeader from './CartHeader';
import CartNothing from './CartNothing';
import CartNoaccess from './CartNoaccess';
import getCartDetail from './getCartDetail';
import ErrorMessage from '../ErrorMessage';

const Cart = () => {
  const isSeller = localStorage.getItem('userType') === 'SELLER' ? true : false;
  const isLogined = localStorage.getItem('token');

  const { data, isLoading, error, refetch } = useQuery('cartItems', getCartDetail);

  if (!isLogined) return <CartNoaccess type={'login'} />;
  if (isSeller) return <CartNoaccess type={'seller'} />;
  if (isLoading) return <Loading />;
  if (error)
    return <ErrorMessage emoji="😭" message={`에러 발생: ${error.message}`} />;

  return (
    <CartContainer>
      <h2>장바구니</h2>
      <CartHeader />
      {data.length === 0 ? (
        <CartNothing />
      ) : (
        <CartList cartDetail={data} refetchCartItems={refetch} />
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
