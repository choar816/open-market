import React from 'react';
import styled from 'styled-components';

const MessageError = ({ content }) => {
  return <P>{content}</P>;
};

export default MessageError;

const P = styled.p`
  color: #eb5757; // red
  margin-top: 10px;
  margin-bottom: -4px;
  font-size: 16px;
  line-height: 20px;
`;
