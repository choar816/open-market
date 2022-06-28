import React from 'react';
import CartItem from './CartItem';
import CartFooter from './CartFooter';

const CartList = ({ cartItems, refetch }) => {
  const priceProduct = cartItems.reduce((acc, cur) => {
    if (!cur.is_active) return acc;
    return acc + cur.price * cur.quantity;
  }, 0);

  const priceShip = cartItems.reduce((acc, cur) => {
    if (!cur.is_active) return acc;
    return acc + cur.shipping_fee;
  }, 0);

  return (
    <>
      {cartItems.map((item) => (
        <CartItem
          key={item.cart_item_id}
          item={item}
          refetch={refetch}
        />
      ))}
      <CartFooter priceProduct={priceProduct} priceShip={priceShip} />
    </>
  );
};

export default CartList;
