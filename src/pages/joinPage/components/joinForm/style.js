import styled from "styled-components";
import IconUnchecked from '/public/assets/check-box.svg';
import IconChecked from '/public/assets/check-fill-box.svg';

export const FormContainer = styled.section`
  width: 550px;
  position: relative;
  z-index: 10;
  padding: 35px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  padding: 35px;

  div {
    display: flex;
    align-items: flex-start;
  }
  p {
    margin-left: 10px;
    color: #767676;
    font-size: 16px;
    line-height: 20px;
    span {
      text-decoration: underline;
      font-weight: 700;
      cursor: pointer;
    }
  }
  button {
    margin-top: 34px;
  }
`;

export const Checkbox = styled.input`
  display: none;
  & + label {
    width: 17px;
    height: 16px;
    margin-top: 1px;
    background: url(${IconUnchecked}) center/16px 16px;
  }
  &:checked + label {
    background-image: url(${IconChecked});
  }
`;
