import React, { useState } from 'react';
import styled from 'styled-components';
import ColorButton from './ColorButton';
import IconUnchecked from '../../public/assets/check-box.svg';
import IconChecked from '../../public/assets/check-fill-box.svg';

function JoinLower() {
  const [canJoin, setCanJoin] = useState(false);
  const toggleCanJoin = () => {
    setCanJoin(!canJoin);
  }
  
  return (
    <Container>
      <div>
        <Checkbox type="checkbox" id="checkTerms" onClick={toggleCanJoin} />
        <label htmlFor="checkTerms" />
        <p>호두샵의 <span>이용약관</span> 및 <span>개인정보처리방침</span>에 대한 내용을 확인하였고 동의합니다.</p>
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
  p {
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

const Checkbox = styled.input`
  display: none;
  & + label {
    width: 17px;
    height: 16px;
    margin-top: 1px;
    background: url(${IconUnchecked}) center/16px 16px;
  }
  &:checked + label {
    background-image: url(${IconChecked});
  }
`;