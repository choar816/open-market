import React from 'react';
import styled from 'styled-components';

function IconButton(props) {
  return (
    <Container>
      <img src={props.src}></img>
      <p>{props.title}</p>
    </Container>
  )
}

const Container = styled.article`
  width: 50px;
  display: flex;
  flex-direction: column;
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
