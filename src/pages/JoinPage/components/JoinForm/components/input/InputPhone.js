import React from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';
import MessageError from '../message/MessageError';
import SelectBox from './SelectBox';
import { onlyNumber } from '/src/utils/input';

const InputPhone = ({
  title,
  error,
  phone,
  setPhone,
  handleChange,
  ...props
}) => {
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
          onInput={onlyNumber}
          onChange={handleChange}
          type="text"
          maxLength="4"
          {...props}
        />
        <InputBox
          name="phoneThird"
          value={phone[2]}
          onInput={onlyNumber}
          onChange={handleChange}
          maxLength="4"
          {...props}
        />
      </div>
      {error && <MessageError content={error} />}
    </Container>
  );
};

export default React.memo(InputPhone);

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

const Title = styled.label`
  color: #767676;
  font-size: 16px;
  line-height: 20px;
`;
