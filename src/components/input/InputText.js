import React from 'react';
import styled from 'styled-components';

const InputText = React.forwardRef((props, ref) => {
  return <Input {...props} ref={ref} />;
});

export default InputText;

const Input = styled.input`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #c4c4c4;
  font-size: 16px;
  line-height: 20px;
  outline: none;

  &:focus {
    border-bottom: 1px solid #21bf48;
  }
`;
