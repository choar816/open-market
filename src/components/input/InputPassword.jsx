import React from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';

function InputPassword({ ...props }) {
  const { title, msgInfo } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <InputBox type="password" {...props} />
      {msgInfo && (
        <Message msgColor={msgInfo.msgColor}>{msgInfo.msgContent}</Message>
      )}
    </Container>
  );
}

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

const Message = styled.p`
  ${({ showMsg }) => (showMsg ? `display: visible;` : `display: none;`)}
  ${({ msgColor }) => msgColor && `color: ${msgColor};`}
  margin-top: 10px;
  margin-bottom: -4px;
  font-size: 16px;
  line-height: 20px;
`;
