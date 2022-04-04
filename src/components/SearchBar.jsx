import React from 'react';
import styled from 'styled-components';

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
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  padding: 8px 22px;
  width: 300px;
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
    background: url('assets/icon-search.svg') 100% no-repeat;
    border: none;
  }
`;