import React from 'react';
import styled from 'styled-components';

function Logo() {
  return (
    <Img src="assets/Logo-hodu.png"/>
  );
}

const Img = styled.img`
  width: 124px;
  height: 38px;
`;

export default Logo;
