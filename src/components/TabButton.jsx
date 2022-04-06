import React from 'react';
import styled from 'styled-components';

function TabButton({ chosen, children }) {
  return <Container chosen={chosen}>{children}</Container>;
}

export default TabButton;

const Container = styled.button`
  width: 320px;
  padding: 18px 0 12px;
  font-weight: 700;
  font-size: 18px;
  color: #21BF48;
  background-color: #FFFFFF;
  border: none;
  border-bottom: 6px solid #21BF48;
  ${({ chosen }) => !chosen && `
    font-weight: 500;
    color: #767676;
    border-bottom: 6px solid #E0E0E0;
  `}
`;
