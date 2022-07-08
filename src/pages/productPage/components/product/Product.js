import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { ProductInfo } from './components/productInfo';
import { ProductTabs } from './components/productTabs';
import Loading from '/src/components/Loading';
import ErrorMessage from '/src/components/ErrorMessage';
import { getProductDetail } from '/src/utils/product';

const Product = () => {
  const params = useParams();
  const { data, isLoading, error } = useQuery(['productInfo', params.id], () =>
    getProductDetail(params.id),
  );

  if (isLoading) return <Loading />;
  if (data.detail === '찾을 수 없습니다.')
    return <ErrorMessage emoji="😶‍🌫️" message="해당 상품은 존재하지 않습니다." />;
  if (error)
    return <ErrorMessage emoji="😭" message={`에러 발생: ${error.message}`} />;

  return (
    <Container>
      <ContainerUpper>
        <img src={data.image} />
        <ProductInfo id={params.id} data={data} />
      </ContainerUpper>
      <ProductTabs />
    </Container>
  );
};

export default Product;

const Container = styled.main`
  width: 100vw;
  padding-top: 80px;
  padding-bottom: 80px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 140px;

  @media screen and (max-width: 1400px) {
    gap: 70px;
  }
`;

const ContainerUpper = styled.section`
  display: flex;
  justify-content: center;
  gap: 50px;

  & > img {
    width: 600px;
    height: 600px;
    object-fit: cover;
  }

  @media screen and (max-width: 1400px) {
    & > img {
      width: 500px;
      height: 500px;
    }
  }
  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
`;
