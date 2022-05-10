import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductSummary from './ProductSummary';
import ProductDetail from './ProductDetail';

function ProductInfo({ productId }) {
  const [productData, setProductData] = useState(null);

  const getProductInfo = async () => {
    const url = 'https://openmarket.weniv.co.kr';
    fetch(`${url}/products/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => data.results)
      .then((data) => data.filter((it) => it.product_id.toString(10) === productId))
      .then((data) => setProductData(data[0]));
  };

  useEffect(() => {
    getProductInfo();
  }, []);

  return (
    <Container>
      {productData === null ? (
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
