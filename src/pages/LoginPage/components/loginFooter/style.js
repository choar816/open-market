import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 30px;
  display: flex;

  li {
    font-size: 16px;
    line-height: 20px;
    &:not(:last-child) {
      margin-right: 10px;
    }
    & + li::before {
      content: '|';
      margin-right: 10px;
    }
  }

  a {
    cursor: pointer;
  }
`;
