import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import SideBar from '/src/components/SideBar';
import Loading from '/src/components/Loading';
import ColorIconButton from '/src/components/button/ColorIconButton';
import { SellerProducts } from './components/SellerProducts';
import { MenuInPreparation } from './components/MenuInPreparation';
import { getSellerProducts } from '../../utils/sellerRequest';
import iconPlus from '/public/assets/icon-plus-circle.svg';
import { Container, Title, Content } from './style';

export const Dashboard = () => {
  const { data, isLoading } = useQuery('sellerProducts', getSellerProducts);
  const navigate = useNavigate();
  const [chosenIndex, setChosenIndex] = useState(1);

  const onProductUploadClicked = () => {
    navigate('upload_product');
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
