import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InputEmail from './input/InputEmail';
import InputName from './input/InputName';
import InputPassword from './input/InputPassword';
import InputPhone from './input/InputPhone';
import InputWithBtn from './input/InputWithBtn';

const checkId = (id) => {
  const idRegex = /^[a-zA-Z0-9]{1,20}$/;
  return idRegex.test(id);
};

const checkPw = (pw) => {
  const pwRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return pwRegex.test(pw);
};

function JoinForm({
  userType,
  joinInfo,
  setJoinInfo,
  msgJoin,
  setMsgJoin,
  checkIdDup,
}) {
  const { id, pw, pwCheck, name } = joinInfo;

  // id
  useEffect(() => {
    if (id === '') {
      setMsgJoin({ ...msgJoin, id: null });
      return;
    }

    if (!checkId(id)) {
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
  }, [id]);

  // pw
  const [isPwValid, setIsPwValid] = useState(false);
  const [isPwCheckValid, setIsPwCheckValid] = useState(false);

  useEffect(() => {
    if (pw === '') {
      setMsgJoin({ ...msgJoin, pw: null });
      return;
    }
    
    if (!checkPw(pw)) {
      setMsgJoin({
        ...msgJoin,
        pw: {
          msgContent: '8자 이상, 영문 대 소문자, 숫자, 특수문자를 사용하세요.',
          msgColor: 'red',
        },
      });
    } else {
      setMsgJoin({
        ...msgJoin,
        pw: null,
      });
      setIsPwValid(true);
    }
  }, [pw]);

  const handleChangeInfo = (e) => {
    setJoinInfo({
      ...joinInfo,
      [e.target.name]: e.target.value,
    });
  };

  const idProps = {
    title: '아이디',
    name: 'id',
    value: joinInfo.id,
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

  return (
    <Container>
      <InputWithBtn {...idProps} msgInfo={msgJoin.id} onBtnClick={checkIdDup} />
      <InputPassword {...pwProps} msgInfo={msgJoin.pw} isValid={isPwValid} />
      <InputPassword {...pwCheckProps} msgInfo={msgJoin.pwCheck} isValid={isPwCheckValid} />
      <InputName {...nameProps} msgInfo={msgJoin.name} />
      <InputPhone {...phoneProps} msgInfo={msgJoin.phone} />
      <InputEmail {...emailProps} msgInfo={msgJoin.email} />
      {userType === 'SELLER' && (
        <>
          <InputWithBtn {...sellerNumProps} msgInfo={msgJoin.sellerNum} />
          <InputName {...storeNameProps} msgInfo={msgJoin.storeName} />
        </>
      )}
    </Container>
  );
}

export default JoinForm;

const Container = styled.div``;
