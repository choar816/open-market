import React from 'react';
import styled from 'styled-components';

function DropdownPhone({ onClick, width }) {
  return (
    <Container onClick={onClick} width={width}>
      <Item>010</Item>
      <Item>011</Item>
      <Item>016</Item>
      <Item>017</Item>
      <Item>018</Item>
      <Item>019</Item>
    </Container>
  )
}

export default DropdownPhone;

const Container = styled.ul`
  overflow-y: scroll;
  height: 150px;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
  &::-webkit-scrollbar {
    width: 18px;
  }
  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: #C4C4C4;
    border: 6px solid transparent;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #F2F2F2;
  }
`;

const Item = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  user-select: none;
  &:hover {
    background-color: #E0E0E0;
  }
`;