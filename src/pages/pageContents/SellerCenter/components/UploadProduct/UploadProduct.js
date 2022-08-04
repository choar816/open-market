import React from 'react';
import styled from 'styled-components';
import ColorButton from '/src/components/button/ColorButton';

export const UploadProduct = () => {
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
            <div>ㅁㄴㅇㄹ</div>
          </section>
          <section>
            <label>상품명</label>
            <input />
            <label>판매가</label>
            <input />
            <label>배송방법</label>
            <div>
              <ColorButton width="220px" size="MS">
                택배, 소포, 등기
              </ColorButton>
              <ColorButton width="220px" size="MS" color="white">
                직접배송(화물배달)
              </ColorButton>
            </div>
            <label>기본 배송비</label>
            <input />
            <label>재고</label>
            <input />
          </section>
          <section>
            <label>상품 상세 정보</label>
            <textarea />
            <div>
              <ColorButton width="200px" size="M" color="white">
                취소
              </ColorButton>
              <ColorButton width="200px" size="M">
                저장하기
              </ColorButton>
            </div>
          </section>
        </Form>
      </Content>
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 50px;

  h2 {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
  }
`;

const Content = styled.section`
  display: flex;
  gap: 80px;
`;

const Warning = styled.section`
  flex-shrink: 0;
  width: 320px;

  h3 {
    color: #eb5757;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
  article {
    margin-top: 10px;
    padding: 20px;
    background-color: #ffefe8;
    border-radius: 5px;
  }
`;

const Form = styled.section`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  section:nth-child(1) {
    div {
      width: 460px;
      height: 460px;
      background-color: gray;
    }
  }
  section:nth-child(2) {
    flex-grow: 1;
    input:nth-child(2) {
      width: 100%;
    }
    div {
      display: flex;
      gap: 10px;
      margin-bottom: 16px;
    }
  }
  section:nth-child(3) {
    width: 100%;
    textarea {
      width: 100%;
      height: 500px;
      resize: none;
      border: 1px solid #c4c4c4;
      border-radius: 5px;
    }
    div {
      margin-top: 50px;
      display: flex;
      justify-content: flex-end;
      gap: 14px;
    }
  }

  label {
    margin-bottom: 10px;
    display: block;
    color: #767676;
    font-size: 16px;
    line-height: 20px;
  }
  input {
    padding: 16px;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    & + label {
      margin-top: 16px;
    }
  }
`;
