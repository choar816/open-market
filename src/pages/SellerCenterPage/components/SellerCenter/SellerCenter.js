import React from 'react';
import styled from 'styled-components';
import SideBar from '/src/components/SideBar';
import Loading from '/src/components/Loading';
import ColorIconButton from '/src/components/button/ColorIconButton';
import { SideBarContent } from './components/SideBarContent';
import iconPlus from '/public/assets/icon-plus-circle.svg';
import { useQuery } from 'react-query';
import { API_URL } from '/src/utils/api';

export const getSellerProducts = () => {
  return fetch(`${API_URL}/seller/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('token')}`,
    },
  }).then((res) => res.json());
  // .then((data) => data.results);
};

const SellerCenter = () => {
  const { data: products, isLoading } = useQuery(
    'sellerProducts',
    getSellerProducts,
  );

  const onProductUploadClicked = () => {
    console.log('상품 업로드 clicked');
  };

  if (isLoading) return <Loading />;

  return (
    <Container>
      <Title>
        <h2>
          대시보드 <span>{products.results[0].seller_store}</span>
        </h2>
        <ColorIconButton
          iconSrc={iconPlus}
          children="상품 업로드"
          onClick={onProductUploadClicked}
        />
      </Title>
      <Content>
        <SideBar chosenIndex={1} productCount={products.count} />
        <SideBarContent products={products.results} />
      </Content>
    </Container>
  );
};

export default SellerCenter;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 30px;
`;

const Title = styled.section`
  display: flex;
  justify-content: space-between;
  h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    span {
      font-weight: 500;
      font-size: 36px;
      line-height: 44px;
      color: #21bf48;
    }
  }
`;

const Content = styled.section`
  display: flex;
  gap: 30px;
`;
