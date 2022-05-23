import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImgMinus from '../../public/assets/icon-minus-line.svg';
import ImgPlus from '../../public/assets/icon-plus-line.svg';
import ImgPlusDisabled from '../../public/assets/icon-plus-line-disabled.svg';

const AmountPicker = ({ amount, stock, onIncrease, onDecrease }) => {
  const [isLimit, setIsLimit] = useState(amount === stock);
  useEffect(() => {
    if (amount >= stock) setIsLimit(true);
    else setIsLimit(false);
  }, [amount, stock]);

  return (
    <Container>
      <Button onClick={onDecrease} src={ImgMinus} />
      <div>{amount}</div>
      {isLimit ? (
        <Button src={ImgPlusDisabled} isLimit={isLimit} />
      ) : (
        <Button onClick={onIncrease} src={ImgPlus} isLimit={isLimit} />
      )}
    </Container>
  );
};

export default AmountPicker;

const Container = styled.article`
  overflow: hidden;
  display: flex;
  width: 150px;
  height: 50px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;

  div {
    width: 50px;
    border-left: 1px solid #c4c4c4;
    border-right: 1px solid #c4c4c4;
    font-size: 18px;
    line-height: 48px;
    text-align: center;
  }
`;

const Button = styled.button`
  flex-grow: 1;
  padding: 14px;
  border: none;
  background: url('${({ src }) => src}') no-repeat center;
  ${({ isLimit }) =>
    isLimit &&
    `
    background-color: #E0E0E0;
  `}
`;
