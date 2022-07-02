import styled from 'styled-components';
import { carouselImgs } from '../../utils/carousel';
import BtnPrev from '/public/assets/arrow-left.svg';
import BtnNext from '/public/assets/arrow-right.svg';

export const Container = styled.section`
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

export const ImageContainer = styled.section`
  width: calc(100% * ${carouselImgs.length});
  height: 500px;
  display: flex;
  transition: all 1s;
  transform: ${({ activeIdx }) => `translateX(calc(-${activeIdx} * 100%))`};
`;

export const Image = styled.div`
  width: 100%;
  height: 500px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center center;
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

export const Button = styled.button`
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

export const ButtonPrev = styled(Button)`
  left: 10px;
  background-image: url(${BtnPrev});
`;

export const ButtonNext = styled(Button)`
  right: 10px;
  background-image: url(${BtnNext});
`;

export const IndicatorContainer = styled.article`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;

  button:nth-child(${({ activeIdx }) => activeIdx + 1}) {
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export const Indicator = styled.button`
  width: 8px;
  height: 8px;
  border: none;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  transition: background-color 0.5s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
  & + button {
    margin-left: 10px;
  }
`;
