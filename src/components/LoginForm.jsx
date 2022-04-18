import React from 'react';
import styled from 'styled-components';
import InputText from './InputText';
import ColorButton from './ColorButton';

function LoginForm() {
  return (
    <Container>
      <InputText type="text" placeholder="아이디" />
      <InputText type="password" placeholder="비밀번호" />
      <ColorButton size="M">로그인</ColorButton>
    </Container>
  );
}

export default LoginForm;

const Container = styled.div`
  input + input {
    margin-top: 6px;
  }
  button {
    margin-top: 36px;
  }
`;