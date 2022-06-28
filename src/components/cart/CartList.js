import React from 'react';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { API_URL } from '../../util/api';

const CartList = ({ cartDetail, refetchCartItems }) => {
  const updateCartItem = async (
    cart_item_id,
    product_id,
    quantity,
    is_active,
  ) => {
    fetch(`${API_URL}/cart/${cart_item_id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        product_id,
        quantity,
        is_active,
      }),
    })
      .then((res) => {
        // if (!res.ok) throw new Error('http 에러');
        refetchCartItems();
        return res.json();
      })
      .catch((e) => alert(e.message));
  };

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
        refetchCartItems();
      })
      .catch((e) => alert(e.message));
  };

  const priceProduct = cartDetail.reduce((acc, cur) => {
    if (!cur.is_active) return acc;
    return acc + cur.price * cur.quantity;
  }, 0);

  const priceShip = cartDetail.reduce((acc, cur) => {
    if (!cur.is_active) return acc;
    return acc + cur.shipping_fee;
  }, 0);

  return (
    <>
      {cartDetail.map((item) => (
        <CartItem
          key={item.cart_item_id}
          cart_item_id={item.cart_item_id}
          product_id={item.product_id}
          quantity={item.quantity}
          is_active={item.is_active}
          product_name={item.product_name}
          image={item.image}
          price={item.price}
          shipping_method={item.shipping_method}
          shipping_fee={item.shipping_fee}
          stock={item.stock}
          seller={item.seller_store}
          toggleCheck={() => {
            updateCartItem(
              item.cart_item_id,
              item.product_id,
              item.quantity,
              !item.is_active,
            );
          }}
          onRemove={removeCartItem}
          updateCartItem={updateCartItem}
        />
      ))}
      <CartFooter priceProduct={priceProduct} priceShip={priceShip} />
    </>
  );
};

export default CartList;
