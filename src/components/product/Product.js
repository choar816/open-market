import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import ProductInfo from './ProductInfo';
import ProductDetail from './ProductDetail';
import Loading from '../Loading';
import ErrorMessage from '../ErrorMessage';
import { API_URL } from '../../util/api';

const getProductInfo = async (id) => {
  return fetch(`${API_URL}/products/${id}/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => {
    // if (!res.ok) throw new Error('http error');
    return res.json();
  });
};

const Product = () => {
  const params = useParams();
  const { data, isLoading, error } = useQuery(['productInfo', params.id], () =>
    getProductInfo(params.id),
  );

  if (isLoading) return <Loading />;
  if (data?.detail === '찾을 수 없습니다.')
    return <ErrorMessage emoji="😶‍🌫️" message="해당 상품은 존재하지 않습니다." />;
  if (error)
    return <ErrorMessage emoji="😭" message={`에러 발생: ${error.message}`} />;

  return (
    <Container>
      <ProductIntro>
        <img src={data.image} />
        <ProductInfo id={params.id} productData={data} />
      </ProductIntro>
      <ProductDetail />
    </Container>
  );
};

export default Product;

const Container = styled.main`
  width: 1280px;
  padding-top: 80px;
  padding-bottom: 80px;
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 140px;
`;

const ProductIntro = styled.section`
  display: flex;
  justify-content: center;
  gap: 50px;

  & > img {
    width: 600px;
    height: 600px;
    object-fit: cover;
  }
`;
