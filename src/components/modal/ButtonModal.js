import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ColorButton from '/src/components/button/ColorButton';

const ButtonModal = ({
  emoji,
  title,
  buttonMessage,
  addressToNavigate,
  ifReplace,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <Background />
      <ModalContainer>
        <Emoji>{emoji}</Emoji>
        <Title>{title}</Title>
        <ColorButton
          width={'200px'}
          onClick={() =>
            navigate(`${addressToNavigate}`, { replace: ifReplace })
          }
        >
          {buttonMessage}
        </ColorButton>
      </ModalContainer>
    </>
  );
};

export default ButtonModal;

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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 60;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 40px 50px;
  background-color: #fff;
  border: 1px solid #c4c4c4;
  border-radius: 10px;

  button {
    margin-top: 30px;
  }
`;

const Emoji = styled.p`
  font-size: 40px;
`;

const Title = styled.p`
  margin-top: 15px;
  font-size: 18px;
  font-weight: 700;
`;
