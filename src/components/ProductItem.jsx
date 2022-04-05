import React from 'react';
import styled from 'styled-components';

function ProductItem(props) {
  return (
    <Container>
      <img src={props.src} />
      <p>{props.desc}</p>
      <h2>{props.title}</h2>
      <p>
        <strong>{props.price.toLocaleString('ko-KR')}</strong>원
      </p>
    </Container>
  );
}

export default ProductItem;

const Container = styled.article`
  display: flex;
  flex-direction: column;

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
  }
  p:nth-child(2) {
    margin-top: 16px;
    color: #767676;
    font-size: 16px;
    line-height: 22px;
  }
  h2 {
    margin-top: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
  p:nth-child(4) {
    margin-top: 10px;
    font-size: 16px;
    line-height: 20px;
    strong {
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
    }
  }
`;
