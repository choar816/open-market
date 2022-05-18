import React from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';
import Message from './Message';

const InputEmail = (props) => {
  const { title, msgInfo, email, handleChangeEmail } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <div>
        <InputBox
          name="emailFirst"
          value={email[0]}
          onChange={handleChangeEmail}
          {...props}
        />
        <span>@</span>
        <InputBox
          name="emailSecond"
          value={email[1]}
          onChange={handleChangeEmail}
          {...props}
        />
      </div>
      {msgInfo && (
        <Message msgColor={msgInfo.msgColor} msgContent={msgInfo.msgContent} />
      )}
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

const Title = styled.p`
  color: #767676;
  font-size: 16px;
  line-height: 20px;
`;
