import React from 'react';
import styled from 'styled-components';

function ColorButton({size, color, children}) {
  return (
    <Container size={size} color={color}>{children}</Container>
  )
}

export default ColorButton;

const handleSize = (size) => {
  switch (size) {
    case "L":
      return "width: 220px; font-size: 24px; line-height: 30px; padding: 19px 0;";
    case "M":
      return "width: 480px; font-size: 18px; line-height: 22px; padding: 19px 0;";
    case "MS":
      return "width: 166px; font-size: 16px; line-height: 20px; padding: 17px 0;";
    case "S":
      return "width: 80px; font-size: 16px; line-height: 20px; padding: 10px 0;";
  }
}

const handleColor = (color) => {
  switch (color) {
    case "gray":
      return "background-color: #C4C4C4;";
    case "charcoal":
      return "background-color: #767676;";
    case "white":
      return `
        background-color: #FFFFFF;
        color: #767676;
        border: 1px solid #C4C4C4;
      `;
    default:
      return "background-color: #21BF48;";
  }
}

const Container = styled.button`
  border: none;
  border-radius: 5px;
  color: #FFFFFF;
  font-weight: 700;

  ${({ size }) => handleSize(size)}
  ${({ color }) => handleColor(color)}
`;