import React from 'react';
import styled from 'styled-components';
import ColorButton from '/src/components/button/ColorButton';

const TermModal = ({ setIsOn, title, content }) => {
  return (
    <>
      <Background onClick={() => setIsOn(false)} />
      <ModalContainer>
        <Title>{title}</Title>
        <TermContainer>{content}</TermContainer>
        <ColorButton size="M" onClick={() => setIsOn(false)}>
          확인
        </ColorButton>
      </ModalContainer>
    </>
  );
};

export default TermModal;

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
  padding: 40px 50px;

  background-color: #fff;
  border: 1px solid #c4c4c4;
  border-radius: 10px;

  button {
    margin-top: 30px;
  }
`;

const TermContainer = styled.article`
  margin-top: 30px;
  width: 300px;
  height: 150px;
  overflow-y: scroll;
  border: 1px solid #c4c4c4;
  padding: 10px;
`;

const Title = styled.p`
  text-align: center;
  font-weight: 700;
`;
