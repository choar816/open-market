import React from 'react';
import styled from 'styled-components';
import ImgValid from '../../../public/assets/icon-check-on.svg';
import ImgInvalid from '../../../public/assets/icon-check-off.svg';

const InputBox = React.forwardRef((props, ref) => {
  return (
    <>
      <Input {...props} ref={ref} />
      {props.hasValidCheck && <IconValid isValid={props.isValid} />}
    </>
  );
});

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

  ${({ msgInfo }) => {
    if (msgInfo?.msgColor === 'red')
      return `border: 1px solid #EB5757;`;
  }}
`;

const IconValid = styled.img`
  position: absolute;
  content: url(${({ isValid }) => (isValid ? ImgValid : ImgInvalid)});
  top: 43px;
  right: 13px;
  width: 28px;
  height: 28px;
`;
