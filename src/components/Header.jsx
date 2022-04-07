import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import SearchBar from './SearchBar';
import IconButton from './IconButton';
import ImgCart from '../../public/assets/icon-shopping-cart.svg';
import ImgUser from '../../public/assets/icon-user.svg';
import ImgBag from '../../public/assets/icon-shopping-bag.svg';
import ColorButton from './ColorButton';

function Header({ buyer }) {
  console.log(buyer);
  return (
    <Container>
      <section>
        <Logo />
        <SearchBar />
      </section>
      <section>
        {buyer || <IconButton src={ImgCart}>장바구니</IconButton>}
        <IconButton src={ImgUser}>마이페이지</IconButton>
        {buyer && <ColorButton src={ImgBag} size="icon">판매자 센터</ColorButton>}
      </section>
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

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    article + article {
      margin-left: 20px;
    }
  }
`;
