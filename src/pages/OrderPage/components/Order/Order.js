import React, { useEffect, useState } from 'react';
import { OrderList } from './components/OrderList';
import { OrderForm } from './components/OrderForm';
import { OrderPay } from './components/OrderPay';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import styled from 'styled-components';

export const Order = ({ data }) => {
  const [orderFormData, setOrderFormData] = useState({
    receiver: '',
    receiver_phone_number: '',
    address: '',
    address_message: '',
    payment_method: '',
  });

  const onChangeOrderForm = (e) => {
    setOrderFormData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const openPostcodePopup = useDaumPostcodePopup();

  const setPostcode = (data) => {
    const { zonecode, address: addressFirst } = data;

    const newAddress = [...address];
    newAddress[0] = zonecode;
    newAddress[1] = addressFirst;

    setAddress(newAddress);
    console.log(newAddress);
  };

  const onClickPostcode = () => {
    console.log('postal code clicked');
    openPostcodePopup({ onComplete: setPostcode });
  };

  const onClickPayMethod = (e) => {
    setOrderFormData((data) => {
      return { ...data, payment_method: e.target.id };
    });
  };

  const [address, setAddress] = useState(['', '', '']);
  const onChangeOrderAddress = (e) => {
    const newAddress = [...address];
    if (e.target.name === 'address1') {
      newAddress[0] = e.target.value;
    } else if (e.target.name === 'address2') {
      newAddress[1] = e.target.value;
    } else if (e.target.name === 'address3') {
      newAddress[2] = e.target.value;
    }
    setAddress(newAddress);
  };

  useEffect(() => {
    setOrderFormData((data) => {
      return {
        ...data,
        address: address.join(' '),
      };
    });
  }, [address]);

  useEffect(() => {
    console.log(orderFormData);
  }, [orderFormData]);

  const onClickPay = () => {};

  return (
    <Container>
      <Title>주문/결제하기</Title>
      <OrderList data={data} />
      <OrderForm
        onChangeOrderForm={onChangeOrderForm}
        onChangeOrderAddress={onChangeOrderAddress}
        onClickPostcode={onClickPostcode}
        address={address}
      />
      <OrderPay data={data} onClickPayMethod={onClickPayMethod} />
    </Container>
  );
};

const Container = styled.main`
  width: 1280px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
  align-self: center;
  padding: 54px;

  h3 {
    margin-bottom: 18px;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
  }
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
`;
