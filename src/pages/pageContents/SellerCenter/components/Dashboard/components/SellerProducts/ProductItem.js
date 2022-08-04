import React from 'react';
import styled from 'styled-components';
import ColorButton from '/src/components/button/ColorButton';

export const ProductItem = ({ image, product_name, stock, price }) => {
  return (
    <Container>
      <img src={image} />
      <div>
        <ProductName>{product_name}</ProductName>
        <Stock>재고 : {stock}개</Stock>
      </div>
      <div>{price.toLocaleString('ko-KR')}원</div>
      <div>
        <ColorButton size="S" width="80px">
          수정
        </ColorButton>
      </div>
      <div>
        <ColorButton size="S" width="80px" color="white">
          삭제
        </ColorButton>
      </div>
    </Container>
  );
};

const Container = styled.article`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #fff;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #c4c4c4;

  img {
    margin-left: 30px;
    margin-right: 30px;
    width: 70px;
    height: 70px;
    border-radius: 100px;
  }
  div {
    &:nth-child(2) {
      flex-grow: 1;
      text-align: left;
      p + p {
        margin-top: 10px;
      }
    }
    &:nth-child(3) {
      width: 300px;
      font-size: 18px;
      line-height: 22px;
    }
    &:nth-child(4),
    &:nth-child(5) {
      width: 150px;
    }
  }
`;

const ProductName = styled.p`
  font-size: 18px;
  line-height: 22px;
`;

const Stock = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #767676;
`;
