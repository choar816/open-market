import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartFooter from '../components/cart/CartFooter';
import CartHeader from '../components/cart/CartHeader';
import CartItem from '../components/cart/CartItem';
import CartNothing from '../components/cart/CartNothing';
import CartNoaccess from '../components/cart/CartNoaccess';
import Loading from '../components/Loading';

const url = 'https://openmarket.weniv.co.kr';

const CartPage = () => {
  const isSeller = localStorage.getItem('userType') === 'SELLER' ? true : false;
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = async () => {
    fetch(`${url}/cart/`, {
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
        setLoading(false);
      })
      .catch((e) => alert(e.message));
  };

  useEffect(() => {
    getCartItems();
  }, []);

  const removeCartItem = async (cart_item_id) => {
    fetch(`${url}/cart/${cart_item_id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('http 에러');
        console.log(res);
        getCartItems();
      })
      .catch((e) => alert(e.message));
  };

  return (
    <Container>
      <Header />
      {isSeller && <CartNoaccess />}

      {!isSeller &&
        (loading ? (
          <Loading />
        ) : (
          <CartContainer>
            <h2>장바구니</h2>
            <CartHeader />
            {cartItems.length === 0 ? (
              <CartNothing />
            ) : (
              <>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.cart_item_id}
                    product_id={item.product_id}
                    quantity={item.quantity}
                    onRemove={() => removeCartItem(item.cart_item_id)}
                  />
                ))}
                <CartFooter />
              </>
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
