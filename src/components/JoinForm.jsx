import React, { useState } from 'react';
import styled from 'styled-components';
import DropdownNum from './input/DropdownPhone';
import InputEmail from './input/InputEmail';
import InputName from './input/InputName';
import InputPassword from './input/InputPassword';
import InputPhone from './input/InputPhone';
import InputWithBtn from './input/InputWithBtn';

function JoinForm() {
  const [idMsgInfo, setIdMsgInfo] = useState(null);

  const msgInfo = {
    idValid: {
      msgContent: '멋진 아이디네요 :)',
      msgColor: 'green',
    },
    idInvalid: {
      msgContent: 'ID is invalid',
      msgColor: 'red',
    },
    pwInvalid: {
      msgContent: '비밀번호가 일치하지 않습니다.',
      msgColor: 'red',
    },
  };

  return (
    <Container>
      <InputWithBtn title="아이디" btnMsg="중복확인" msgInfo={idMsgInfo} />
      <InputPassword title="비밀번호" hasValidCheck={true} isValid={true} />
      <InputPassword
        title="비밀번호 재확인"
        hasValidCheck={true}
        isValid={false}
      />
      <InputName title="이름" />
      <InputPhone title="휴대폰번호" />
      <InputEmail title="이메일" />
    </Container>
  );
}

export default JoinForm;

const Container = styled.div``;
