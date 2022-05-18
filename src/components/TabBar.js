import React from 'react';
import styled from 'styled-components';
import TabButton from './TabButton';

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
