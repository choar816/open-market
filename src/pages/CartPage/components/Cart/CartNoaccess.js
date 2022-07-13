import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ColorButton from '/src/components/button/ColorButton';

// to do : chagne to switch case
const CartNoaccess = ({ type }) => {
  const navigate = useNavigate();

  return (
    <Container>
      {type === 'seller' && (
        <>
          <span>⛔🙅🏻⛔</span>
          <br />
          판매자는 장바구니 접근이 불가능합니다.
        </>
      )}
      {type === 'login' && (
        <>
          <span>💁🏾💁🏼‍♂️💁🏽‍♀️</span>
          <br />
          장바구니는 로그인 후 이용 가능합니다.
          <br />
          <ColorButton width={"300px"} onClick={() => navigate('/login')}>로그인하러 가기</ColorButton>
        </>
      )}
    </Container>
  );
};

export default CartNoaccess;

const Container = styled.article`
  margin: 150px auto 150px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  span {
    font-size: 80px;
  }
  button {
    margin-top: 20px;
  }
`;
