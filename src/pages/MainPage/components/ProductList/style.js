import styled from "styled-components";

export const Container = styled.section`
  padding: 80px 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 80px;
  grid-column-gap: 30px;

  @media screen and (max-width: 1024px) {
    padding: 50px 40px;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 60px;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
    grid-row-gap: 30px;
  }
  @media screen and (max-width: 576px) {
    padding: 10px;
    padding-top: 20px;
    padding-bottom: 60px;
    grid-row-gap: 20px;
    grid-column-gap: 10px;
  }
`;