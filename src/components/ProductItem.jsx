import React from 'react';
import styled from 'styled-components';

function ProductItem({ imgSrc, desc, title, price }) {
  return (
    <Container>
      <Img src={imgSrc} />
      <Desc>{desc}</Desc>
      <Title>{title}</Title>
      <Price>
        <strong>{price.toLocaleString('ko-KR')}</strong>원
      </Price>
    </Container>
  );
}

export default ProductItem;

const Container = styled.article`
  justify-self: center;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const Desc = styled.p`
  margin-top: 16px;
  font-size: 16px;
  line-height: 22px;
  color: #767676;
  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 12px;
    line-height: 18px;
  }
`;

const Title = styled.h2`
  margin-top: 10px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  cursor: pointer;
  &:hover {
    color: #21BF48;
  }
  @media screen and (max-width: 768px) {
    margin-top: 6px;
    font-size: 14px;
    line-height: 18px;
  }
`;

const Price = styled.p`
  margin-top: 10px;
  font-size: 16px;
  line-height: 20px;
  strong {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 6px;
    font-size: 12px;
    line-height: 16px;
    strong {
      font-size: 20px;
      line-height: 26px;
    }
  }
`;
