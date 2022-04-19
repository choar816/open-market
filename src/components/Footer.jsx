import React from 'react';
import styled from 'styled-components';
import imgInsta from '../../public/assets/icon-insta.svg';
import imgFacebook from '../../public/assets/icon-fb.svg';
import imgYoutube from '../../public/assets/icon-yt.svg';

const links = [
  {
    link: '호두샵 소개',
    url: 'https://choar816.github.io/intro-choar/',
  },
  {
    link: '이용약관',
    url: 'https://choar816.github.io/intro-choar/',
  },
  {
    link: '개인정보처리방침',
    url: 'https://choar816.github.io/intro-choar/',
  },
  {
    link: '전자금융거래약관',
    url: 'https://choar816.github.io/intro-choar/',
  },
  {
    link: '청소년보호정책',
    url: 'https://choar816.github.io/intro-choar/',
  },
  {
    link: '제휴문의',
    url: 'https://choar816.github.io/intro-choar/',
  },
];

const socials = [
  {
    type: 'instagram',
    imgSrc: imgInsta,
    url: 'https://www.instagram.com/',
  },
  {
    type: 'facebook',
    imgSrc: imgFacebook,
    url: 'https://www.facebook.com/',
  },
  {
    type: 'youtube',
    imgSrc: imgYoutube,
    url: 'https://www.youtube.com/',
  },
];

const lowerList = [
  '(주)HODU SHOP',
  '제주특별자치도 제주시 동광고 137 제주코딩베이스캠프',
  '사업자 번호 : 000-0000-0000 | 통신판매업',
  '대표 : 김호두',
];

function onSocialClick(url) {}

function Footer() {
  return (
    <Container>
      <UpperContainer>
        <LinkContainer>
          {links.map((item, idx) => (
            <li key={idx}>
              <a href={item.url}>{item.link}</a>
            </li>
          ))}
        </LinkContainer>
        <SocialContainer>
          {socials.map((item, idx) => (
            <li key={idx}>
              <Button imgSrc={item.imgSrc} />
            </li>
          ))}
        </SocialContainer>
      </UpperContainer>
      <Divider />
      <LowerContainer>
        {lowerList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </LowerContainer>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  padding: 60px;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const UpperContainer = styled.section`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`;

const LinkContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
  li + li::before {
    content: '|';
    margin-right: 10px;
  }
  a {
    font-size: 14px;
    color: #000;
    &:hover {
      font-weight: 700;
    }
  }
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
  @media screen and (max-width: 576px) {
    gap: 5px;
    li + li::before {
      margin-right: 5px;
    }
    a {
      font-size: 12px;
    }
  }
`;

const SocialContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-self: center;
  gap: 14px;
`;

const Button = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  ${({ imgSrc }) => `background-image: url(${imgSrc});`}
`;

const Divider = styled.div`
  margin-top: 22px;
  margin-bottom: 30px;
  width: 100%;
  height: 1px;
  background-color: #c4c4c4;
  @media screen and (max-width: 768px) {
    margin-top: 16px;
    margin-bottom: 20px;
  }
`;

const LowerContainer = styled.ul`
  display: flex;
  flex-direction: column;
  li {
    color: #767676;
    font-size: 14px;
    line-height: 24px;
    &:first-child {
      font-weight: 700;
    }
  }
  @media screen and (max-width: 576px) {
    li {
      font-size: 12px;
      line-height: 20px;
    }
  }
`;
