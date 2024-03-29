import React from 'react';
import CartItem from './CartItem';
import CartPrice from './CartPrice';

const CartList = ({
  cartItems,
  refetch,
  onClickCartOrder,
  onClickCartOrderOne,
}) => {
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
          key={`cart_item_${item.cart_item_id}`}
          item={item}
          refetch={refetch}
          onClickCartOrderOne={onClickCartOrderOne}
        />
      ))}
      <CartPrice
        priceProduct={priceProduct}
        priceShip={priceShip}
        onClickCartOrder={onClickCartOrder}
      />
    </>
  );
};

export default CartList;
