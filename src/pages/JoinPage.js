import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import JoinForm from '../components/join/components/joinForm/JoinForm';
import JoinFooter from '../components/join/components/joinFooter/JoinFooter';
import ImgLogo from '/public/assets/Logo-hodu.png';

const JoinPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('BUYER');

  const [joinInputs, setJoinInputs] = useState({
    id: '',
    pw: '',
    pwCheck: '',
    name: '',
    phone: '',
    email: '',
    sellerNum: '',
    storeName: '',
  });
  const [joinErrors, setJoinErrors] = useState({});

  return (
    <Container>
      <Img src={ImgLogo} onClick={() => navigate('/')} />
      <FormContainer>
        <FormType selected={userType}>
          <button onClick={() => setUserType('BUYER')}>구매회원가입</button>
          <button onClick={() => setUserType('SELLER')}>판매회원가입</button>
        </FormType>
        <FormContent>
          <JoinForm
            userType={userType}
            joinInputs={joinInputs}
            setJoinInputs={setJoinInputs}
            joinErrors={joinErrors}
            setJoinErrors={setJoinErrors}
          />
        </FormContent>
      </FormContainer>
      <JoinFooter
        userType={userType}
        joinInputs={joinInputs}
        joinErrors={joinErrors}
        setJoinErrors={setJoinErrors}
      />
    </Container>
  );
};

export default JoinPage;

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
    button:nth-child(${selected === 'SELLER' ? 2 : 1}) {
      z-index: 20;
      background: #fff;
    }
    button:nth-child(${selected === 'BUYER' ? 2 : 1}) {
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
