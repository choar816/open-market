import React from 'react';
import styled from 'styled-components';

export const MenuInPreparation = () => {
  return (
    <Container>
      <p>해당 메뉴는 준비중입니다. 🙂</p>
    </Container>
  );
};

const Container = styled.section`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;
