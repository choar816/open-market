import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';

const LoginFooter = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <li onClick={() => navigate('/join')}>
        <a>회원가입</a>
      </li>
      <li>
        <a>비밀번호 찾기</a>
      </li>
    </Container>
  );
};

export default LoginFooter;
