import React from 'react';
import styled from 'styled-components';
import SideBar from '/src/components/SideBar';
import { SideBarContent } from './components/SideBarContent';
import iconPlus from '/public/assets/icon-plus-circle.svg';
import ColorIconButton from '/src/components/button/ColorIconButton';

const SellerCenter = () => {
  const seller_name = 'asdf';
  const onProductUploadClicked = () => {
    console.log('상품 업로드 clicked');
  };

  return (
    <Container>
      <Title>
        <h2>
          대시보드 <span>{seller_name}</span>
        </h2>
        <ColorIconButton
          iconSrc={iconPlus}
          children="상품 업로드"
          onClick={onProductUploadClicked}
        />
      </Title>
      <Content>
        <SideBar />
        <SideBarContent />
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
