import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownNum from './DropdownPhone';
import InputEmail from './input/InputEmail';
import InputName from './input/InputName';
import InputPassword from './input/InputPassword';
import InputPhone from './input/InputPhone';
import InputWithBtn from './input/InputWithBtn';

function JoinForm() {
  const [phone, usePhone] = useState('010');

  function onPhoneSelect(e) {
    console.log(e.target.textContent);
  }

  const msgInfo = {
    idValid: {
      msgContent: '멋진 아이디네요 :)',
      msgColor: 'green',
    },
    idInvalid: {
      msgContent: 'ID is invalid',
      msgColor: 'red',
    },
  };

  return (
    <Container>
      <InputWithBtn title="아이디" btnMsg="중복확인" />
      <InputWithBtn
        title="아이디"
        btnMsg="중복확인"
        msgInfo={msgInfo.idValid}
      />
      <InputWithBtn
        title="아이디"
        btnMsg="중복확인"
        msgInfo={msgInfo.idInvalid}
      />
      <InputPassword
        title="비밀번호"
        hasValidCheck={true}
        isValid={true}
      />
      <InputPassword
        title="비밀번호 재확인"
        hasValidCheck={true}
        isValid={false}
      />
      <InputName title="이름" />
      <InputPhone title="휴대폰번호" />
      <InputEmail title="이메일" />
      <DropdownNum onClick={onPhoneSelect} />
    </Container>
  );
}

export default JoinForm;

const Container = styled.div``;
