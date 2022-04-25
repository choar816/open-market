import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import InputText from './input/InputText';
import ColorButton from './ColorButton';
import regeneratorRuntime from 'regenerator-runtime';

function LoginForm({ userType }) {
  const idRef = useRef();
  const pwRef = useRef();

  const [loginInfo, setLoginInfo] = useState({
    id: '',
    pw: '',
  });
  const [message, setMessage] = useState({
    show: false,
    content: 'alert',
  });

  const handleInputChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  const checkLogin = async () => {
    const url = 'https://openmarket.weniv.co.kr';
    fetch(`${url}/accounts/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: loginInfo.id,
        password: loginInfo.pw,
        login_type: userType,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.username) {
          setMessage({ content: '아이디를 입력해 주세요.', show: true });
          idRef.current.focus();
        } else if (data.password) {
          setMessage({ content: '비밀번호를 입력해 주세요.', show: true });
          pwRef.current.focus();
        } else if (data.FAIL_Message) {
          setMessage({
            content: '아이디 또는 비밀번호가 일치하지 않습니다.',
            show: true,
          });
        }
        else setMessage({ ...message, show: false });
      });
  };

  return (
    <Container>
      <InputText
        type="text"
        name="id"
        placeholder="아이디"
        value={loginInfo.id}
        onChange={handleInputChange}
        ref={idRef}
      />
      <InputText
        type="password"
        name="pw"
        placeholder="비밀번호"
        value={loginInfo.pw}
        onChange={handleInputChange}
        ref={pwRef}
      />
      <Message show={message.show}>{message.content}</Message>
      <ColorButton size="M" onClick={checkLogin}>
        로그인
      </ColorButton>
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

const Message = styled.p`
  margin-top: 26px;
  margin-bottom: -10px;
  font-size: 16px;
  line-height: 20px;
  color: #eb5757;
  ${({ show }) => (show ? `display: visible;` : `display: none;`)}
`;
