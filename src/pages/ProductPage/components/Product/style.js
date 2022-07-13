import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;
  padding-top: 80px;
  padding-bottom: 80px;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 140px;

  @media screen and (max-width: 1400px) {
    gap: 70px;
  }
`;

export const ContainerUpper = styled.section`
  display: flex;
  justify-content: center;
  gap: 50px;

  & > img {
    width: 600px;
    height: 600px;
    object-fit: cover;
  }

  @media screen and (max-width: 1400px) {
    & > img {
      width: 500px;
      height: 500px;
    }
  }
  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
`;
