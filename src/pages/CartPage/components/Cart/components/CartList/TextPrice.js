import React from 'react';
import styled from 'styled-components';

const TextPrice = ({ title, price, color }) => {
  return (
    <Container color={color}>
      <h2>{title}</h2>
      <p>
        <span>{price.toLocaleString('ko-KR')}</span>원
      </p>
    </Container>
  );
};

export default React.memo(TextPrice);

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;

  h2 {
    font-size: 16px;
    line-height: 20px;
  }

  p {
    ${({ color }) => {
      switch (color) {
        case 'black':
          return 'color: #000000;';
        case 'red':
          return 'color: #EB5757;';
      }
    }}
    margin-top: 12px;
    font-size: 16px;
    line-height: 20px;

    span {
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
    }
  }
`;

TextPrice.defaultProps = {
  width: '100%',
  size: 'M',
  color: 'black',
};
