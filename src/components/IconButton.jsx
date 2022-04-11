import React from 'react';
import styled from 'styled-components';

function IconButton({ src, children }) {
  return (
    <Container>
      <img src={src}></img>
      <p>{children}</p>
    </Container>
  )
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  text-align: center;
  img {
    margin: 0 auto;
    width: 32px;
    height: 32px;
  }
  p {
    margin-top: 7px;
    color: #767676;
    font-size: 12px;
    line-height: 14px;
  }
`;

export default IconButton;
