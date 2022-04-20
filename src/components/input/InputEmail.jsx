import React from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';

function InputEmail({ title, borderRed, msgInfo }) {
  return (
    <Container>
      <Title>{title}</Title>
      <div>
        <InputBox borderRed={borderRed} />
        <span>@</span>
        <InputBox borderRed={borderRed} />
      </div>
      {msgInfo && (
        <Message msgColor={msgInfo.msgColor}>{msgInfo.msgContent}</Message>
      )}
    </Container>
  );
}

export default InputEmail;

const Container = styled.article`
  display: flex;
  flex-direction: column;

  div {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 11px;
    span {
      color: #767676;
      font-size: 16px;
      line-height: 20px;
      font-weight: 700;
    }
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
