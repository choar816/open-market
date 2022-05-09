import React, { useState } from 'react';
import styled from 'styled-components';
import TabButton from './TabButton';

const TabBar = ({ tabList }) => {
  const [chosenTab, setChosenTab] = useState(0);

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
}

export default TabBar;

const Container = styled.article`
  display: flex;
`;
