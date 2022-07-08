import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import InputEmail from './InputEmail';
import InputName from './InputName';
import InputPassword from './InputPassword';
import InputPhone from './InputPhone';
import InputWithBtn from './InputWithBtn';
import ColorButton from '/src/components/button/ColorButton';
import TermModal from './TermModal';
import JoinSuccessModal from './JoinSuccessModal';
import { modalData } from '../../utils/modalData';
import { idRegex, pwRegex } from '../../utils/regex';
import { checkIdDuplicate, requestJoin } from '../../utils/joinRequest';
import IconUnchecked from '/public/assets/check-box.svg';
import IconChecked from '/public/assets/check-fill-box.svg';

const JoinForm = ({ userType }) => {
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

  const { id, pw, pwCheck } = joinInputs;

  ////////////////// id //////////////////
  const onClickIdCheck = () => {
    // regex가 틀린 경우 중복 체크를 하지 않음
    if (!checkIdRegex()) return;

    // 중복 체크
    checkIdDuplicate(userType, id)
      .then((isIdDup) => {
        setJoinErrors({
          ...joinErrors,
          id: isIdDup ? '해당 사용자 아이디는 이미 존재합니다.' : null,
        });
      })
      .catch((e) => console.error(e));
  };

  const checkIdRegex = () => {
    const isIdRegexOk = idRegex.test(id);
    setJoinErrors({
      ...joinErrors,
      id: isIdRegexOk
        ? null
        : '5~20자의 영문 소문자, 대문자, 숫자만 사용 가능합니다.',
    });
    return isIdRegexOk;
  };

  ////////////////// pw //////////////////
  const [isPwValid, setIsPwValid] = useState(false);
  const [isPwCheckValid, setIsPwCheckValid] = useState(false);

  const onBlurPw = () => {
    const isPwRegexOk = pwRegex.test(pw);

    // pw의 regex 체크
    setJoinErrors((joinErrors) => {
      return {
        ...joinErrors,
        pw: isPwRegexOk
          ? null
          : '8자 이상, 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
      };
    });
    setIsPwValid(isPwRegexOk);

    // pw, pwCheck 일치하는지 체크
    setJoinErrors((joinErrors) => {
      return {
        ...joinErrors,
        pwCheck: pw === pwCheck ? null : '비밀번호가 일치하지 않습니다.',
      };
    });
    setIsPwCheckValid(isPwRegexOk && pw === pwCheck);
  };

  ////////////////// Phone //////////////////
  const [phone, setPhone] = useState(['010', '', '']);

  useEffect(() => {
    setJoinInputs({
      ...joinInputs,
      phone: phone.join(''), // ['010', '1234', '5678'] -> '01012345678'
    });
  }, [...phone]);

  const handleChangePhone = useCallback(
    (e) => {
      const newPhone = [...phone];
      if (e.target.name === 'phoneSecond') {
        newPhone[1] = e.target.value;
      } else if (e.target.name === 'phoneThird') {
        newPhone[2] = e.target.value;
      }
      setPhone(newPhone);
    },
    [phone],
  );

  ////////////////// Email //////////////////
  const [email, setEmail] = useState(['', '']);

  useEffect(() => {
    setJoinInputs({
      ...joinInputs,
      email: email.join('@'), // email 비어있는게 '@'
    });
  }, [...email]);

  const handleChangeEmail = useCallback(
    (e) => {
      const newEmail = [...email];
      if (e.target.name === 'emailFirst') {
        newEmail[0] = e.target.value;
      } else if (e.target.name === 'emailSecond') {
        newEmail[1] = e.target.value;
      }
      setEmail(newEmail);
    },
    [email],
  );

  ////////////////// join form //////////////////
  const handleChangeInput = (e) => {
    setJoinInputs({
      ...joinInputs,
      [e.target.name]: e.target.value,
    });
  };

  ///////////////////// FOOTER //////////////////
  const [modalOn, setModalOn] = useState(false);
  const [modalIdx, setModalIdx] = useState(0);
  const onClickModalFirst = () => {
    setModalIdx(0);
    setModalOn(true);
  };
  const onClickModalSecond = () => {
    setModalIdx(1);
    setModalOn(true);
  };

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

  const onClickJoin = () => {
    requestJoin(userType, joinInputs).then((data) => {
      if (data.user_type) setSuccessJoin(true);
      else setJoinErrors({ ...joinErrors, ...data });
    });
  };

  return (
    <>
      <FormContainer>
        <InputWithBtn
          title="아이디"
          name="id"
          btnMsg="중복확인"
          BtnClick={onClickIdCheck}
          value={joinInputs.id}
          error={joinErrors.id}
          onBlur={checkIdRegex}
          onChange={handleChangeInput}
        />
        <InputPassword
          title="비밀번호"
          name="pw"
          hasValidCheck={true}
          isValid={isPwValid}
          value={joinInputs.pw}
          error={joinErrors.pw}
          onBlur={onBlurPw}
          onChange={handleChangeInput}
        />
        <InputPassword
          title="비밀번호 재확인"
          name="pwCheck"
          hasValidCheck={true}
          isValid={isPwCheckValid}
          value={joinInputs.pwCheck}
          error={joinErrors.pwCheck}
          onBlur={onBlurPw}
          onChange={handleChangeInput}
        />
        <InputName
          title="이름"
          name="name"
          value={joinInputs.name}
          error={joinErrors.name}
          onChange={handleChangeInput}
        />
        <InputPhone
          title="휴대폰번호"
          phone={phone}
          setPhone={setPhone}
          error={joinErrors.phone}
          handleChange={handleChangePhone}
        />
        <InputEmail
          title="이메일"
          email={email}
          error={joinErrors.email}
          handleChange={handleChangeEmail}
        />
        {userType === 'SELLER' && (
          <>
            <InputWithBtn
              title="사업자 등록번호"
              name="sellerNum"
              btnMsg="인증"
              value={joinInputs.sellerNum}
              error={joinErrors.sellerNum}
              onChange={handleChangeInput}
            />
            <InputName
              title="스토어 이름"
              name="storeName"
              value={joinInputs.storeName}
              error={joinErrors.storeName}
              onChange={handleChangeInput}
            />
          </>
        )}
      </FormContainer>
      <FooterContainer>
        <div>
          <Checkbox
            type="checkbox"
            id="checkTerms"
            onChange={() => setCheckedTerm((checkedTerm) => !checkedTerm)}
          />
          <label htmlFor="checkTerms" />
          <p>
            호두샵의 <span onClick={onClickModalFirst}>이용약관</span> 및{' '}
            <span onClick={onClickModalSecond}>개인정보처리방침</span>에 대한
            내용을 확인하였고 동의합니다.
          </p>
        </div>
        <ColorButton
          color={canPushJoin ? 'green' : 'gray'}
          onClick={canPushJoin ? onClickJoin : () => {}}
        >
          가입하기
        </ColorButton>
      </FooterContainer>
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

export default JoinForm;

const FormContainer = styled.section`
  width: 550px;
  position: relative;
  z-index: 10;
  padding: 35px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
`;

const FooterContainer = styled.div`
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
