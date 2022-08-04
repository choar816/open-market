import { API_URL } from '/src/utils/api';

export const sendRequest = (requestBody) => {
  return fetch(`${API_URL}/order/`, requestBody).catch((e) => console.error(e));
};

export const cartOrderBody = (
  total_price,
  order_kind,
  extra_body,
  orderFormData,
) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify({
      total_price,
      order_kind,
      ...extra_body,
      ...orderFormData,
    }),
  };
};
