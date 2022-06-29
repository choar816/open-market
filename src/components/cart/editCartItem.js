import { API_URL } from '../../util/api';

const updateCartItem = async (
  cart_item_id,
  product_id,
  quantity,
  is_active,
) => {
  return fetch(`${API_URL}/cart/${cart_item_id}/`, {
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
      return res.json();
    })
    .catch((e) => console.error(e));
};

const toggleAll = (cartItems, isChecking, refetch) => {
  Promise.all(
    cartItems.map(({ cart_item_id, product_id, quantity }) => {
      return fetch(`${API_URL}/cart/${cart_item_id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          product_id,
          quantity,
          is_active: isChecking,
        }),
      })
        .then((res) => {
          // if (!res.ok) throw new Error('http 에러');
          return res.json();
        })
        .catch((e) => console.error(e));
    }),
  ).then(refetch);
};

const removeCartItem = async (cart_item_id) => {
  return fetch(`${API_URL}/cart/${cart_item_id}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error('http 에러');
      // refetchCartItems();
    })
    .catch((e) => console.error(e.message));
};

export { updateCartItem, toggleAll, removeCartItem };
