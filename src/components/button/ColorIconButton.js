import React from 'react';
import styled from 'styled-components';

const ColorIconButton = ({ iconSrc, children }) => {
  return (
    <Container>
      {iconSrc && <img src={iconSrc} />}
      {children}
    </Container>
  );
};

export default ColorIconButton;

const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  margin-left: 30px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  background-color: #21bf48;
  font-size: 18px;
  font-weight: 500;
`;
