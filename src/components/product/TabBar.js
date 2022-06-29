import React from 'react';
import styled from 'styled-components';

const TabButton = ({ onClick, chosen, children }) => {
  return <Button onClick={onClick} chosen={chosen} children={children} />;
};

const TabBar = ({ tabList, chosenTab, setChosenTab }) => {
  return (
    <Container>
      {tabList.map((val, idx) => (
        <TabButton
          key={idx}
          chosen={idx === chosenTab}
          onClick={() => setChosenTab(idx)}
        >
          {val}
        </TabButton>
      ))}
    </Container>
  );
};

export default TabBar;

const Container = styled.article`
  margin-bottom: 30px;
  display: flex;
`;

const Button = styled.button`
  width: 320px;
  padding: 18px 0 12px;
  font-weight: 700;
  font-size: 18px;
  color: #21bf48;
  background-color: #ffffff;
  border: none;
  border-bottom: 6px solid #21bf48;

  ${({ chosen }) =>
    !chosen &&
    `
    font-weight: 500;
    color: #767676;
    border-bottom: 6px solid #E0E0E0;
  `}
`;
