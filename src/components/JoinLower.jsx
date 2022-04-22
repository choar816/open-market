import React, { useState } from 'react';
import styled from 'styled-components';
import ColorButton from './ColorButton';

function JoinLower() {
  const [canJoin, setCanJoin] = useState(false);
  const toggleCanJoin = () => {
    setCanJoin(!canJoin);
  }
  
  return (
    <Container>
      <div>
        <input type="checkbox" id="checkTerms" />
        <label htmlFor="checkTerms">
          호두샵의 <span>이용약관</span> 및 <span>개인정보처리방침</span>에 대한 내용을
          확인하였고 동의합니다.
        </label>
      </div>
      <ColorButton size="M" color={canJoin ? "green" : "gray"}>가입하기</ColorButton>
    </Container>
  );
}

export default JoinLower;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  padding: 35px;

  div {
    display: flex;
    align-items: flex-start;
  }
  input {
    margin-top: 4px;
  }
  label {
    margin-left: 10px;
    color: #767676;
    font-size: 16px;
    line-height: 20px;
    span {
      text-decoration: underline;
      font-weight: 700;
      cursor: pointer;
    }
  }
  button {
    margin-top: 34px;
  }
`;
