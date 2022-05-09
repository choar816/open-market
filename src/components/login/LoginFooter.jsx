import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function LoginFooter({ goToJoin }) {
  return (
    <Container>
      <li onClick={goToJoin}><a>회원가입</a></li>
      <li><a>비밀번호 찾기</a></li>
    </Container>
  );
}

export default LoginFooter;

const Container = styled.ul`
  margin-top: 30px;
  display: flex;

  li {
    font-size: 16px;
    line-height: 20px;
    &:not(:last-child) {
      margin-right: 10px;
    }
    & + li::before {
      content: '|';
      margin-right: 10px;
    }
  }

  a {
    cursor: pointer;
  }
`;
