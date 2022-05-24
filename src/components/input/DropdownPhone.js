import React from 'react';
import styled from 'styled-components';

const DropdownPhone = ({ isOn, toggleIsOn, onSelect }) => {
  const onClick = (e) => {
    onSelect(e);
    toggleIsOn();
  };
  
  return (
    <Container isOn={isOn} onClick={onClick}>
      <Item>010</Item>
      <Item>011</Item>
      <Item>016</Item>
      <Item>017</Item>
      <Item>018</Item>
      <Item>019</Item>
    </Container>
  );
};

export default DropdownPhone;

const Container = styled.ul`
  ${({ isOn }) => (isOn ? `display: block;` : `display: none;`)}
  position: absolute;
  z-index: 10;
  top: 60px;
  overflow-y: scroll;
  width: 100%;
  height: 150px;
  background-color: #fff;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  &::-webkit-scrollbar {
    width: 18px;
  }
  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: #c4c4c4;
    border: 6px solid transparent;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f2f2f2;
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
    background-color: #e0e0e0;
  }
`;
