import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ColorButton from '/src/components/button/ColorButton';
import TermModal from './TermModal';
import JoinSuccessModal from './JoinSuccessModal';
import { modalData } from '../../utils/modalData';
import { joinBody, sendJoinRequest } from '../../utils/joinRequest';
import IconUnchecked from '/public/assets/check-box.svg';
import IconChecked from '/public/assets/check-fill-box.svg';

const JoinFooter = ({ userType, joinInputs, joinErrors, setJoinErrors }) => {
  const [modalOn, setModalOn] = useState(false);
  const [modalIdx, setModalIdx] = useState(0);

  const [successJoin, setSuccessJoin] = useState(false);
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

  const requestJoin = async () => {
    await sendJoinRequest(userType, joinBody(userType, joinInputs))
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
        <div>
          <Checkbox
            type="checkbox"
            id="checkTerms"
            onChange={() => setCheckedTerm((checkedTerm) => !checkedTerm)}
          />
          <label htmlFor="checkTerms" />
          <p>
            호두샵의{' '}
            <span
              onClick={() => {
                setModalIdx(0);
                setModalOn(true);
              }}
            >
              이용약관
            </span>{' '}
            및{' '}
            <span
              onClick={() => {
                setModalIdx(1);
                setModalOn(true);
              }}
            >
              개인정보처리방침
            </span>
            에 대한 내용을 확인하였고 동의합니다.
          </p>
        </div>
        <ColorButton
          color={canPushJoin ? 'green' : 'gray'}
          onClick={canPushJoin ? requestJoin : () => {}}
        >
          가입하기
        </ColorButton>
      </Container>
      {modalOn && (
        <TermModal
          setIsOn={setModalOn}
          title={modalData[modalIdx].title}
          content={modalData[modalIdx].content}
        />
      )}
      {successJoin && <JoinSuccessModal />}
    </>
  );
};

export default JoinFooter;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  padding: 35px;

  div {
    display: flex;
    align-items: flex-start;
  }
  p {
    margin-left: 10px;
    color: #767676;
    font-size: 16px;
    line-height: 20px;
    span {
      text-decoration: underline;
      font-weight: 700;
      cursor: pointer;
    }
  }
  button {
    margin-top: 34px;
  }
`;

const Checkbox = styled.input`
  display: none;
  & + label {
    width: 17px;
    height: 16px;
    margin-top: 1px;
    background: url(${IconUnchecked}) center/16px 16px;
  }
  &:checked + label {
    background-image: url(${IconChecked});
  }
`;
