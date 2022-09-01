import React from 'react';
import styled from 'styled-components';

export const MessageError = ({ content }) => {
  return <P>{content}</P>;
};

const P = styled.p`
  color: #eb5757; // red
  margin-top: 8px;
  margin-bottom: 12px;
  font-size: 16px;
  line-height: 20px;
`;
