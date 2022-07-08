import React from 'react';
import { Container, Desc, Img, Price, Title } from './style';

const ProductItem = ({ item, onClick }) => {
  const { image, product_info, product_name, price } = item;

  return (
    <Container>
      <Img src={image} onClick={onClick} />
      <Desc>{product_info}</Desc>
      <Title onClick={onClick}>{product_name}</Title>
      <Price>
        <strong>{price.toLocaleString('ko-KR')}</strong>원
      </Price>
    </Container>
  );
};

export default ProductItem;
