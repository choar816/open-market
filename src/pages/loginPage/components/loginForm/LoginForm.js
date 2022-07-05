import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InputText from './InputText';
import ColorButton from '/src/components/button/ColorButton';
import { sendLoginRequest } from '../../utils/loginRequest';
import regeneratorRuntime from 'regenerator-runtime';

const LoginForm = ({ userType }) => {
  const navigate = useNavigate();
  const idRef = useRef();
  const pwRef = useRef();

  const [loginInputs, setLoginInputs] = useState({
    id: '',
    pw: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setLoginInputs({
      ...loginInputs,
      [e.target.name]: e.target.value,
    });
  };

  const checkLogin = async () => {
    sendLoginRequest(userType, loginInputs)
      .then((data) => {
        if (data.username) {
          setError('아이디를 입력해 주세요.');
          idRef.current.focus();
        } else if (data.password) {
          setError('비밀번호를 입력해 주세요.');
          pwRef.current.focus();
        } else if (data.FAIL_Message) {
          setError('아이디 또는 비밀번호가 일치하지 않습니다.');
        } else {
          // 로그인 성공
          setError('');
          localStorage.setItem('id', loginInputs.id);
          localStorage.setItem('token', data.token);
          localStorage.setItem('userType', userType);
          navigate(-1, { replace: true });
        }
      })
      .catch((e) => console.error(e));
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') checkLogin();
  };

  return (
    <Container>
      <InputText
        type="text"
        name="id"
        placeholder="아이디"
        ref={idRef}
        value={loginInputs.id}
        onChange={handleInputChange}
      />
      <InputText
        type="password"
        name="pw"
        placeholder="비밀번호"
        ref={pwRef}
        value={loginInputs.pw}
        onChange={handleInputChange}
        onKeyPress={handleEnter}
      />
      {error.length !== 0 && <Message>{error}</Message>}
      <ColorButton onClick={checkLogin}>로그인</ColorButton>
    </Container>
  );
};

export default LoginForm;

const Container = styled.div`
  position: relative;
  z-index: 10;
  padding: 35px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 10px;

  input + input {
    margin-top: 6px;
  }
  button {
    margin-top: 36px;
  }
`;

const Message = styled.p`
  margin-top: 26px;
  margin-bottom: -10px;
  font-size: 16px;
  line-height: 20px;
  color: #eb5757;
`;
