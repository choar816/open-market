import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 50px;

  h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
  }
`;

export const Content = styled.section`
  display: flex;
  gap: 80px;
`;

export const Warning = styled.section`
  flex-shrink: 0;
  width: 320px;

  h3 {
    color: #eb5757;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  article {
    margin-top: 10px;
    padding: 20px;
    background-color: #ffefe8;
    border-radius: 5px;
  }
`;

export const Form = styled.section`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  section:nth-child(1) {
    img {
      width: 460px;
      height: 460px;
      object-fit: cover;
      cursor: pointer;
    }
    input {
      display: none;
    }
  }
  section:nth-child(2) {
    flex-grow: 1;
    input {
      padding: 16px;
      border: 1px solid #c4c4c4;
      border-radius: 5px;
      &:nth-child(2) {
        width: 100%;
      }
      & + label {
        margin-top: 16px;
      }
    }
    div {
      display: flex;
      gap: 10px;
      margin-bottom: 16px;
    }
  }
  section:nth-child(3) {
    width: 100%;
    textarea {
      width: 100%;
      height: 200px;
      resize: none;
      padding: 16px;
      border: 1px solid #c4c4c4;
      border-radius: 5px;
    }
    div {
      margin-top: 50px;
      display: flex;
      justify-content: flex-end;
      gap: 14px;
    }
  }
  label {
    margin-bottom: 10px;
    display: block;
    color: #767676;
    font-size: 16px;
    line-height: 20px;
  } 
`;
