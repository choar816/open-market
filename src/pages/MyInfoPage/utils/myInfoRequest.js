import { API_URL } from '/src/utils/api';
import { getProductDetail } from '/src/utils/product';

export const getOrder = () => {
  return fetch(`${API_URL}/order/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => res.json())
    .then((data) => data.results);
};

// export const getOrderNew = async () => {
//   const res = await fetch(`${API_URL}/order/`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `JWT ${localStorage.getItem('token')}`,
//     },
//   });
//   const data = await res.json();
//   return data.results;
// };

export const getOrderDetails = () => {
  return getOrder()
    .then((order) => order.map((item) => item.order_items))
    .then((idLists) =>
      Promise.all(
        idLists.map((idList) =>
          Promise.all(idList.map((id) => getProductDetail(id))),
        ),
      ),
    );
};

export const getOrderQuantities = async () => {
  const orders = await getOrder();
  return orders.map((order) => order.order_quantity);
};
