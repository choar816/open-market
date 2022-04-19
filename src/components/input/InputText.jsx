import React from 'react';
import styled from 'styled-components';

function InputText(props) {
  return <Input {...props} />;
}

export default InputText;

const Input = styled.input`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #C4C4C4;
  font-size: 16px;
  line-height: 20px;
  outline: none;

  &:focus {
    border-bottom: 1px solid #21BF48;
  }
`;
