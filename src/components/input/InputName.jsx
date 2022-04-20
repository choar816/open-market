import React from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';

function InputName({ title, msgInfo, borderRed }) {
  return (
    <Container>
      <Title>{title}</Title>
      <InputBox borderRed={borderRed} />
      {msgInfo && <Message msgColor={msgInfo.msgColor}>
        {msgInfo.msgContent}
      </Message>}
    </Container>
  );
}

export default InputName;

const Container = styled.article`
  display: flex;
  flex-direction: column;

  div {
    margin-top: 10px;
    display: flex;
    button {
      margin-left: 12px;
    }
  }
  input {
    margin-top: 10px;
  }
  & + article {
    margin-top: 16px;
  }
`;

const Title = styled.p`
  color: #767676;
  font-size: 16px;
  line-height: 20px;
`;

const Message = styled.p`
  ${({ msgColor }) => {
    switch (msgColor) {
      case 'green':
        return 'color: #21BF48;';
      case 'red':
        return 'color: #EB5757;';
    }
  }}
  margin-top: 10px;
  margin-bottom: -4px;
  font-size: 16px;
  line-height: 20px;
`;
