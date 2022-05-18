import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Container>
      <span>🏃🏃‍♀️🏃‍♂️</span>
      <br />
      잠시만 기다려 주세요...
    </Container>
  );
};

export default Loading;

const Container = styled.article`
  margin: 150px auto 150px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  span {
    font-size: 80px;
  }
`;
