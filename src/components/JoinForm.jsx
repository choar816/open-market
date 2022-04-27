import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InputEmail from './input/InputEmail';
import InputName from './input/InputName';
import InputPassword from './input/InputPassword';
import InputPhone from './input/InputPhone';
import InputWithBtn from './input/InputWithBtn';

function JoinForm({ joinInfo, setJoinInfo, msgJoin, setMsgJoin }) {
  useEffect(() => {
    console.log(joinInfo);
  }, [
    joinInfo.id,
    joinInfo.pw,
    joinInfo.pwCheck,
    joinInfo.name,
    joinInfo.phone,
    joinInfo.email,
  ]);

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
    msgInfo: msgJoin.id,
    onChange: handleChangeInfo,
    btnMsg: '중복확인',
  };
  const pwProps = {
    title: '비밀번호',
    name: 'pw',
    value: joinInfo.pw,
    msgInfo: msgJoin.pw,
    onChange: handleChangeInfo,
    hasValidCheck: true,
    isValid: true, // temporary
  };
  const pwCheckProps = {
    title: '비밀번호 재확인',
    name: 'pwCheck',
    value: joinInfo.pwCheck,
    msgInfo: msgJoin.pwCheck,
    onChange: handleChangeInfo,
    hasValidCheck: true,
    isValid: false, // temporary
  };
  const nameProps = {
    title: '이름',
    name: 'name',
    value: joinInfo.name,
    msgInfo: msgJoin.name,
    onChange: handleChangeInfo,
  };

  // Phone
  const [phone, setPhone] = useState(['010', '', '']);
  const handleChangePhone = (e) => {
    const newPhone = [...phone];
    if (e.target.name === 'phoneSecond') {
      newPhone[1] = e.target.value;
    } else if (e.target.name === 'phoneThird') {
      newPhone[2] = e.target.value;
    }
    setPhone(newPhone);
  };
  const phoneProps = { title: '휴대폰번호', phone, setPhone, handleChangePhone };

  // Email
  const [email, setEmail] = useState(['', '']);
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
      <InputWithBtn {...idProps} />
      <InputPassword {...pwProps} />
      <InputPassword {...pwCheckProps} />
      <InputName {...nameProps} />
      <InputPhone {...phoneProps} />
      <InputEmail {...emailProps} />
    </Container>
  );
}

export default JoinForm;

const Container = styled.div``;
