import React, { useRef } from 'react';
import { onlyNumber } from '/src/utils/input';
import ColorButton from '/src/components/button/ColorButton';
import { MessageError } from './MessageError';
import { Form } from './style';

export const ProductForm = ({
  productInfo,
  setProductInfo,
  productError,
  imageSrc,
  setImageSrc,
  onClickCancel,
  onClickSave,
}) => {
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

  return (
    <Form>
      <section>
        <label>상품 이미지</label>
        <img src={imageSrc} value={productInfo.image} onClick={onClickImage} />
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
            color={productInfo.shipping_method === 'PARCEL' ? 'green' : 'white'}
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
  );
};
