import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JoinForm } from './components/JoinForm';
import { Container, Logo, FormType } from './style';

const JoinPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('BUYER');

  return (
    <Container>
      <Logo onClick={() => navigate('/')} />
      <FormType selected={userType}>
        <button onClick={() => setUserType('BUYER')}>구매회원가입</button>
        <button onClick={() => setUserType('SELLER')}>판매회원가입</button>
      </FormType>
      <JoinForm userType={userType} />
    </Container>
  );
};

export default JoinPage;
