import { API_URL } from "/src/utils/api";

export const getProductDetail = async (product_id) => {
  return fetch(`${API_URL}/products/${product_id}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json());
};

