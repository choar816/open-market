import styled from "styled-components";
import ImgLogo from '/public/assets/Logo-hodu.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;

  & > img {
    width: 230px;
  }
`;

export const Logo = styled.div`
  background: url(${ImgLogo}) no-repeat center;
  width: 300px;
  height: 100px;
  cursor: pointer;
`;

export const FormType = styled.article`
  width: 550px;
  margin-top: 50px;
  position: relative;
  top: 20px;
  display: flex;

  button {
    padding-top: 20px;
    padding-bottom: 40px;
    width: 100%;
    font-size: 18px;
    background: none;
    border: 1px solid #c4c4c4;
    border-bottom: none;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  ${({ selected }) => `
    button:nth-child(${selected === 'SELLER' ? 2 : 1}) {
      z-index: 20;
      background: #fff;
    }
    button:nth-child(${selected === 'BUYER' ? 2 : 1}) {
      z-index: 0;
      background: #F2F2F2;
    }
  `}

  &::after {
    content: '';
    position: absolute;
    z-index: 30;
    top: 64px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 25px;
    background-color: #fff;
  }
`;
