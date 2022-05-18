import React from 'react';
import styled from 'styled-components';

const CarouselIndicator = ({ onClick }) => {
  return <Button onClick={onClick} />;
};

export default CarouselIndicator;

const Button = styled.button`
  width: 8px;
  height: 8px;
  border: none;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  transition: background-color 0.5s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
  & + button {
    margin-left: 10px;
  }
`;
