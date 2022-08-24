import React, { useRef, useState } from 'react';
import ColorButton from '/src/components/button/ColorButton';
import { Container, Content, Warning, Form } from './style';
import ImgUpload from '/public/assets/img-upload.png';
import { onlyNumber } from '/src/utils/input';
import { uploadProduct } from '../../utils/sellerRequest';

export const UploadProduct = () => {
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
  const onClickSave = () => {
    const formData = new FormData();
    formData.append('product_name', productInfo.product_name);
    formData.append('image', productInfo.image);
    formData.append('price', productInfo.price);
    formData.append('shipping_method', productInfo.shipping_method);
    formData.append('shipping_fee', productInfo.shipping_fee);
    formData.append('stock', productInfo.stock);
    formData.append('product_info', productInfo.product_info);
    uploadProduct(formData)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
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
          </section>
          <section>
            <label>상품명</label>
            <input
              name="product_name"
              value={productInfo.product_name}
              onChange={onChangeProductInfo}
              maxLength={50}
            />
            <label>판매가</label>
            <input
              name="price"
              value={productInfo.price}
              onInput={onlyNumber}
              onChange={onChangeProductInfo}
              maxLength={10}
            />
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
            <label>재고</label>
            <input
              name="stock"
              value={productInfo.stock}
              onInput={onlyNumber}
              onChange={onChangeProductInfo}
              maxLength={7}
            />
          </section>
          <section>
            <label>상품 상세 정보</label>
            <textarea
              name="product_info"
              value={productInfo.product_info}
              onChange={onChangeProductInfo}
            />
            <div>
              <ColorButton width="200px" size="M" color="white">
                취소
              </ColorButton>
              <ColorButton width="200px" size="M" onClick={onClickSave}>
                저장하기
              </ColorButton>
            </div>
          </section>
        </Form>
      </Content>
    </Container>
  );
};
