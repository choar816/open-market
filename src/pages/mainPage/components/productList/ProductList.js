import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import ProductItem from './ProductItem';
import ErrorMessage from '/src/components/ErrorMessage';
import Loading from '/src/components/Loading';
import { getProducts } from '../../utils/productsRequest';

const ProductList = () => {
  const navigate = useNavigate();
  const { data: products, isLoading, error } = useQuery('products', getProducts);

  if (isLoading) return <Loading />;
  if (error)
    return <ErrorMessage emoji="😭" message={`에러 발생: ${error.message}`} />;

  return (
    <>
      {products.length === 0 ? (
        <ErrorMessage emoji="😭" message="등록된 상품이 없어요!" />
      ) : (
        <Container>
          {products.map((item) => (
            <ProductItem
              key={item.product_id}
              item={item}
              onClick={() => {
                navigate(`/product/${item.product_id}`);
              }}
            />
          ))}
        </Container>
      )}
    </>
  );
};

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
