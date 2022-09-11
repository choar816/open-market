import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 10;
  padding: 35px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 10px;

  input + input {
    margin-top: 6px;
  }
  button {
    margin-top: 36px;
  }
`;

export const Message = styled.p`
  margin-top: 26px;
  margin-bottom: -10px;
  font-size: 16px;
  line-height: 20px;
  color: #eb5757;
`;