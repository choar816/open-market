import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownPhone from './DropdownPhone';
import IconDown from '/public/assets/icon-down-arrow.svg';
import IconUp from '/public/assets/icon-up-arrow.svg';

const SelectBox = ({ phoneFirst, onSelect }) => {
  const [isOn, setIsOn] = useState(false);
  const toggleIsOn = () => {
    setIsOn((isOn) => !isOn);
  };

  return (
    <Container>
      <Button onClick={toggleIsOn} isOn={isOn}>
        {phoneFirst}
      </Button>
      <DropdownPhone isOn={isOn} toggleIsOn={toggleIsOn} onSelect={onSelect} />
    </Container>
  );
};

export default SelectBox;

const Container = styled.article`
  position: relative;
`;

const Button = styled.button`
  width: 100%;
  padding: 16px;
  padding-right: 36px;
  background-color: #fff;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  line-height: 20px;

  &:focus {
    border: 1px solid #21bf48;
  }

  ${({ borderRed }) =>
    borderRed &&
    `
    border: 1px solid #EB5757;
  `}

  &::after {
    content: '';
    position: absolute;
    top: 16px;
    right: 14px;
    width: 22px;
    height: 22px;
    background-image: url(${({ isOn }) => (isOn ? IconUp : IconDown)});
    background-size: 22px 22px;
  }
`;

const IconDrop = styled.img`
  position: absolute;
  content: url(${({ isValid }) => (isValid ? ImgValid : ImgInvalid)});
  bottom: 13px;
  right: 13px;
  width: 28px;
  height: 28px;
`;
