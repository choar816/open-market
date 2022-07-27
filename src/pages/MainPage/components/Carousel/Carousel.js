import React, { useState } from 'react';
import { carouselImgs } from '../../utils/carousel';
import {
  ButtonNext,
  ButtonPrev,
  Container,
  Image,
  ImageContainer,
  Indicator,
  IndicatorContainer,
} from './style';

const Carousel = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const onClickPrev = () => {
    if (activeIdx === 0) return;
    setActiveIdx(activeIdx - 1);
  };
  const onClickNext = () => {
    if (activeIdx === carouselImgs.length - 1) return;
    setActiveIdx(activeIdx + 1);
  };

  return (
    <Container>
      <ImageContainer activeIdx={activeIdx}>
        {carouselImgs.map((img, idx) => (
          <Image key={`img_${idx}`} src={img.src} alt={img.alt} />
        ))}
      </ImageContainer>
      <IndicatorContainer activeIdx={activeIdx}>
        {carouselImgs.map((img, idx) => (
          <Indicator
            key={`indicator_${idx}`}
            onClick={() => setActiveIdx(idx)}
          />
        ))}
      </IndicatorContainer>
      <ButtonPrev onClick={onClickPrev} />
      <ButtonNext onClick={onClickNext} />
    </Container>
  );
};

export default Carousel;
