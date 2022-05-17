import React, { useState } from 'react';
import styled from 'styled-components';
import ColorButton from '../button/ColorButton';
import TermModal from './TermModal';
import IconUnchecked from '../../../public/assets/check-box.svg';
import IconChecked from '../../../public/assets/check-fill-box.svg';

const JoinFooter = ({ onJoinClick, canJoin, termCheck, setTermCheck }) => {
  const [isOn1, setIsOn1] = useState(false);
  const [isOn2, setIsOn2] = useState(false);

  return (
    <>
      <Container>
        <div>
          <Checkbox
            type="checkbox"
            id="checkTerms"
            onChange={() => setTermCheck(!termCheck)}
          />
          <label htmlFor="checkTerms" />
          <p>
            호두샵의 <span onClick={() => setIsOn1(true)}>이용약관</span> 및{' '}
            <span onClick={() => setIsOn2(true)}>개인정보처리방침</span>에 대한
            내용을 확인하였고 동의합니다.
          </p>
        </div>
        <ColorButton
          color={canJoin ? 'green' : 'gray'}
          onClick={canJoin ? onJoinClick : () => {}}
        >
          가입하기
        </ColorButton>
      </Container>
      <TermModal
        isOn={isOn1}
        setIsOn={setIsOn1}
        title="이용약관"
        content="content content content content content content content content"
      />
      <TermModal
        isOn={isOn2}
        setIsOn={setIsOn2}
        title="개인정보처리방침"
        content="content content content content content content content content"
      />
    </>
  );
};

export default JoinFooter;

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
