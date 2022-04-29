import React, { useState } from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';
import SelectBox from './SelectBox';

function InputPhone({ ...props }) {
  const { title, msgInfo, phone, setPhone, handleChangePhone } = props;

  const onSelect = (e) => {
    const newPhone = [...phone];
    newPhone[0] = e.target.textContent;
    setPhone(newPhone);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <div>
        <SelectBox
          name="phoneFirst"
          phoneFirst={phone[0]}
          onSelect={onSelect}
          {...props}
        />
        <InputBox
          name="phoneSecond"
          value={phone[1]}
          onChange={handleChangePhone}
          {...props}
        />
        <InputBox
          name="phoneThird"
          value={phone[2]}
          onChange={handleChangePhone}
          {...props}
        />
      </div>
      {msgInfo && (
        <Message msgColor={msgInfo.msgColor} msgContent={msgInfo.msgContent} />
      )}
    </Container>
  );
}

export default InputPhone;

const Container = styled.article`
  display: flex;
  flex-direction: column;

  div {
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 11px;
    & > * {
      flex: 1;
    }
  }
  & + article {
    margin-top: 16px;
  }
`;

const Title = styled.p`
  color: #767676;
  font-size: 16px;
  line-height: 20px;
`;
