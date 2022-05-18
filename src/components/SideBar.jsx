import React from 'react';
import styled from 'styled-components';

const SideBar = () => {
  return (
    <Container>
      <Button chosen>판매중인 상품</Button>
      <Button>주문/배송</Button>
      <Button num={1}>문의/리뷰</Button>
      <Button>통계</Button>
      <Button>스토어 설정</Button>
    </Container>
  );
};

export default SideBar;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 15px 20px;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  background-color: #21bf48;
  border: none;
  border-radius: 5px;
  ${({ chosen }) =>
    !chosen &&
    `
    color: #000000;
    background-color: #FFFFFF;
    &:hover {
      background-color: #EFFFF3;
    }
  `}
  & + button {
    margin-top: 10px;
  }
  ${({ num }) =>
    num &&
    `
    &::after {
      content: '${num}';
      font-size: 12px;
      position: absolute;
      right: 15px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      color: #FFFFFF;
      background-color: #EB5757;
    }
  `}
`;
