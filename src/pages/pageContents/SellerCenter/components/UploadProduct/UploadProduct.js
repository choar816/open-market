import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { openNotification } from '/src/utils/notification';
import { trySave } from '../../utils/sellerRequest';
import { ProductForm } from '../ProductForm';
import { Container, Content, Warning } from './style';
import { Modal } from 'antd';
import ImgUpload from '/public/assets/img-upload.png';

export const UploadProduct = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState(ImgUpload);
  const [productInfo, setProductInfo] = useState({
    product_name: '',
    image: '',
    price: '',
    shipping_method: 'DELIVERY',
    shipping_fee: '',
    stock: '',
    product_info: '',
  });
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
    const result = await trySave(productInfo);
    for (const key of Object.keys(productError)) {
      setProductError((error) => ({ ...error, [key]: '' }));
    }

    if (result.is_succeeded) {
      setIsModalVisible(true);
    } else {
      setProductError(result);
      openNotification({
        type: 'error',
        message: '상품 등록에 실패했습니다.',
        description: '각 입력창 하단 에러 메시지를 참고하세요.',
        placement: 'bottomLeft',
      });
    }
  };
  const onClickUploadMore = () => {
    setIsModalVisible(false);
    window.location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <h2>상품 등록</h2>
      <Content>
        <Warning>
          <h3>*상품 등록 주의사항</h3>
          <article>
            - 너무 귀여운 사진은 심장이 아파올 수 있습니다.
            <br />
            <br />- 유소년에게서 천자만홍이 피고 이상이 온갖 들어 약동하다.
            이상의 가지에 사랑의 있는가? 주며, 끓는 힘차게 얼음이 얼음 가치를
            황금시대의 있음으로써 사라지지 것이다. 이 뜨거운지라, 이상의 속에서
            이것은 피가 보배를 황금시대의 싹이 사막이다.
            <br />
            <br />- 자신과 우는 옷을 지혜는 아니다. 더운지라 설레는 기쁘며,
            위하여서, 평화스러운 광야에서 그리하였는가? 소담스러운 위하여
            인도하겠다는 어디 무엇을 이상을 같지 따뜻한 청춘 칼이다.
            <br />
            <br />- 가치를 그들을 예수는 찬미를 가슴이 과실이 이것이다. 희망의
            것이다.보라, 풍부하게 이것은 황금시대를 얼마나 인간에 돋고,
            이것이다.
          </article>
        </Warning>
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
      </Content>
      <Modal
        title="상품 등록 성공 🥳"
        visible={isModalVisible}
        onOk={() => navigate('/seller_center')}
        onCancel={onClickUploadMore}
        okText={'판매자 센터 가기'}
        cancelText={'상품 더 등록하기'}
        centered
      >
        <p>상품 등록에 성공하셨습니다!</p>
      </Modal>
    </Container>
  );
};
