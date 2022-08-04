import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '/src/components/Header';
import Footer from '/src/components/Footer';
import styled from 'styled-components';

export const PageLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
