import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 30px;
`;

export const Title = styled.section`
  display: flex;
  justify-content: space-between;
  height: 50px;

  h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    span {
      font-weight: 500;
      font-size: 36px;
      line-height: 44px;
      color: #21bf48;
    }
  }
`;

export const Content = styled.section`
  display: flex;
  gap: 30px;
`;
