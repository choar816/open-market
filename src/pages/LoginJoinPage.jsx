import React, { useState } from 'react';
import styled from 'styled-components';
import '../App.css';
import ImgLogo from '../../public/assets/Logo-hodu.png';
import LoginForm from '../components/LoginForm';
import LoginLower from '../components/LoginLower';
import JoinForm from '../components/JoinForm';
import JoinLower from '../components/JoinLower';

function LoginJoinPage() {
  const [info, setInfo] = useState({
    pageType: 'login',
    userType: 'BUYER',
  });

  const changeUserType = (type) => {
    setInfo({ ...info, userType: type });
  };

  return (
    <Container>
      <img src={ImgLogo} />
      <FormContainer>
        <FormType selected={info.userType}>
          <button onClick={() => changeUserType('BUYER')}>
            구매{info.pageType === 'login' ? '회원 로그인' : '회원가입'}
          </button>
          <button onClick={() => changeUserType('SELLER')}>
            판매{info.pageType === 'login' ? '회원 로그인' : '회원가입'}
          </button>
        </FormType>
        <FormContent>
          {info.pageType === 'login' ? (
            <LoginForm userType={info.userType} />
          ) : (
            <JoinForm />
          )}
        </FormContent>
      </FormContainer>
      {info.pageType === 'login' ? <LoginLower /> : <LowerJoin />}
    </Container>
  );
}

export default LoginJoinPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;

  img {
    width: 230px;
  }
`;

const FormContainer = styled.section`
  width: 550px;
`;

const FormType = styled.article`
  margin-top: 50px;
  position: relative;
  top: 20px;
  display: flex;

  button {
    padding-top: 20px;
    padding-bottom: 40px;
    width: 100%;
    font-size: 18px;
    background: none;
    border: 1px solid #c4c4c4;
    border-bottom: none;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  ${({ selected }) => `
    button:nth-child(${1 + +(selected === 'SELLER')}) {
      z-index: 20;
      background: #fff;
    }
    button:nth-child(${1 + +(selected === 'BUYER')}) {
      z-index: 0;
      background: #F2F2F2;
    }
  `}

  &::after {
    content: '';
    position: absolute;
    z-index: 30;
    top: 64px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 25px;
    background-color: #fff;
  }
`;

const FormContent = styled.section`
  position: relative;
  z-index: 10;
  padding: 35px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
`;