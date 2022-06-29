import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ImgLogo from '/public/assets/Logo-hodu.png';
import LoginForm from '../components/login/LoginForm';
import LoginFooter from '../components/login/LoginFooter';

const LoginPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('BUYER');

  return (
    <Container>
      <Img src={ImgLogo} onClick={() => navigate('/')} />
      <FormContainer>
        <FormType selected={userType}>
          <button onClick={() => setUserType('BUYER')}>구매회원 로그인</button>
          <button onClick={() => setUserType('SELLER')}>판매회원 로그인</button>
        </FormType>
        <FormContent>
          <LoginForm userType={userType} />
        </FormContent>
      </FormContainer>
      <LoginFooter />
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;

  & > img {
    width: 230px;
  }
`;

const Img = styled.img`
  cursor: pointer;
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
