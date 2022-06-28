import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { API_URL } from '../../util/api';

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

const getCartDetail = async () => {
  const cartItems = [];

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
    .then((data) => {
      cartItems.push(...data.results);
      return data.results;
    })
    .then((items) =>
      Promise.all(items.map((item) => getItemDetail(item.product_id))),
    )
    .then((details) => {
      return cartItems.map((item, idx) => {
        return { ...item, ...details[idx] };
      });
    });
};

export default getCartDetail;
