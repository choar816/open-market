import React from 'react';
import styled from 'styled-components';
import ColorButton from '/src/components/button/ColorButton';
import IconDelete from '/public/assets/icon-delete.svg';
import { useNavigate } from 'react-router-dom';

const CartModal = ({ setIsOn, content }) => {
  const navigate = useNavigate();

  return (
    <>
      <Background onClick={() => setIsOn(false)} />
      <ModalContainer>
        <Content>{content}</Content>
        <ButtonContainer>
          <DeleteIcon src={IconDelete} onClick={() => setIsOn(false)} />
          <ColorButton size="S" onClick={() => setIsOn(false)} color="white">
            쇼핑 계속하기
          </ColorButton>
          <ColorButton size="S" onClick={() => navigate('/cart')}>
            장바구니로 이동
          </ColorButton>
        </ButtonContainer>
      </ModalContainer>
    </>
  );
};

export default CartModal;

const Background = styled.section`
  display: block;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.1);
`;

const ModalContainer = styled.section`
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 60;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 40px;
  padding-left: 70px;
  padding-right: 70px;

  background-color: #fff;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
`;

const Content = styled.p`
  text-align: center;
  width: 300px;
`;

const ButtonContainer = styled.article`
  margin-top: 30px;
  display: flex;
  gap: 10px;
`;

const DeleteIcon = styled.img`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 22px;
  height: 22px;
  cursor: pointer;
`;
