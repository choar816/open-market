import React, { useEffect, useRef, useState } from 'react';
import InputEmail from './components/input/InputEmail';
import InputName from './components/input/InputName';
import InputPassword from './components/input/InputPassword';
import InputPhone from './components/input/InputPhone';
import InputWithBtn from './components/input/InputWithBtn';
import { idRegex, pwRegex } from './utils/regex';
import { idDupBody, sendJoinRequest } from './utils/joinRequest';

const JoinForm = ({
  userType,
  joinInputs,
  setJoinInputs,
  joinErrors,
  setJoinErrors,
}) => {
  const { id, pw, pwCheck } = joinInputs;
  const idRef = useRef(null);

  ////////////////// id (regex, 중복) //////////////////
  const onClickIdCheck = () => {
    if (!checkIdRegex()) return;
    checkIdDup();
  };

  const checkIdRegex = () => {
    if (!idRegex.test(id)) {
      setJoinErrors({
        ...joinErrors,
        id: '20자 이내의 영문 소문자, 대문자, 숫자만 사용 가능합니다.',
      });
      return false;
    } else {
      setJoinErrors({
        ...joinErrors,
        id: null,
      });
      return true;
    }
  };

  const checkIdDup = async () => {
    await sendJoinRequest(userType, idDupBody(joinInputs.id))
      .then((res) => res.json())
      .then((data) => {
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

  ////////////////// pw //////////////////
  const [isPwValid, setIsPwValid] = useState(false);
  const [isPwCheckValid, setIsPwCheckValid] = useState(false);

  const onBlurPw = () => {
    // pw의 regex 체크
    if (!pwRegex.test(pw)) {
      setJoinErrors((joinErrors) => {
        return {
          ...joinErrors,
          pw: '8자 이상, 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
        };
      });
      setIsPwValid(false);
    } else {
      setJoinErrors((joinErrors) => {
        return { ...joinErrors, pw: null };
      });
      setIsPwValid(true);
    }

    // pw, pwCheck 일치하는지 체크
    if (pw === pwCheck) {
      setJoinErrors((joinErrors) => {
        return { ...joinErrors, pwCheck: null };
      });
      if (pwRegex.test(pw)) setIsPwCheckValid(true);
    } else {
      setJoinErrors((joinErrors) => {
        return {
          ...joinErrors,
          pwCheck: '비밀번호가 일치하지 않습니다.',
        };
      });
      setIsPwCheckValid(false);
    }
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
