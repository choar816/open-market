import React from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';
import ColorButton from '../ColorButton';

function InputWithBtn({ ...props }) {
  const { title, btnMsg, msgInfo } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <div>
        <InputBox {...props} />
        <ColorButton width="122px" size="MS">
          {btnMsg}
        </ColorButton>
      </div>
      {msgInfo && (
        <Message msgColor={msgInfo.msgColor}>{msgInfo.msgContent}</Message>
      )}
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
