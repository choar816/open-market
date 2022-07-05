import React from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';
import MessageError from './MessageError';

const InputPassword = ({ isValid, ...props }) => {
  const { title, error } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <InputBox type="password" isValid={isValid} {...props} />
      {error && <MessageError content={error} />}
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

const Title = styled.label`
  color: #767676;
  font-size: 16px;
  line-height: 20px;
`;
