import React, { useState } from 'react';
import styled from 'styled-components';
import ImgMinus from '../../public/assets/icon-minus-line.svg';
import ImgPlus from '../../public/assets/icon-plus-line.svg';
import ImgPlusDisabled from '../../public/assets/icon-plus-line-disabled.svg';

function AmountPicker({ disabled }) {
  const [amount, setAmount] = useState(1);
  const increaseAmount = () => setAmount(amount + 1);
  const decreaseAmount = () => setAmount(amount > 0 ? amount - 1 : 0);

  return (
    <Container>
      <Button onClick={decreaseAmount} src={ImgMinus} />
      <div>{amount}</div>
      {disabled || <Button onClick={increaseAmount} src={ImgPlus} disabled={disabled} />}
      {disabled && <Button src={ImgPlusDisabled} disabled={disabled} />}
    </Container>
  );
}

export default AmountPicker;

const Container = styled.article`
  overflow: hidden;
  display: flex;
  width: 150px;
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
  ${({ disabled }) => disabled && `
    background-color: #E0E0E0;
  `}
`;
