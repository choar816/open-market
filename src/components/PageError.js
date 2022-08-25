import React from 'react';
import styled from 'styled-components';

export const PageError = ({ emoji, message }) => {
  return (
    <Container>
      <span>{emoji}</span>
      <br />
      {message}
    </Container>
  );
};

const Container = styled.article`
  margin: 150px auto 150px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  span {
    font-size: 80px;
  }
`;
