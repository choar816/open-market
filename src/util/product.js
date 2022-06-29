import { API_URL } from "./api";

export const getProductDetail = async (product_id) => {
  return fetch(`${API_URL}/products/${product_id}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      // if (!res.ok) throw new Error('http 에러');
      return res.json();
    })
    .catch((e) => console.error(e));
};

