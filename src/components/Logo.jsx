import React from 'react';
import styled from 'styled-components';
import ImgLogo from '../../public/assets/Logo-hodu.png';

function Logo() {
  return (
    <Img src={ImgLogo}/>
  );
}

const Img = styled.img`
  width: 124px;
  height: 38px;
`;

export default Logo;
