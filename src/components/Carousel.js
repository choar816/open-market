import React, { useState } from 'react';
import styled from 'styled-components';
import CarouselIndicator from './CarouselIndicator';
import { carouselImgs } from '../util/carousel';
import BtnPrev from '../../public/assets/arrow-left.svg';
import BtnNext from '../../public/assets/arrow-right.svg';

const Carousel = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <Container>
      <ImageContainer activeIdx={activeIdx}>
        {carouselImgs.map((img, idx) => (
          <Image key={idx} src={img.src} alt={img.alt} />
        ))}
      </ImageContainer>
      <IndicatorContainer activeIdx={activeIdx}>
        {carouselImgs.map((img, idx) => (
          <CarouselIndicator key={idx} onClick={() => setActiveIdx(idx)} />
        ))}
      </IndicatorContainer>
      <ButtonPrev
        onClick={() => {
          if (activeIdx === 0) return;
          setActiveIdx(activeIdx - 1);
        }}
      />
      <ButtonNext
        onClick={() => {
          if (activeIdx === carouselImgs.length - 1) return;
          setActiveIdx(activeIdx + 1);
        }}
      />
    </Container>
  );
};

export default Carousel;

const Container = styled.section`
  display: flex;
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;

  button {
    z-index: 10;
    padding: 0;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

const ImageContainer = styled.section`
  width: calc(100% * ${carouselImgs.length});
  height: 500px;
  display: flex;
  transition: all 1s;
  transform: ${(props) => `translateX(calc(-${props.activeIdx} * 100%))`};
`;

const Image = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border: none;
  opacity: 0.3;
  background: none;
  background-size: cover;
  transition: opacity 0.5s;
  &:hover {
    opacity: 0.5;
  }
`;

const ButtonPrev = styled(Button)`
  left: 10px;
  background-image: url(${BtnPrev});
`;

const ButtonNext = styled(Button)`
  right: 10px;
  background-image: url(${BtnNext});
`;

const IndicatorContainer = styled.article`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;

  button:nth-child(${(props) => props.activeIdx + 1}) {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
