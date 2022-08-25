import React from 'react';
import styled from 'styled-components';
import ColorButton from '/src/components/button/ColorButton';

export const ProductItem = ({ image, product_name, stock, price }) => {
  return (
    <Container>
      <div>
        <img src={image} />
        <div>
          <ProductName>{product_name}</ProductName>
          <Stock>재고 : {stock}개</Stock>
        </div>
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
    width: 70px;
    height: 70px;
    border-radius: 100px;
    object-fit: cover;
  }
  div {
    &:nth-child(1) {
      flex: 2;
      display: flex;
      align-items: center;
      gap: 30px;
      text-align: left;
      p + p {
        margin-top: 10px;
      }
    }
    &:nth-child(2) {
      flex: 2;
      font-size: 18px;
      line-height: 22px;
    }
    &:nth-child(3),
    &:nth-child(4) {
      flex: 1;
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
