import React from 'react';

function JoinForm() {
  return (
    <>
      <p>아이디</p>
      <input type="text" placeholder='아이디'/>
      <p>비밀번호</p>
      <input type="password" placeholder='비밀번호' />
      <p>비밀번호 재확인</p>
      <input type="password" />
    </>
  );
}

export default JoinForm;
