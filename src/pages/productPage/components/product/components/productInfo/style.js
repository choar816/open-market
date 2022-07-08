import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 630px;

  @media screen and (max-width: 1400px) {
    width: 500px;
  }
`;

export const PartFirst = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
`;

export const PartThird = styled.section`
  display: flex;
  flex-direction: column;
`;

export const PartPrice = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  & > p {
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
  }
  div {
    display: flex;
    align-items: flex-end;
    p + p::before {
      content: '';
      display: inline-block;
      position: relative;
      top: 2px;
      width: 1px;
      height: 17px;
      background-color: #c4c4c4;
      margin-left: 12px;
      margin-right: 12px;
    }
  }
`;

export const PartBtn = styled.article`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  gap: 14px;
  button:nth-child(1) {
    flex-shrink: 1;
  }
`;

export const Divider = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  height: 2px;
  background-color: #c4c4c4;
`;

export const StoreName = styled.p`
  font-size: 18px;
  line-height: 23px;
`;

export const ProductName = styled.p`
  margin-top: 16px;
  font-size: 36px;
  line-height: 45px;
`;

export const ProductPrice = styled.p`
  margin-top: 20px;
  font-size: 18px;
  line-height: 23px;
  span {
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
  }
`;

export const Delivery = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #767676;
`;

export const TotalAmount = styled.p`
  font-size: 18px;
  line-height: 23px;
  color: #767676;
  span {
    color: #21bf48;
  }
`;

export const TotalPrice = styled.p`
  font-size: 18px;
  line-height: 23px;
  color: #21bf48;
  span {
    font-weight: 700;
    font-size: 36px;
    line-height: 45px;
    display: inline-block;
    margin-bottom: -8px;
  }
`;
