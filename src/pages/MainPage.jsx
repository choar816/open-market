import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Header from '../components/Header';
import ProductItem from '../components/ProductItem';
import Product1 from '../../public/assets/product-1.jpg';
import Product2 from '../../public/assets/product-2.jpg';
import Product3 from '../../public/assets/product-3.jpg';
import Product4 from '../../public/assets/product-4.jpg';
import Product5 from '../../public/assets/product-5.jpg';

function MainPage() {
  return (
    <Container>
      <Header></Header>
      <Carousel className="carousel" showThumbs={false} width="100%" dynamicHeight={true}>
        <div>
          <img src={Product1} alt="" />
        </div>
        <div>
          <img src={Product2} alt="" />
        </div>
        <div>
          <img src={Product3} alt="" />
        </div>
        <div>
          <img src={Product4} alt="" />
        </div>
        <div>
          <img src={Product5} alt="" />
        </div>
      </Carousel>
    </Container>
  )
}

export default MainPage;

const Container = styled.section`
  display: flex;
  flex-direction: column;

  .carousel img {
    height: 500px;
    object-fit: cover;
  }
`;
