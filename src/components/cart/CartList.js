import React from 'react';
import CartItem from './CartItem';
import CartFooter from './CartFooter';

const CartList = ({ cartDetail, refetchCartItems }) => {
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
          item={item}
          refetch={refetchCartItems}
        />
      ))}
      <CartFooter priceProduct={priceProduct} priceShip={priceShip} />
    </>
  );
};

export default CartList;
