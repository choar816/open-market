import React, { useState } from 'react';
import { tabData } from './utils/tabData';
import { Container, TabContainer, TabButton, TabContent } from './style';

const ProductTabs = () => {
  const [chosenTab, setChosenTab] = useState(0);
  const tabList = ['상세정보', '리뷰', 'Q&A', '반품/교환정보'];

  return (
    <Container>
      <TabContainer>
        {tabList.map((tabTitle, idx) => (
          <TabButton
            key={idx}
            chosen={idx === chosenTab}
            onClick={() => setChosenTab(idx)}
          >
            {tabTitle}
          </TabButton>
        ))}
      </TabContainer>
      <TabContent>
        <h2>{tabData[chosenTab].title}</h2>
        <p>{tabData[chosenTab].content}</p>
      </TabContent>
    </Container>
  );
};

export default ProductTabs;
