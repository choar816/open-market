import React from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';
import SelectBox from './SelectBox';

function InputPhone({ title, borderRed, msgInfo }) {
  return (
    <Container>
      <Title>{title}</Title>
      <div>
        <SelectBox borderRed={borderRed} />
        <InputBox borderRed={borderRed} />
        <InputBox borderRed={borderRed} />
      </div>
      {msgInfo && (
        <Message msgColor={msgInfo.msgColor}>{msgInfo.msgContent}</Message>
      )}
    </Container>
  );
}

export default InputPhone;

const Container = styled.article`
  display: flex;
  flex-direction: column;

  div {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 11px;
    & > * {
      flex: 1;
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
