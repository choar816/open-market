import React from 'react';
import styled from 'styled-components';
import InputBox from './input/InputBox';
import InputPassword from './input/InputPassword';
import InputWithBtn from './input/InputWithBtn';

function JoinForm() {
  return (
    <Container>
      <InputWithBtn title="아이디" btnMsg="중복확인" />
      <InputWithBtn
        title="아이디"
        btnMsg="중복확인"
        showMsg={true}
        msgContent="멋진 아이디네요 :)"
        msgColor="#21BF48"
      />
      <InputWithBtn
        title="아이디"
        btnMsg="중복확인"
        showMsg={true}
        msgContent="비밀번호가 일치하지 않습니다."
        msgColor="#EB5757"
      />
      <InputWithBtn title="title" btnMsg="btnMsg" />
      <InputPassword title="title" btnMsg="btnMsg" hasValidCheck={true} isValid={true} />
      <InputPassword title="title" btnMsg="btnMsg" hasValidCheck={true} isValid={false} />
    </Container>
  );
}

export default JoinForm;

const Container = styled.div``;
