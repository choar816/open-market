import React, { useEffect, useRef, useState } from 'react';
import InputEmail from './InputEmail';
import InputName from './InputName';
import InputPassword from './InputPassword';
import InputPhone from './InputPhone';
import InputWithBtn from './InputWithBtn';
import { idRegex, pwRegex } from '../../utils/regex';
import { checkIdDuplicate } from '../../utils/joinRequest';

const JoinForm = ({
  userType,
  joinInputs,
  setJoinInputs,
  joinErrors,
  setJoinErrors,
}) => {
  const { id, pw, pwCheck } = joinInputs;
  const idRef = useRef(null);

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
    const isRegexOk = idRegex.test(id);
    setJoinErrors({
      ...joinErrors,
      id: isRegexOk
        ? null
        : '5~20자의 영문 소문자, 대문자, 숫자만 사용 가능합니다.',
    });
    return isRegexOk;
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

  const handleChangePhone = (e) => {
    const newPhone = [...phone];
    if (e.target.name === 'phoneSecond') {
      newPhone[1] = e.target.value;
    } else if (e.target.name === 'phoneThird') {
      newPhone[2] = e.target.value;
    }
    setPhone(newPhone);
  };

  ////////////////// Email //////////////////
  const [email, setEmail] = useState(['', '']);

  useEffect(() => {
    setJoinInputs({
      ...joinInputs,
      email: email.join('@'), // email 비어있는게 '@'
    });
  }, [...email]);

  const handleChangeEmail = (e) => {
    const newEmail = [...email];
    if (e.target.name === 'emailFirst') {
      newEmail[0] = e.target.value;
    } else if (e.target.name === 'emailSecond') {
      newEmail[1] = e.target.value;
    }
    setEmail(newEmail);
  };

  ////////////////// overall //////////////////
  const handleChangeInput = (e) => {
    setJoinInputs({
      ...joinInputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <InputWithBtn
        title="아이디"
        name="id"
        btnMsg="중복확인"
        BtnClick={onClickIdCheck}
        ref={idRef}
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
        value={joinInputs.pw} // joinInputs[name] ?
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
    </div>
  );
};

export default JoinForm;
