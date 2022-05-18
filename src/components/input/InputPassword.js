import React from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';
import Message from './Message';

const InputPassword = ({ isValid, ...props }) => {
  const { title, msgInfo } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <InputBox type="password" isValid={isValid} {...props} />
      {msgInfo && (
        <Message msgColor={msgInfo.msgColor} msgContent={msgInfo.msgContent} />
      )}
    </Container>
  );
};

export default InputPassword;

const Container = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;

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
