import React from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';

function InputPassword({ title, hasValidCheck, isValid, showMsg, msgContent, msgColor }) {
  return (
    <Container>
      <Title>{title}</Title>
      <InputBox type="password" hasValidCheck={hasValidCheck} isValid={isValid} />
      <Message showMsg={showMsg} msgColor={msgColor}>
        {msgContent}
      </Message>
    </Container>
  );
}

export default InputPassword;

const Container = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;

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
  ${({ showMsg }) => showMsg ? `display: visible;` : `display: none;`}
  ${({ msgColor }) => msgColor && `color: ${msgColor};`}
  margin-top: 10px;
  margin-bottom: -4px;
  font-size: 16px;
  line-height: 20px;
`;
