import { API_URL } from '/src/utils/api';

export const getSellerProducts = () => {
  return fetch(`${API_URL}/seller/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  }).then((res) => res.json());
};

export const uploadProduct = (formData) => {
  return fetch(`${API_URL}/products/`, {
    method: 'POST',
    headers: {
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
    body: formData,
  }).then((res) => res.json());
};
