import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductInfo from './ProductInfo';
import ProductDetail from './ProductDetail';
import ErrorMessage from '../ErrorMessage';
import Loading from '../Loading';
import { API_URL } from '../../util/api';

const ProductContent = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState(null);

  const getProductInfo = async () => {
    fetch(`${API_URL}/products/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        // if (!res.ok) throw new Error('http 에러');
        return res.json();
      })
      .then((data) => {
        setProductData(data);
        setLoading(false);
      })
      .catch((e) => alert(e.message));
  };

  useEffect(() => {
    getProductInfo();
  }, [params.id]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : !productData || productData.detail === '찾을 수 없습니다.' ? (
        <ErrorMessage emoji="😶‍🌫️" message="해당 상품은 존재하지 않습니다." />
      ) : (
        <>
          <ProductIntro>
            <img src={productData.image} />
            <ProductInfo id={params.id} productData={productData} />
          </ProductIntro>
          <ProductDetail />
        </>
      )}
    </Container>
  );
};

export default ProductContent;

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
