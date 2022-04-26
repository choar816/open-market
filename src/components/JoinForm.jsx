import React, { useState } from 'react';
import styled from 'styled-components';
import InputEmail from './input/InputEmail';
import InputName from './input/InputName';
import InputPassword from './input/InputPassword';
import InputPhone from './input/InputPhone';
import InputWithBtn from './input/InputWithBtn';

function JoinForm({ joinInfo, msgJoin, setMsgJoin }) {
  // const msgInfo = {
  //   idValid: {
  //     msgContent: '멋진 아이디네요 :)',
  //     msgColor: 'green',
  //   },
  //   idInvalid: {
  //     msgContent: 'ID is invalid',
  //     msgColor: 'red',
  //   },
  //   pwInvalid: {
  //     msgContent: '비밀번호가 일치하지 않습니다.',
  //     msgColor: 'red',
  //   },
  // };

  // setIdMsgInfo(msgInfo.idValid);

  // const [id, setId] = useState('');
  // const [pw, setPw] = useState('');
  // const [pwCheck, setPwCheck] = useState('');
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');

  return (
    <Container>
      <InputWithBtn
        name="id"
        value={joinInfo.id}
        title="아이디"
        btnMsg="중복확인"
        msgInfo={msgJoin.id}
      />
      <InputPassword
        name="pw"
        value={joinInfo.pw}
        title="비밀번호"
        hasValidCheck={true}
        isValid={true}
        msgInfo={msgJoin.pw}
      />
      <InputPassword
        name="pwCheck"
        title="비밀번호 재확인"
        hasValidCheck={true}
        isValid={false}
        msgInfo={msgJoin.pwCheck}
      />
      <InputName name="name" title="이름" />
      <InputPhone name="phone" title="휴대폰번호" />
      <InputEmail name="email" title="이메일" />
    </Container>
  );
}

export default JoinForm;

const Container = styled.div``;

// const Message = styled.p`
//   margin-top: 26px;
//   margin-bottom: -10px;
//   font-size: 16px;
//   line-height: 20px;
//   ${({msgColor}) => {
//     if (msgColor === 'red')
//       return `color: #eb5757`;
//     else if (msgColor === 'green')
//       return `color: #21BF48`;
//   }}
//   ${({ show }) => (show ? `display: visible;` : `display: none;`)}
// `;
