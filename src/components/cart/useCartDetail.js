import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { API_URL } from '../../util/api';

const getCartItems = async () => {
  return fetch(`${API_URL}/cart/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error('http 에러');
      return res.json();
    })
    .then((data) => data.results);
};

const getItemDetail = async (product_id) => {
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
    .catch((e) => alert(e.message));
};

const useCartDetail = () => {
  const {
    data: cartItems,
    isLoading,
    error,
    refetch,
  } = useQuery('cartItems', getCartItems);

  const [cartDetail, setCartDetail] = useState([]);
  const [isDetailLoading, setIsDetailLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && !error) {
      cartItems.forEach((item) => {
        const detail = getItemDetail(item.product_id);
        const _cartDetail = [...cartDetail];
        _cartDetail.push({ ...item, ...detail });
        setCartDetail(_cartDetail);
      });
    }
    setIsDetailLoading(false);
    console.log(cartDetail);
  }, [isLoading]);

  return { cartDetail, isLoading, isDetailLoading, error, refetch };
};

export default useCartDetail;
