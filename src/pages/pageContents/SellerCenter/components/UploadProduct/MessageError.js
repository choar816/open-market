import React from 'react';
import styled from 'styled-components';

const MessageError = ({ content }) => {
  return <P>{content}</P>;
};

export default MessageError;

const P = styled.p`
  color: #eb5757; // red
  margin-top: 8px;
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 20px;
`;
