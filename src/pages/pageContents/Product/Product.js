import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { ProductInfo } from './components/ProductInfo';
import { ProductTabs } from './components/ProductTabs';
import Loading from '/src/components/Loading';
import { PageError } from '/src/components/PageError';
import { getProductDetail } from '/src/utils/product';
import { Container, ContainerUpper } from './style';

const Product = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  const params = useParams();
  const { data, isLoading, error } = useQuery(['productInfo', params.id], () =>
    getProductDetail(params.id),
  );

  if (isLoading) return <Loading />;
  if (data.detail === '찾을 수 없습니다.')
    return <PageError emoji="😶‍🌫️" message="해당 상품은 존재하지 않습니다." />;
  if (error)
    return <PageError emoji="😭" message={`에러 발생: ${error.message}`} />;

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
