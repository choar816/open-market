import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { checkIdRegex, checkEmailRegex } from '/src/utils/regex';
import JoinForm from '../components/join/JoinForm';
import JoinFooter from '../components/join/JoinFooter';
import JoinSuccessModal from '../components/join/JoinSuccessModal';
import ImgLogo from '/public/assets/Logo-hodu.png';
import {
  idDupBody,
  buyerBody,
  sellerBody,
  sendJoinRequest,
} from '../components/join/utils/joinRequest';

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

  // 회원가입 성공 여부 (-> 모달)
  const [successJoin, setSuccessJoin] = useState(false);
  // 회원가입 버튼 비활성화/활성화
  const [canPushJoin, setCanPushJoin] = useState(false);

  // 회원가입 버튼 활성화 여부를 판단하기 위한 변수들
  // 약관 체크
  const [checkedTerm, setCheckedTerm] = useState(false);
  // id, pw, pwCheck가 비었거나 에러가 있는지 검사
  const isEmpty = !(joinInputs.id || joinInputs.pw || joinInputs.pwCheck);
  const isError = joinErrors.id || joinErrors.pw || joinErrors.pwCheck;

  // 가입 버튼 클릭 가능 여부 체크
  useEffect(() => {
    if (checkedTerm && !isError && !isEmpty) setCanPushJoin(true);
    else setCanPushJoin(false);
  }, [checkedTerm, isError, isEmpty]);

  // id : regex, 중복 체크

  const checkId = () => {
    if (!checkIdRegex(joinInputs.id)) {
      setJoinErrors({
        ...joinErrors,
        id: '20자 이내의 영문 소문자, 대문자, 숫자만 사용 가능합니다.',
      });
      return;
    }
    checkIdDup();
  };

  const checkIdDup = async () => {
    await sendJoinRequest(userType, idDupBody(joinInputs.id))
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.username?.includes('해당 사용자 아이디는 이미 존재합니다.')) {
          setJoinErrors({
            ...joinErrors,
            id: '이미 사용 중인 아이디입니다.',
          });
        } else {
          setJoinErrors({
            ...joinErrors,
            id: null,
          });
        }
      })
      .catch((e) => console.error(e));
  };

  const requestJoin = async () => {
    const body =
      userType === 'BUYER' ? buyerBody(joinInputs) : sellerBody(joinInputs);

    await sendJoinRequest(userType, body)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // 회원가입 성공 / 실패
        if (data.user_type === userType) setSuccessJoin(true);
        else {
          setJoinErrors({
            ...joinErrors,
            id: data.username ? data.username.join(' ') : null,
            pw: data.password ? data.password.join(' ') : null,
            pwCheck: data.password2 ? data.password2.join(' ') : null,
            name: data.name ? data.name.join(' ') : null,
            phone: data.phone_number ? data.phone_number.join(' ') : null,
            sellerNum: data.company_registration_number
              ? data.company_registration_number.join(' ')
              : null,
            storeName: data.store_name ? data.store_name.join(' ') : null,
          });
        }
      });
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
              joinInputs={joinInputs}
              setJoinInputs={setJoinInputs}
              joinErrors={joinErrors}
              setJoinErrors={setJoinErrors}
              checkId={checkId}
            />
          </FormContent>
        </FormContainer>
        <JoinFooter
          onJoinClick={requestJoin}
          canPushJoin={canPushJoin}
          checkedTerm={checkedTerm}
          setCheckedTerm={setCheckedTerm}
        />
      </Container>
      {successJoin && <JoinSuccessModal />}
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
