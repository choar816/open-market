import React from 'react';
import styled from 'styled-components';

const MessageValid = ({ content }) => {
  return <P>{content}</P>;
};

export default MessageValid;

const P = styled.p`
  color: #21bf48;
  margin-top: 10px;
  margin-bottom: -4px;
  font-size: 16px;
  line-height: 20px;
`;
