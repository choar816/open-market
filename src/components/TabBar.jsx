import React from 'react';
import styled from 'styled-components';
import TabButton from './TabButton';

function TabBar() {
  return (
    <Container>
      <TabButton chosen>TabButton</TabButton>
      <TabButton>TabButton</TabButton>
    </Container>
  )
}

export default TabBar;

const Container = styled.article`
  display: flex;
`;