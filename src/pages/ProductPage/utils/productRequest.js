import { API_URL } from "/src/utils/api";

export const getProducts = async () => {
  return fetch(`${API_URL}/products/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error('http 에러');
      return res.json();
    })
    .then((data) => data.results)
    .catch((e) => console.error(e));
};

export const addProductToCart = async (product_id, quantity, check) => {
  return fetch(`${API_URL}/cart/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      product_id,
      quantity,
      check,
    }),
  })
    .then((res) => res.json())
    .catch((e) => console.error(e));
};
