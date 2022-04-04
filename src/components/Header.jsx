import React from 'react';
import styled from 'styled-components';
import IconButton from './IconButton';
import Logo from './Logo';
import SearchBar from './SearchBar';

function Header() {
  return (
    <Container>
      <section>
        <Logo />
        <SearchBar />
      </section>
      <section>
        <IconButton src="assets/icon-shopping-cart.svg" title="장바구니" />
        <IconButton src="assets/icon-user.svg" title="로그인" />
      </section>
    </Container>
  );
}

export default Header;

const Container = styled.header`
  padding: 22px 50px;
  width: 100%;
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
