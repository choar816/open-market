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
          <span>βππ»β</span>
          <br />
          νλ§€μλ μ₯λ°κ΅¬λ μ κ·Όμ΄ λΆκ°λ₯ν©λλ€.
        </>
      )}
      {type === 'login' && (
        <>
          <span>ππΎππΌββοΈππ½ββοΈ</span>
          <br />
          μ₯λ°κ΅¬λλ λ‘κ·ΈμΈ ν μ΄μ© κ°λ₯ν©λλ€.
          <br />
          <ColorButton width={"300px"} onClick={() => navigate('/login')}>λ‘κ·ΈμΈνλ¬ κ°κΈ°</ColorButton>
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
