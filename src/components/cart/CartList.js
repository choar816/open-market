import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { API_URL } from '../../util/api';

const CartList = ({ cartItems, getCartItems }) => {
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

  // const getItemInfo = async (product_id) => {
  //   fetch(`${API_URL}/products/${product_id}/`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((res) => {
  //       // if (!res.ok) throw new Error('http 에러');
  //       return res.json();
  //     })
  //     .catch((e) => alert(e.message));
  // };

  // const [cartItemDetails, setCartItemDetails] = useState(
  //   cartItems.map((item) => getItemInfo(item.product_id))
  // );

  const [checkedIds, setCheckedIds] = useState(
    cartItems.map((item) => item.product_id),
  );

  const getProductId = (id) => {
    return parseInt(id.slice(id.indexOf('_') + 1), 10);
  };

  const toggleChecked = (e) => {
    const productId = getProductId(e.target.id);

    let newArray;
    if (checkedIds.includes(productId))
      newArray = checkedIds.filter((item) => item !== productId);
    else newArray = [...checkedIds, productId];

    setCheckedIds(newArray);
  };

  useEffect(() => {
    // for (const cartItem of cartItems) getItemInfo(cartItem.product_id);

    // console.log(cartItemDetails);
  }, []);

  return (
    <>
      {cartItems.map((item) => (
        <CartItem
          key={item.cart_item_id}
          cart_item_id={item.cart_item_id}
          product_id={item.product_id}
          quantity={item.quantity}
          is_active={item.is_active}
          checked={checkedIds.includes(item.product_id)}
          toggleChecked={toggleChecked}
          onRemove={() => removeCartItem(item.cart_item_id)}
        />
      ))}
      <CartFooter checkedIds={checkedIds} cartItems={cartItems} />
    </>
  );
};

export default CartList;
