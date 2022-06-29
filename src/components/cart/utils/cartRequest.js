import { API_URL } from '../../../util/api';
import { getProductDetail } from '../../../util/product';

export const sendRequestWithCallback = async (
  cart_item_id,
  requestBody,
  callback,
) => {
  await fetch(`${API_URL}/cart/${cart_item_id}/`, requestBody).catch((e) =>
    console.error(e),
  );
  callback();
};

export const sendRequest = (cart_item_id, requestBody) => {
  return fetch(`${API_URL}/cart/${cart_item_id}/`, requestBody).catch((e) =>
    console.error(e),
  );
};

export const updateBody = (product_id, quantity, is_active) => {
  return {
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
  };
};

export const removeBody = () => {
  return {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  };
};

export const getCartDetails = async () => {
  const cartItems = [];

  return fetch(`${API_URL}/cart/`, {
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
      cartItems.push(...data.results);
      return data.results;
    })
    .then((items) =>
      Promise.all(items.map((item) => getProductDetail(item.product_id))),
    )
    .then((details) => {
      return cartItems.map((item, idx) => {
        return { ...item, ...details[idx] };
      });
    })
    .catch((e) => console.error(e));
};

// const updateCartItem = async (
//   cart_item_id,
//   product_id,
//   quantity,
//   is_active,
// ) => {
//   return fetch(`${API_URL}/cart/${cart_item_id}/`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `JWT ${localStorage.getItem('token')}`,
//     },
//     body: JSON.stringify({
//       product_id,
//       quantity,
//       is_active,
//     }),
//   }).catch((e) => console.error(e));
// };

// const toggleAll = (cartItems, isChecking, refetch) => {
//   Promise.all(
//     cartItems.map(({ cart_item_id, product_id, quantity }) => {
//       return fetch(`${API_URL}/cart/${cart_item_id}/`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `JWT ${localStorage.getItem('token')}`,
//         },
//         body: JSON.stringify({
//           product_id,
//           quantity,
//           is_active: isChecking,
//         }),
//       })
//         .then((res) => {
//           // if (!res.ok) throw new Error('http 에러');
//           return res.json();
//         })
//         .catch((e) => console.error(e));
//     }),
//   ).then(refetch);
// };
