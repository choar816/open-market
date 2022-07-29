import React from 'react';
import styled from 'styled-components';

const SideBarContent = () => {
  return (
    <Container>
      <Header>
        <div>상품정보</div>
        <div>판매가격</div>
        <div>수정</div>
        <div>삭제</div>
      </Header>
      <List>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
      </List>
    </Container>
  );
};

export default SideBarContent;

const Container = styled.section`
  flex-grow: 1;
  height: 400px;
  display: flex;
  flex-direction: column;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background-color: #f2f2f2;
  overflow: hidden;
`;

const Header = styled.article`
  display: flex;
  background-color: #fff;
  padding-top: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid #c4c4c4;

  div {
    text-align: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;

    &:nth-child(1) {
      flex-grow: 1;
    }
    &:nth-child(2) {
      width: 200px;
    }
    &:nth-child(3),
    &:nth-child(4) {
      width: 100px;
    }
  }
`;

const List = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: scroll;

  li {
    flex-shrink: 0;
    width: 100%;
    height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #c4c4c4;
  }
`;
