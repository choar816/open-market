import React, { useState } from 'react';
import styled from 'styled-components';
import TabBar from './TabBar';
import TabContent from './TabContent';

const ProductDetail = () => {
  const [chosenTab, setChosenTab] = useState(0);
  const tabList = ['상세정보', '리뷰', 'Q&A', '반품/교환정보'];

  return (
    <section>
      <TabBar
        tabList={tabList}
        chosenTab={chosenTab}
        setChosenTab={setChosenTab}
      />
      <TabContent chosenTab={chosenTab} />
    </section>
  );
};

export default ProductDetail;
