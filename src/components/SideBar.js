import React from 'react';
import styled from 'styled-components';

const SideBar = ({ chosenIndex, productCount, onMenuClick }) => {
  const barMenus = [
    { index: 1, title: `판매중인 상품 (${productCount})` },
    { index: 2, title: '주문/배송', num: 2 },
    { index: 3, title: '문의/리뷰', num: 1 },
    { index: 4, title: '통계' },
    { index: 5, title: '스토어 설정' },
  ];

  return (
    <Container chosenIndex={chosenIndex}>
      {barMenus.map((menu) => (
        <Button
          key={`bar_menu_${menu.index}`}
          num={menu.num}
          data-index={menu.index}
          onClick={onMenuClick}
        >
          {menu.title}
        </Button>
      ))}
    </Container>
  );
};

export default SideBar;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 250px;
  position: relative;
  flex-shrink: 0;

  button {
    color: #000000;
    background-color: #ffffff;
    &:hover {
      background-color: #effff3;
    }

    &:nth-child(${({ chosenIndex }) => chosenIndex}) {
      color: #ffffff;
      background-color: #21bf48;
    }
  }
`;

const Button = styled.button`
  padding: 15px 20px;
  font-size: 16px;
  line-height: 20px;
  border: none;
  border-radius: 5px;

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
