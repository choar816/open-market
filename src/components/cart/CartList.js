import React from 'react';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { API_URL } from '../../util/api';

const CartList = ({cartItems, getCartItems}) => {
  const removeCartItem = async (cart_item_id) => {
    fetch(`${API_URL}/cart/${cart_item_id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('http 에러');
        getCartItems();
      })
      .catch((e) => alert(e.message));
  };

  return (
    <>
      {cartItems.map((item) => (
        <CartItem
          key={item.cart_item_id}
          cart_item_id={item.cart_item_id}
          product_id={item.product_id}
          quantity={item.quantity}
          is_active={item.is_active}
          onRemove={() => removeCartItem(item.cart_item_id)}
        />
      ))}
      <CartFooter />
    </>
  );
};

export default CartList;
