import React from 'react';
import { useQuery } from 'react-query';
import Loading from '/src/components/Loading';
import ErrorMessage from '/src/components/ErrorMessage';
import { OrderList } from '/src/pages/OrderPage/components/Order/components/OrderList';
import {
  getOrder,
  getOrderDetails,
  getOrderQuantities,
} from '../../utils/myInfoRequest';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

const MyInfo = () => {
  const { data: orders, isLoading, error } = useQuery('orders', getOrder);
  const {
    data: orderDetails,
    isLoading: isLoadingDetails,
    error: errorDetails,
  } = useQuery('orderDetails', getOrderDetails);
  const {
    data: quantities,
    isLoading: isLoadingQuantities,
    error: errorQuantities,
  } = useQuery('orderQuantities', getOrderQuantities);

  if (isLoading || isLoadingDetails || isLoadingQuantities) return <Loading />;

  if (error || errorDetails || errorQuantities)
    return <ErrorMessage emoji={'😭'} message="에러가 발생혰어요." />;

  return (
    <Container>
      <h2>주문목록</h2>
      {orderDetails.map((items, idxOrder) => {
        const {
          order_number,
          created_at,
          delivery_status,
          receiver,
          receiver_phone_number,
          address,
        } = orders[idxOrder];

        items.forEach((item, idxItem) => {
          item.quantity = quantities[idxOrder][idxItem];
        });

        return (
          <section key={order_number}>
            <h3>주문번호 {order_number}</h3>
            <Row>
              <Col span={4}>주문일자</Col>
              <Col span={20}>{created_at}</Col>
            </Row>
            <Row>
              <Col span={4}>발송현황</Col>
              <Col span={20}>{delivery_status}</Col>
            </Row>
            <Row>
              <Col span={4}>수령인</Col>
              <Col span={20}>
                {receiver}, {receiver_phone_number}
              </Col>
            </Row>
            <Row>
              <Col span={4}>배송주소</Col>
              <Col span={20}>{address}</Col>
            </Row>
            <OrderList data={items} />
          </section>
        );
      })}
    </Container>
  );
};

export default MyInfo;

const Container = styled.main`
  align-self: center;
  width: 1322px;
  padding-top: 50px;
  padding-bottom: 50px;

  h2 {
    text-align: center;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: #000000;
  }

  h3 {
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
  }

  & > section {
    margin-top: 30px;
    padding: 20px;
    border: 1px solid #e2e2e2;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgb(0 0 0 / 10%);
    & > section {
      margin-top: 20px;
    }
  }
`;
