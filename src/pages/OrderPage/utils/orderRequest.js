import { API_URL } from '/src/utils/api';

export const sendRequest = (requestBody) => {
  return fetch(`${API_URL}/order/`, requestBody).catch((e) => console.error(e));
};

export const cartOrderBody = ({ total_price, orderFormData }) => {
  const {
    receiver,
    receiver_phone_number,
    address,
    address_message,
    payment_method,
  } = orderFormData;

  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      total_price,
      order_kind: 'cart_order',
      receiver,
      receiver_phone_number,
      address,
      address_message,
      payment_method,
    }),
  };
};
