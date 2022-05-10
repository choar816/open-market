import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProductItem from './ProductItem';

function ProductList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const url = 'https://openmarket.weniv.co.kr';
    fetch(`${url}/products/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.results);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products.length === 0 && (
        <Error>
          <span>😭</span>
          <br />
          등록된 상품이 없어요!
        </Error>
      )}
      <Container>
        {products.map((item) => (
          <ProductItem
            key={item.product_id}
            imgSrc={item.image}
            desc={item.product_info}
            title={item.product_name}
            price={item.price}
            onClick={() => {
              navigate(`/product/${item.product_id}`);
            }}
          />
        ))}
      </Container>
    </>
  );
}

export default ProductList;

const Container = styled.section`
  padding: 80px 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 80px;
  grid-column-gap: 30px;
  @media screen and (max-width: 1024px) {
    padding: 50px 40px;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 60px;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
    grid-row-gap: 30px;
  }
  @media screen and (max-width: 576px) {
    padding: 10px;
    padding-top: 20px;
    padding-bottom: 60px;
    grid-row-gap: 20px;
    grid-column-gap: 10px;
  }
`;

const Error = styled.article`
  margin-top: 130px;
  margin-bottom: 50px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  span {
    font-size: 80px;
  }
`;
