import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductSummary from './ProductSummary';
import ProductDetail from './ProductDetail';
import { useParams } from 'react-router-dom';

function ProductInfo() {
  const params = useParams();
  const [productData, setProductData] = useState(null);

  const getProductInfo = async () => {
    const url = 'https://openmarket.weniv.co.kr';
    fetch(`${url}/products/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setProductData(data));
  };

  useEffect(() => {
    getProductInfo();
  }, [params.id]);

  return (
    <Container>
      {!productData || productData.detail === '찾을 수 없습니다.' ? (
        <p>해당 상품은 존재하지 않습니다.</p>
      ) : (
        <>
          <ProductIntro>
            <img src={productData.image} />
            <ProductSummary productData={productData} />
          </ProductIntro>
          <ProductDetail />
        </>
      )}
    </Container>
  );
}

export default ProductInfo;

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

  img {
    width: 600px;
    height: 600px;
    object-fit: cover;
  }
`;
