import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import IconButton from './button/IconButton';
import ImgLogo from '../../public/assets/Logo-hodu.png';
import ImgCart from '../../public/assets/icon-shopping-cart.svg';
import ImgUser from '../../public/assets/icon-user.svg';
import ImgBag from '../../public/assets/icon-shopping-bag.svg';
import SellerButton from './button/SellerButton';

const Header = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const isSeller = localStorage.getItem('userType') === 'SELLER' ? true : false;

  const onMypageClick = () => {
    navigate('/mypage');
  };
  const onLogoutClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <Container>
      <SubContainer left>
        <Logo onClick={() => navigate('/')} src={ImgLogo} />
        <SearchBar />
      </SubContainer>
      <SubContainer right>
        {!isSeller && (
          <IconButton src={ImgCart} onClick={() => navigate('/cart')}>
            장바구니
          </IconButton>
        )}
        {localStorage.getItem('token') ? (
          <>
            <IconButton
              src={ImgUser}
              onClick={() => setShowMenu(!showMenu)}
              children="마이페이지"
            />
            {showMenu && (
              <MypageMenu isSeller={isSeller}>
                <li onClick={onMypageClick}>마이페이지</li>
                <li onClick={onLogoutClick}>로그아웃</li>
              </MypageMenu>
            )}
          </>
        ) : (
          <IconButton
            src={ImgUser}
            onClick={() => navigate('/login')}
            children="로그인"
          />
        )}
        {isSeller && <SellerButton iconSrc={ImgBag} children="판매자 센터" />}
      </SubContainer>
    </Container>
  );
};

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
  ${({ left }) =>
    left &&
    `
    width: 600px;
    @media screen and (max-width: 768px) {
      width: 350px;
    }
  `}

  ${({ right }) =>
    right &&
    `
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

const MypageMenu = styled.ul`
  position: absolute;
  top: 90px;
  right: ${({ isSeller }) => (isSeller ? '210' : '15')}px;
  width: 120px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;

  li {
    padding: 2px 5px;
    text-align: center;
    color: #767676;
    font-size: 16px;
    border: 1px solid transparent;
    border-radius: 5px;
    transition: all 0.5s;
    cursor: pointer;
    & + li {
      margin-top: 10px;
    }
    &:hover {
      color: #000;
      border: 1px solid #767676;
    }
  }

  @media screen and (max-width: 768px) {
    top: 75px;
    right: ${({ isSeller }) => (isSeller ? '141' : '12')}px;
    width: 110px;
    li {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 576px) {
    top: 66px;
    right: ${({ isSeller }) => (isSeller ? '100' : '10')}px;
    width: 95px;
  }
`;
