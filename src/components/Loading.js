import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Container>
      <span>ππββοΈπββοΈ</span>
      <br />
      μ μλ§ κΈ°λ€λ € μ£ΌμΈμ...
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
