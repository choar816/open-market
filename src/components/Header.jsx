import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import IconButton from './IconButton';
import ImgLogo from '../../public/assets/Logo-hodu.png';
import ImgCart from '../../public/assets/icon-shopping-cart.svg';
import ImgUser from '../../public/assets/icon-user.svg';
import ImgBag from '../../public/assets/icon-shopping-bag.svg';
import ColorIconButton from './ColorIconButton';
import { Link } from 'react-router-dom';

function Header({ buyer }) {
  return (
    <Container>
      <SubContainer left>
        <Logo src={ImgLogo} />
        <SearchBar />
      </SubContainer>
      <SubContainer right>
        {buyer || <IconButton src={ImgCart}>장바구니</IconButton>}
        <IconButton src={ImgUser}>마이페이지</IconButton>
        {buyer && <ColorIconButton iconSrc={ImgBag}>판매자 센터</ColorIconButton>}
      </SubContainer>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  padding: 22px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;

  @media screen and (max-width: 768px) {
    padding: 10px 22px;
  }
  @media screen and (max-width: 576px) {
    padding: 6px 10px;
  }
`;

const SubContainer = styled.article`
  ${({ left }) => left && `
    width: 600px;
    @media screen and (max-width: 768px) {
      width: 350px;
    }
  `}

  ${({ right }) => right && `
    flex-shrink: 0;
  `}

  display: flex;
  justify-content: space-between;
  align-items: center;
  article + article {
    margin-left: 20px;
  }
  @media screen and (max-width: 768px) {
    article + article {
      margin-left: 10px;
    }
  }
`;

const Logo = styled.img`
  width: 124px;
  object-fit: contain;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 80px;
  }
`;