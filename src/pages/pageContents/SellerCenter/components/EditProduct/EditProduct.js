import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { openNotification } from '/src/utils/notification';
import { getProductDetail } from '/src/utils/product';
import { tryEdit } from '../../utils/sellerRequest';
import Loading from '/src/components/Loading';
import { PageError } from '/src/components/PageError';
import { ProductForm } from '../ProductForm';
import { Button, Modal } from 'antd';
import { Container } from './style';

// TODO : 이미지 바꾸지 않으면 원래 이미지 그대로 수정되게 하기
// data.image가 이미지 URL이라 파일로 취급되지 않음
// (지금 - 이미지 바꿔야만 수정 완료)
export const EditProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [productInfo, setProductInfo] = useState({});
  const { data, isLoading, error, refetch } = useQuery(
    ['sellerProductInfo', params.id],
    () => getProductDetail(params.id),
    {
      enabled: false,
      onSuccess: (data) => {
        setImageSrc(data.image);
        setProductInfo({ ...data });
      },
    },
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    refetch();
  }, [params.id]);

  const [productError, setProductError] = useState({
    product_name: '',
    image: '',
    price: '',
    shipping_fee: '',
    stock: '',
    product_info: '',
  });

  const onClickCancel = () => {
    navigate('/seller_center');
  };
  const onClickSave = async () => {
    const result = await tryEdit(productInfo);

    if (result === true) {
      setIsModalVisible(true);
    } else {
      for (const key of Object.keys(productError)) {
        setProductError((error) => ({ ...error, [key]: '' }));
      }
      setProductError(result);
      openNotification({
        type: 'error',
        message: '상품 등록에 실패했습니다.',
        description: '각 입력창 하단 에러 메시지를 참고하세요.',
        placement: 'bottomLeft',
      });
    }
  };

  if (isLoading) return <Loading />;
  if (data?.detail === '찾을 수 없습니다.')
    return <PageError emoji="😶‍🌫️" message="해당 상품은 존재하지 않습니다." />;
  if (error)
    return <PageError emoji="😭" message={`에러 발생: ${error.message}`} />;

  return (
    <Container>
      <h2>상품 수정</h2>
      <ProductForm
        productInfo={productInfo}
        setProductInfo={setProductInfo}
        productError={productError}
        setProductError={setProductError}
        imageSrc={imageSrc}
        setImageSrc={setImageSrc}
        onClickCancel={onClickCancel}
        onClickSave={onClickSave}
      />
      <Modal
        title="상품 등록 성공 🥳"
        visible={isModalVisible}
        footer={[
          <Button key="back" onClick={() => navigate('/seller_center')}>
            판매자 센터 가기
          </Button>,
          <Button key="link" type="primary" onClick={() => navigate('/')}>
            메인 화면 가기
          </Button>,
        ]}
        centered
      >
        <p>상품 수정에 성공하셨습니다!</p>
      </Modal>
    </Container>
  );
};
