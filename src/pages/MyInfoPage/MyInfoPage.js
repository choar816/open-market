import React from 'react';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import { MyInfo } from './components/MyInfo';
import styled from 'styled-components';

const MyInfoPage = () => {
  return (
    <Container>
      <Header />
      <MyInfo />
      <Footer />
    </Container>
  );
};

export default MyInfoPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
