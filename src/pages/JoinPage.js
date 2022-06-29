import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { checkIdRegex, checkEmailRegex } from '../util/regex';
import { API_URL } from '../util/api';
import ImgLogo from '../../public/assets/Logo-hodu.png';
import JoinForm from '../components/join/JoinForm';
import JoinFooter from '../components/join/JoinFooter';
import JoinSuccessModal from '../components/join/JoinSuccessModal';

const JoinPage = () => {
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

  // 회원가입에 성공했는지 여부
  const [joinSuccess, setJoinSuccess] = useState(false);

  // 회원가입 버튼 비활성화/활성화
  const [canPushJoin, setCanPushJoin] = useState(false);

  ///////////////////////////////////////////
  // 회원가입 버튼 활성화 여부를 판단하기 위한 변수들
  const [termCheck, setTermCheck] = useState(false);
  const [isIdDuplicated, setIsIdDuplicated] = useState(true);

  // true -> inputs' lengths are valid
  const checkInputLengthBuyer = !(
    joinInfo.id.length === 0 ||
    joinInfo.pw.length === 0 ||
    joinInfo.pwCheck.length === 0 ||
    joinInfo.name.length === 0 ||
    joinInfo.phone.length === 3 ||
    joinInfo.email.length === 1
  );
  const checkInputLengthSeller =
    checkInputLengthBuyer &&
    !(joinInfo.sellerNum.length === 0 || joinInfo.storeName.length === 0);

  // joinInfo의 value들 또는 termCheck가 바뀔 때마다
  // 가입 버튼 클릭 가능 여부 체크
  useEffect(() => {
    if (userType === 'SELLER') {
      if (termCheck && !isIdDuplicated && checkInputLengthSeller)
        setCanPushJoin(true);
      else setCanPushJoin(false);
    } else if (userType === 'BUYER') {
      if (termCheck && !isIdDuplicated && checkInputLengthBuyer)
        setCanPushJoin(true);
      else setCanPushJoin(false);
    }
  }, [...Object.values(joinInfo), termCheck, isIdDuplicated]);

  ///////////////////////////////////////////

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
    fetch(`${API_URL}/accounts/signup/`, {
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
        if (data.username?.includes('해당 사용자 아이디는 이미 존재합니다.')) {
          setMsgJoin({
            ...msgJoin,
            id: {
              msgContent: '이미 사용 중인 아이디입니다.',
              msgColor: 'red',
            },
          });
        } else {
          setIsIdDuplicated(false);
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
    fetch(`${API_URL}/accounts/signup/`, {
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

        // 백엔드에서 이메일 검사를 안해서.. 패스
        // if (!checkEmailRegex(joinInfo.email)) {
        //   setMsgJoin({
        //     ...msgJoin,
        //     email: {
        //       msgContent: '이메일 형식이 올바르지 않습니다.',
        //       msgColor: 'red',
        //     },
        //   });
        // } else {
        //   setMsgJoin({ ...msgJoin, email: null });
        // }

        // 회원가입에 성공했을 때
        if (data.user_type === 'BUYER') setJoinSuccess(true);
      })
      .catch((e) => alert(e.message));
  };

  const checkJoinSeller = () => {
    fetch(`${API_URL}/accounts/signup_seller/`, {
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
      .then((res) => res.json())
      .then((data) => {
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

        // 회원가입에 성공했을 때
        if (data.user_type === 'SELLER') setJoinSuccess(true);
      })
      .catch((e) => console.error(e));
  };

  return (
    <>
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
              joinInfo={joinInfo}
              setJoinInfo={setJoinInfo}
              msgJoin={msgJoin}
              setMsgJoin={setMsgJoin}
              checkId={checkId}
            />
          </FormContent>
        </FormContainer>
        <JoinFooter
          onJoinClick={userType === 'BUYER' ? checkJoinBuyer : checkJoinSeller}
          canPushJoin={canPushJoin}
          termCheck={termCheck}
          setTermCheck={setTermCheck}
        />
      </Container>
      {joinSuccess && <JoinSuccessModal />}
    </>
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
