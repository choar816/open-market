import React from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';
import ColorButton from '../ColorButton';

function InputWithBtn({ title, btnMsg, showMsg, msgContent, msgColor }) {
  return (
    <Container>
      <Title>{title}</Title>
      <div>
        <InputBox />
        <ColorButton width="122px" size="MS">{btnMsg}</ColorButton>
      </div>
      <Message showMsg={showMsg} msgColor={msgColor}>
        {msgContent}
      </Message>
    </Container>
  );
}

export default InputWithBtn;

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
