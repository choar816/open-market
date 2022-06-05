import React from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';
import Message from './Message';

const InputName = (props) => {
  const { title, msgInfo } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <InputBox {...props} />
      {msgInfo && (
        <Message msgColor={msgInfo.msgColor} msgContent={msgInfo.msgContent} />
      )}
    </Container>
  );
};

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

const Title = styled.label`
  color: #767676;
  font-size: 16px;
  line-height: 20px;
`;
