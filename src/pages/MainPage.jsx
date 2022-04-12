import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

function MainPage() {
  return (
    <Container>
      <Header></Header>
    </Container>
  )
}

export default MainPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
