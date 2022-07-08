import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 1280px;

  @media screen and (max-width: 1400px) {
    width: 100vw;
    padding-left: 60px;
    padding-right: 60px;
  }
`;

export const TabContainer = styled.article`
  margin-bottom: 30px;

  display: flex;
  width: 100%;
`;

export const TabButton = styled.button`
  width: 100%;
  padding: 18px 0 12px;
  font-weight: 700;
  font-size: 18px;
  color: #21bf48;
  background-color: #ffffff;
  border: none;
  border-bottom: 6px solid #21bf48;

  ${({ chosen }) =>
    !chosen &&
    `
    font-weight: 500;
    color: #767676;
    border-bottom: 6px solid #E0E0E0;
  `}
`;

export const TabContent = styled.article`
  h2 {
    margin-bottom: 10px;
    font-size: 22px;
  }
  p {
    font-size: 18px;
  }
`;
