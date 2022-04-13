import React from 'react';
import styled from 'styled-components';
import ProductItem from '../components/ProductItem';
import Product1 from '../../public/assets/product-1.jpg';
import Product2 from '../../public/assets/product-2.jpg';
import Product3 from '../../public/assets/product-3.jpg';
import Product4 from '../../public/assets/product-4.jpg';
import Product5 from '../../public/assets/product-5.jpg';

const products = [
  {
    imgSrc: Product1,
    desc: '우당탕탕 라이캣의 실험실',
    title: 'Hack Your Life 개발자 노트북 파우치',
    price: 29000,
  },
  {
    imgSrc: Product2,
    desc: 'desc22222222222',
    title: 'title2222222222',
    price: 12345678,
  },
  {
    imgSrc: Product3,
    desc: 'desc3333333333',
    title: 'title33333333',
    price: 239874689,
  },
  {
    imgSrc: Product4,
    desc: 'desc444444',
    title: 'title444444',
    price: 101010101,
  },
  {
    imgSrc: Product5,
    desc: 'desc55555',
    title: 'title55555',
    price: 1010101010101,
  },
];

function ProductList() {
  return (
    <Container>
      {products.map((item) => (
        <ProductItem
          imgSrc={item.imgSrc}
          desc={item.desc}
          title={item.title}
          price={item.price}
        />
      ))}
    </Container>
  );
}

export default ProductList;

const Container = styled.section`
  padding: 80px 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 80px;
  @media screen and (max-width: 1024px) {
    padding: 50px 40px;
    grid-row-gap: 60px;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
    grid-row-gap: 30px;
  }
`;
