import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import CartList from '../components/cart/CartList';
import CartHeader from '../components/cart/CartHeader';
import CartNothing from '../components/cart/CartNothing';
import CartNoaccess from '../components/cart/CartNoaccess';
import { API_URL } from '../util/api';

const CartPage = () => {
  const isSeller = localStorage.getItem('userType') === 'SELLER' ? true : false;
  const isLogined = localStorage.getItem('token');
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = async () => {
    fetch(`${API_URL}/cart/`, {
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
      .then((data) => {
        setCartItems(data.results);
        setIsLoading(false);
      })
      .catch((e) => alert(e.message));
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <Container>
      <Header />
      {!isLogined && <CartNoaccess type={'login'} />}
      {isLogined && isSeller && <CartNoaccess type={'seller'} />}
      {isLogined &&
        !isSeller &&
        (isLoading ? (
          <Loading />
        ) : (
          <CartContainer>
            <h2>장바구니</h2>
            <CartHeader />
            {cartItems.length === 0 ? (
              <CartNothing />
            ) : (
              <CartList cartItems={cartItems} getCartItems={getCartItems} />
            )}
          </CartContainer>
        ))}
      <Footer />
    </Container>
  );
};

export default CartPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

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
