import React, { useState } from 'react';
import styled from 'styled-components';
import ImgLogo from '../../public/assets/Logo-hodu.png';
import LoginForm from '../components/LoginForm';
import LoginLower from '../components/LoginLower';
import JoinForm from '../components/JoinForm';
import JoinLower from '../components/JoinLower';

function LoginJoinPage() {
  const [info, setInfo] = useState({
    pageType: 'join',
    userType: 'BUYER',
  });

  const changeUserType = (type) => {
    setInfo({ ...info, userType: type });
  };
  const changePageType = (type) => {
    setInfo({ ...info, pageType: type });
  };

  const [joinInfo, setJoinInfo] = useState({
    id: '',
    pw: '',
    pwCheck: '',
    name: '',
    phone: '',
    email: '',
  });

  const [msgJoin, setMsgJoin] = useState({
    id: null,
    pw: null,
    pwCheck: null,
    name: null,
    phone: null,
    email: null,
  });

  const checkEmail = () => {};

  const checkIdDup = async () => {
    const url = 'https://openmarket.weniv.co.kr';
    fetch(`${url}/accounts/signup/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: joinInfo.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.username?.includes('해당 사용자 아이디는 이미 존재합니다.')) {
          setMsgJoin({
            ...msgJoin,
            id: {
              msgContent: '이미 사용 중인 아이디입니다.',
              msgColor: 'red',
            },
          });
        } else {
          setMsgJoin({
            ...msgJoin,
            id: {
              msgContent: '멋진 아이디네요 :)',
              msgColor: 'green',
            },
          });
        }
      });
  };

  const checkJoinBuyer = async () => {
    const url = 'https://openmarket.weniv.co.kr';
    fetch(`${url}/accounts/signup/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: joinInfo.id,
        password: joinInfo.pw,
        password2: joinInfo.pwCheck,
        phone_number: joinInfo.phone,
        name: joinInfo.name,
      }),
    })
      .then((res) => res.json())
      .then((data) => {

      });
  };

  const checkJoinSeller = () => {
    console.log('checkJoinSeller');
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
            <JoinForm
              joinInfo={joinInfo}
              setJoinInfo={setJoinInfo}
              msgJoin={msgJoin}
              setMsgJoin={setMsgJoin}
              checkIdDup={checkIdDup}
            />
          )}
        </FormContent>
      </FormContainer>
      {info.pageType === 'login' ? (
        <LoginLower goToJoin={() => changePageType('join')} />
      ) : (
        <JoinLower
          onJoinClick={
            info.userType === 'BUYER' ? checkJoinBuyer : checkJoinSeller
          }
        />
      )}
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

  & > img {
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
