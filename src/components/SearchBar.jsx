import React from 'react';
import styled from 'styled-components';
import IconSearch from '../../public/assets/icon-search.svg';

function SearchBar() {
  return (
    <Container>
      <input type="text" placeholder="상품을 검색해보세요!" />
      <button />
    </Container>
  );
}

export default SearchBar;

const Container = styled.article`
  margin-left: 30px;
  margin-right: 30px;
  padding: 8px 22px;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  border: 2px solid #21bf48;
  border-radius: 50px;
  
  input {
    width: 100%;
    font-size: 16px;
    line-height: 20px;
    border: none;
    outline: none;
  }

  button {
    margin-left: 10px;
    width: 28px;
    height: 28px;
    background: url(${IconSearch}) center/100% no-repeat;
    border: none;
  }

  @media screen and (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    padding: 6px 16px;

    input {
      font-size: 12px;
      line-height: 16px;
    }
    button {
      width: 20px;
      height: 20px;
    }
  }
`;