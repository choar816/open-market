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