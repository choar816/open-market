import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import InputText from './InputText';
import ColorButton from '/src/components/button/ColorButton';
import { sendLoginRequest } from '../../utils/loginRequest';
import { Container, Message } from './style';
import regeneratorRuntime from 'regenerator-runtime';

const ERROR_TYPES = {
  no_id: '아이디를 입력해 주세요.',
  no_pw: '비밀번호를 입력해 주세요.',
  no_match: '아이디 또는 비밀번호가 일치하지 않습니다.',
};

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
      .then((result) => {
        if (Object.keys(ERROR_TYPES).includes(result)) {
          setError(ERROR_TYPES[result]);
          switch (result) {
            case 'no_id':
              idRef.current.focus();
              break;
            case 'no_pw':
              pwRef.current.focus();
              break;
          }
        } else {
          setError('');
          localStorage.setItem('id', loginInputs.id);
          localStorage.setItem('token', result.token);
          localStorage.setItem('userType', result.user_type);
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
