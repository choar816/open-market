import React from 'react';
import styled from 'styled-components';
import ColorButton from '../button/ColorButton';
import InputBox from './InputBox';
import Message from './Message';

const InputWithBtn = React.forwardRef((props, ref) => {
  const { title, btnMsg, msgInfo, BtnClick } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <div>
        <InputBox ref={ref} {...props} />
        <ColorButton width="122px" size="MS" onClick={BtnClick}>
          {btnMsg}
        </ColorButton>
      </div>
      {msgInfo && (
        <Message msgColor={msgInfo.msgColor} msgContent={msgInfo.msgContent} />
      )}
    </Container>
  );
});

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

const Title = styled.label`
  color: #767676;
  font-size: 16px;
  line-height: 20px;
`;
