import React from 'react';
import styled from 'styled-components';
import ImgValid from '../../../public/assets/icon-check-on.svg';
import ImgInvalid from '../../../public/assets/icon-check-off.svg';

function InputBox(props) {
  return (
    <>
      <Input {...props} />
      {props.hasValidCheck && <IconValid isValid={props.isValid} />}
    </>
  );
}

export default InputBox;

const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 16px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  line-height: 20px;

  &:focus {
    border: 1px solid #21bf48;
  }
`;

const IconValid = styled.img`
  position: absolute;
  content: url(${({ isValid }) => isValid ? ImgValid : ImgInvalid});
  bottom: 13px;
  right: 13px;
  width: 28px;
  height: 28px;
`;
