import React, { useEffect, useRef, useState } from 'react';
import { checkIdRegex, checkPwRegex } from '../../util/regex';
import InputEmail from '../input/InputEmail';
import InputName from '../input/InputName';
import InputPassword from '../input/InputPassword';
import InputPhone from '../input/InputPhone';
import InputWithBtn from '../input/InputWithBtn';

const JoinForm = ({
  userType,
  joinInfo,
  setJoinInfo,
  msgJoin,
  setMsgJoin,
  checkId,
}) => {
  const { id, pw, pwCheck, name } = joinInfo;
  const idRef = useRef(null);

  // id (check regex)
  const onBlurIdCheck = () => {
    if (id === '') {
      setMsgJoin({
        ...msgJoin,
        id: null,
      });
      return;
    }

    if (!checkIdRegex(id)) {
      setMsgJoin({
        ...msgJoin,
        id: {
          msgContent:
            '20자 이내의 영문 소문자, 대문자, 숫자만 사용 가능합니다.',
          msgColor: 'red',
        },
      });
    } else {
      setMsgJoin({
        ...msgJoin,
        id: null,
      });
    }
  };

  // pw
  const [isPwValid, setIsPwValid] = useState(false);
  const [isPwCheckValid, setIsPwCheckValid] = useState(false);

  const pwRegexCheck = () => {
    if (!checkPwRegex(pw)) {
      setMsgJoin({
        ...msgJoin,
        pw: {
          msgContent: '8자 이상, 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
          msgColor: 'red',
        },
      });
      setIsPwValid(false);
    } else {
      setMsgJoin({ ...msgJoin, pw: null });
      setIsPwValid(true);
    }
  };

  const pwMatchCheck = () => {
    if (pw === pwCheck) {
      setMsgJoin({ ...msgJoin, pwCheck: null });
      if (checkPwRegex(pwCheck)) setIsPwCheckValid(true);
    } else {
      setMsgJoin({
        ...msgJoin,
        pwCheck: {
          msgContent: '비밀번호가 일치하지 않습니다.',
          msgColor: 'red',
        },
      });
      setIsPwCheckValid(false);
    }
  };

  const onBlurPw = () => {
    if (pw === '') {
      setMsgJoin({ ...msgJoin, pw: null });
      setIsPwValid(false);
      return;
    }

    pwRegexCheck();
    if (pwCheck !== '') pwMatchCheck();
  };

  // pwCheck
  const onBlurPwCheck = () => {
    if (pwCheck === '') {
      setMsgJoin({ ...msgJoin, pwCheck: null });
      setIsPwCheckValid(false);
      return;
    }

    if (pw === '') {
      setMsgJoin({
        ...msgJoin,
        pw: {
          msgContent: '필수 정보입니다.',
          msgColor: 'red',
        },
        pwCheck: {
          msgContent: '비밀번호가 일치하지 않습니다.',
          msgColor: 'red',
        },
      });
      setIsPwCheckValid(false);
      return;
    }
    pwRegexCheck();
    pwMatchCheck();
  };

  // Phone
  const [phone, setPhone] = useState(['010', '', '']);
  useEffect(() => {
    setJoinInfo({
      ...joinInfo,
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
  const phoneProps = {
    title: '휴대폰번호',
    phone,
    setPhone,
    handleChangePhone,
  };

  // Email
  const [email, setEmail] = useState(['', '']);
  useEffect(() => {
    setJoinInfo({
      ...joinInfo,
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
  const emailProps = { title: '이메일', email, handleChangeEmail };

  ////////////////////////////////////

  const handleChangeInfo = (e) => {
    setJoinInfo({
      ...joinInfo,
      [e.target.name]: e.target.value,
    });
  };

  const idProps = {
    title: '아이디',
    name: 'id',
    onChange: handleChangeInfo,
    btnMsg: '중복확인',
  };
  const pwProps = {
    title: '비밀번호',
    name: 'pw',
    value: joinInfo.pw,
    onChange: handleChangeInfo,
    hasValidCheck: true,
  };
  const pwCheckProps = {
    title: '비밀번호 재확인',
    name: 'pwCheck',
    value: joinInfo.pwCheck,
    onChange: handleChangeInfo,
    hasValidCheck: true,
  };
  const nameProps = {
    title: '이름',
    name: 'name',
    value: joinInfo.name,
    onChange: handleChangeInfo,
  };
  const sellerNumProps = {
    title: '사업자 등록번호',
    name: 'sellerNum',
    value: joinInfo.sellerNum,
    onChange: handleChangeInfo,
    btnMsg: '인증',
  };
  const storeNameProps = {
    title: '스토어 이름',
    name: 'storeName',
    value: joinInfo.storeName,
    onChange: handleChangeInfo,
  };

  return (
    <div>
      <InputWithBtn
        {...idProps}
        msgInfo={msgJoin.id}
        BtnClick={checkId}
        ref={idRef}
        value={id}
        onBlur={onBlurIdCheck}
      />
      <InputPassword
        {...pwProps}
        msgInfo={msgJoin.pw}
        isValid={isPwValid}
        onBlur={onBlurPw}
      />
      <InputPassword
        {...pwCheckProps}
        msgInfo={msgJoin.pwCheck}
        isValid={isPwCheckValid}
        onBlur={onBlurPwCheck}
      />
      <InputName {...nameProps} msgInfo={msgJoin.name} />
      <InputPhone {...phoneProps} msgInfo={msgJoin.phone} />
      <InputEmail {...emailProps} msgInfo={msgJoin.email} />
      {userType === 'SELLER' && (
        <>
          <InputWithBtn {...sellerNumProps} msgInfo={msgJoin.sellerNum} />
          <InputName {...storeNameProps} msgInfo={msgJoin.storeName} />
        </>
      )}
    </div>
  );
};

export default JoinForm;
