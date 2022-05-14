import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImgLogo from '../../public/assets/Logo-hodu.png';
import JoinForm from '../components/join/JoinForm';
import JoinFooter from '../components/join/JoinFooter';
import { useNavigate } from 'react-router-dom';

const checkIdRegex = (id) => {
  const idRegex = /^[a-zA-Z0-9]{1,20}$/;
  return idRegex.test(id);
};

function JoinPage() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('BUYER');

  const [joinInfo, setJoinInfo] = useState({
    id: '',
    pw: '',
    pwCheck: '',
    name: '',
    phone: '010',
    email: '@',
    sellerNum: '',
    storeName: '',
  });

  useEffect(() => {
    if (userType === 'SELLER') {
      if (
        joinInfo.id.length === 0 ||
        joinInfo.pw.length === 0 ||
        joinInfo.pwCheck.length === 0 ||
        joinInfo.name.length === 0 ||
        joinInfo.phone.length === 3 ||
        joinInfo.email.length === 1 ||
        joinInfo.sellerNum.length === 0 ||
        joinInfo.storeName.length === 0 ||
        termCheck === false
      )
        setCanJoin(false);
      else setCanJoin(true);
    } else {
      if (
        joinInfo.id.length === 0 ||
        joinInfo.pw.length === 0 ||
        joinInfo.pwCheck.length === 0 ||
        joinInfo.name.length === 0 ||
        joinInfo.phone.length === 3 ||
        joinInfo.email.length === 1 ||
        termCheck === false
      )
        setCanJoin(false);
      else setCanJoin(true);
    }
  }, [
    joinInfo.id,
    joinInfo.pw,
    joinInfo.pwCheck,
    joinInfo.name,
    joinInfo.phone,
    joinInfo.email,
    joinInfo.sellerNum,
    joinInfo.storeName,
    termCheck,
  ]);

  const [msgJoin, setMsgJoin] = useState({
    id: null,
    pw: null,
    pwCheck: null,
    name: null,
    phone: null,
    email: null,
    sellerNum: null,
    storeName: null,
  });

  const [canJoin, setCanJoin] = useState(false);
  const [termCheck, setTermCheck] = useState(false);

  const checkId = () => {
    if (!checkIdRegex(joinInfo.id)) {
      setMsgJoin({
        ...msgJoin,
        id: {
          msgContent:
            '20자 이내의 영문 소문자, 대문자, 숫자만 사용 가능합니다.',
          msgColor: 'red',
        },
      });
      return;
    }
    checkIdDup();
  };

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
      .then((res) => {
        if (!res.ok) throw new Error('http 에러');
        return res.json();
      })
      .then((data) => {
        if (data.username?.includes('해당 사용자 아이디는 이미 존재합니다.')) {
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
      })
      .catch((e) => alert(e.message));
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
      .then((res) => {
        if (!res.ok) throw new Error('http 에러');
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((e) => alert(e.message));
  };

  const checkJoinSeller = () => {
    const url = 'https://openmarket.weniv.co.kr';
    fetch(`${url}/accounts/signup_seller/`, {
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
        company_registration_number: joinInfo.sellerNum,
        store_name: joinInfo.storeName,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('http 에러');
        return res.json();
      })
      .then((data) => {
        console.log(data);

        // phone number
        if (data.phone_number?.includes('올바른 값을 입력하세요.')) {
          setMsgJoin({
            ...msgJoin,
            phone: {
              msgContent:
                '핸드폰번호는 01*으로 시작해야 하는 10~11자리 숫자여야 합니다.',
              msgColor: 'red',
            },
          });
        } else if (
          data.phone_number?.includes('해당 사용자 전화번호는 이미 존재합니다.')
        ) {
          setMsgJoin({
            ...msgJoin,
            phone: {
              msgContent: '해당 사용자 전화번호는 이미 존재합니다.',
              msgColor: 'red',
            },
          });
        } else {
          setMsgJoin({ ...msgJoin, phone: null });
        }

        // company registration number
        if (
          data.company_registration_number?.includes(
            '해당 사업자등록번호는 이미 존재합니다.',
          )
        ) {
          setMsgJoin({
            ...msgJoin,
            sellerNum: {
              msgContent: '해당 사업자등록번호는 이미 존재합니다.',
              msgColor: 'red',
            },
          });
        } else {
          setMsgJoin({ ...msgJoin, sellerNum: null });
        }

        // company name
        if (
          data.company_registration_number?.includes(
            '해당 스토어이름은 이미 존재합니다.',
          )
        ) {
          setMsgJoin({
            ...msgJoin,
            storeName: {
              msgContent: '해당 스토어이름은 이미 존재합니다.',
              msgColor: 'red',
            },
          });
        } else {
          setMsgJoin({ ...msgJoin, storeName: null });
        }
      })
      .catch((e) => alert(e.message));
  };

  return (
    <Container>
      <img src={ImgLogo} />
      <FormContainer>
        <FormType selected={userType}>
          <button onClick={() => setUserType('BUYER')}>구매회원가입</button>
          <button onClick={() => setUserType('SELLER')}>판매회원가입</button>
        </FormType>
        <FormContent>
          <JoinForm
            userType={userType}
            joinInfo={joinInfo}
            setJoinInfo={setJoinInfo}
            msgJoin={msgJoin}
            setMsgJoin={setMsgJoin}
            checkId={checkId}
            checkIdRegex={checkIdRegex}
          />
        </FormContent>
      </FormContainer>
      <JoinFooter
        onJoinClick={userType === 'BUYER' ? checkJoinBuyer : checkJoinSeller}
        canJoin={canJoin}
        termCheck={termCheck}
        setTermCheck={setTermCheck}
      />
    </Container>
  );
}

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
