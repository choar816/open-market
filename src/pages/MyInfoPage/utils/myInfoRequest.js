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

export const getOrderItemDetails = () => {
  return getOrder()
    .then((data) => data.map((item) => item.order_items))
    .then((idArrs) =>
      Promise.all(
        idArrs.map((idArr) =>
          Promise.all(idArr.map((id) => getProductDetail(id))),
        ),
      ),
    );
};

export const getOrderItemQuantities = async () => {
  const orderList = await getOrder();
  return orderList.map((list) => list.order_quantity);
};
