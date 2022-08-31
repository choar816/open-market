import React, { useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import ColorButton from '/src/components/button/ColorButton';
import MessageError from './MessageError';
import { onlyNumber } from '/src/utils/input';
import { openNotification } from '/src/utils/notification';
import { tryEdit } from '../../utils/sellerRequest';
import { Container, Form } from './style';
import { Button, Modal } from 'antd';
import { getProductDetail } from '/src/utils/product';
import Loading from '/src/components/Loading';
import { PageError } from '/src/components/PageError';

// TODO : 이미지 바꾸지 않으면 원래 이미지 그대로 수정되게 하기
// data.image가 이미지 URL이라 파일로 취급되지 않음
// EditProduct, UploadProduct 공통 요소 ProductForm 컴포넌트화
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

  const uploadImageRef = useRef();
  const onChangeImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImageSrc(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
    setProductInfo({ ...productInfo, image: e.target.files[0] });
  };
  const onChangeProductInfo = (e) => {
    setProductInfo((info) => ({ ...info, [e.target.name]: e.target.value }));
  };
  const onClickImage = (e) => {
    e.preventDefault();
    uploadImageRef.current.click();
  };
  const onClickShippingMethod = (e) => {
    setProductInfo((info) => ({
      ...info,
      shipping_method: e.target.dataset.method,
    }));
  };

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
      <Form>
        <section>
          <label>상품 이미지</label>
          <img
            src={imageSrc}
            value={productInfo.image}
            onClick={onClickImage}
          />
          <input
            type="file"
            accept="image/*"
            ref={uploadImageRef}
            onChange={onChangeImage}
          />
          {productError.image && <MessageError content={productError.image} />}
        </section>
        <section>
          <label>상품명</label>
          <input
            name="product_name"
            value={productInfo.product_name}
            onChange={onChangeProductInfo}
            maxLength={50}
          />
          {productError.product_name && (
            <MessageError content={productError.product_name} />
          )}
          <label>판매가</label>
          <input
            name="price"
            value={productInfo.price}
            onInput={onlyNumber}
            onChange={onChangeProductInfo}
            maxLength={10}
          />
          {productError.price && <MessageError content={productError.price} />}
          <label>배송방법</label>
          <div>
            <ColorButton
              size="MS"
              width="220px"
              data-method="DELIVERY"
              onClick={onClickShippingMethod}
              color={
                productInfo.shipping_method === 'DELIVERY' ? 'green' : 'white'
              }
            >
              택배, 소포, 등기
            </ColorButton>
            <ColorButton
              size="MS"
              width="220px"
              data-method="PARCEL"
              onClick={onClickShippingMethod}
              color={
                productInfo.shipping_method === 'PARCEL' ? 'green' : 'white'
              }
            >
              직접배송(화물배달)
            </ColorButton>
          </div>
          <label>기본 배송비</label>
          <input
            name="shipping_fee"
            value={productInfo.shipping_fee}
            onInput={onlyNumber}
            onChange={onChangeProductInfo}
            maxLength={7}
          />
          {productError.shipping_fee && (
            <MessageError content={productError.shipping_fee} />
          )}
          <label>재고</label>
          <input
            name="stock"
            value={productInfo.stock}
            onInput={onlyNumber}
            onChange={onChangeProductInfo}
            maxLength={7}
          />
          {productError.stock && <MessageError content={productError.stock} />}
        </section>
        <section>
          <label>상품 상세 정보</label>
          <textarea
            name="product_info"
            value={productInfo.product_info}
            onChange={onChangeProductInfo}
          />
          {productError.product_info && (
            <MessageError content={productError.product_info} />
          )}
          <div>
            <ColorButton
              width="200px"
              size="M"
              color="white"
              onClick={onClickCancel}
            >
              취소
            </ColorButton>
            <ColorButton width="200px" size="M" onClick={onClickSave}>
              저장하기
            </ColorButton>
          </div>
        </section>
      </Form>
      <Modal
        title="상품 수정 성공 🥳"
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
