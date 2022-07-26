import React from 'react';
import { useQuery } from 'react-query';
import { OrderList } from '../OrderPage/components/Order/components/OrderList';
import { OrderItem } from '../OrderPage/components/Order/components/OrderList/components/OrderItem';
import {
  getOrderItemDetails,
  getOrderItemQuantities,
} from './utils/myInfoRequest';
import { getProductDetail } from '/src/utils/product';

const MyInfoPage = () => {
  const {
    data: list,
    isLoading: isLoadingList,
    error: errorList,
  } = useQuery('orderList', getOrderItemDetails);
  const {
    data: quantities,
    isLoading: isLoadingQuantities,
    error: errorQuantities,
  } = useQuery('orderQuantities', getOrderItemQuantities);
  console.log(quantities);

  if (isLoadingList) return <div>Loading</div>;

  return (
    <div>
      <h2>주문목록</h2>
      {list.map((items, idx1) =>
        items.map((item, idx2) => {
          item.quantity = quantities[idx1][idx2];
          return <OrderItem {...item} />;
        }),
      )}
    </div>
  );
};

export default MyInfoPage;
