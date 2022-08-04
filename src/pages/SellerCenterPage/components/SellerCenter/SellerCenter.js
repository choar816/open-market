import React, { useState } from 'react';
import styled from 'styled-components';
import SideBar from '/src/components/SideBar';
import Loading from '/src/components/Loading';
import ColorIconButton from '/src/components/button/ColorIconButton';
import { MenuInPreparation, SellerProducts } from './components/SideBarContent';
import iconPlus from '/public/assets/icon-plus-circle.svg';
import { useQuery } from 'react-query';
import { getSellerProducts } from '../../utils/sellerRequest';

const SellerCenter = () => {
  const { data, isLoading } = useQuery('sellerProducts', getSellerProducts);
  const [chosenIndex, setChosenIndex] = useState(1);

  const onProductUploadClicked = () => {
    console.log('상품 업로드 clicked');
  };

  const onMenuClick = (e) => {
    setChosenIndex(Number(e.target.dataset.index));
  };

  const getSideBarContent = (index) => {
    switch (index) {
      case 1:
        return <SellerProducts products={data.results} />;
      case 2:
      case 3:
      case 4:
      case 5:
        return <MenuInPreparation />;
    }
  };

  if (isLoading) return <Loading />;

  return (
    <Container>
      <Title>
        <h2>
          대시보드 <span>{data.results[0].seller_store}</span>
        </h2>
        {chosenIndex === 1 && (
          <ColorIconButton
            children="상품 업로드"
            iconSrc={iconPlus}
            onClick={onProductUploadClicked}
          />
        )}
      </Title>
      <Content>
        <SideBar
          chosenIndex={chosenIndex}
          onMenuClick={onMenuClick}
          productCount={data.count}
        />
        {getSideBarContent(chosenIndex)}
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
  height: 50px;

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
