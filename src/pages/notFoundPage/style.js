import styled from 'styled-components';

export const Container = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 750px;
`;

export const TextContainer = styled.section`
  margin-left: 50px;
  display: flex;
  flex-direction: column;

  h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
  }
  p {
    margin-top: 20px;
    font-size: 16px;
    line-height: 20px;
    color: #767676;
  }
`;

export const ButtonContainer = styled.article`
  margin-top: 40px;
  display: flex;
  button + button {
    margin-left: 14px;
  }
`;
