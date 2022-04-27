import React from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';

function InputEmail({ ...props }) {
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
