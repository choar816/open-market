import styled from 'styled-components';
import IconOn from '/public/assets/check-circle-on.svg';
import IconOff from '/public/assets/check-circle-off.svg';

export const Container = styled.article`
  margin-top: 50px;
  margin-bottom: 35px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;

  width: 1280px;
  background-color: #f2f2f2;

  div {
    font-size: 18px;
    line-height: 23px;
    text-align: center;
  }
`;

export const Checkbox = styled.input`
  display: none;
  & + label {
    width: 20px;
    height: 20px;
    margin-top: 1px;
    margin-left: 30px;
    background: url(${IconOff}) center/20px 20px;
  }
  &:checked + label {
    background-image: url(${IconOn});
  }
`;

export const ItemInfoContainer = styled.div`
  flex-grow: 1;
`;

export const AmountContainer = styled.div`
  width: 250px;
`;

export const PriceContainer = styled.div`
  width: 300px;
`;
