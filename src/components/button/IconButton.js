import React from 'react';
import styled from 'styled-components';

const IconButton = ({ onClick, src, children }) => {
  return (
    <Container onClick={onClick}>
      <img src={src}></img>
      <p>{children}</p>
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  text-align: center;
  cursor: pointer;
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
  @media screen and (max-width: 768px) {
    img {
      width: 20px;
    }
  }
  @media screen and (max-width: 576px) {
    p {
      margin-top: 0;
      font-size: 10px;
      line-height: 12px;
    }
  }
`;

export default IconButton;
