import React from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';
import MessageError from './MessageError';

const InputEmail = ({ title, error, email, handleChange, ...props }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <div>
        <InputBox
          name="emailFirst"
          value={email[0]}
          onChange={handleChange}
          {...props}
        />
        <span>@</span>
        <InputBox
          name="emailSecond"
          value={email[1]}
          onChange={handleChange}
          {...props}
        />
      </div>
      {error && <MessageError content={error} />}
    </Container>
  );
};

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

const Title = styled.label`
  color: #767676;
  font-size: 16px;
  line-height: 20px;
`;
