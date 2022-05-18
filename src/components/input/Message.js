import React from 'react';
import styled from 'styled-components';

const Message = ({ msgColor, msgContent }) => {
  return <Paragraph msgColor={msgColor}>{msgContent}</Paragraph>;
};

export default Message;

const Paragraph = styled.p`
  ${({ msgColor }) => {
    switch (msgColor) {
      case 'green':
        return 'color: #21BF48;';
      case 'red':
        return 'color: #EB5757;';
      default:
        return 'color: blue;'; // Error
    }
  }}
  margin-top: 10px;
  margin-bottom: -4px;
  font-size: 16px;
  line-height: 20px;
`;
