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

function onSocialClick(url) {

};

function Footer() {
  return (
    <Container>
      <UpperContainer>
        <LinkContainer>
          {links.map((item) => (
            <li>
              <a href={item.url}>{item.link}</a>
            </li>
          ))}
        </LinkContainer>
        <SocialContainer>
          {socials.map((item) => (
            <li>
              <Button imgSrc={item.imgSrc}/>
            </li>
          ))}
        </SocialContainer>
      </UpperContainer>
      <Divider />
      Ahra Cho ⓒ 2022 All rights reserved.
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 60px;
  background-color: #f2f2f2;
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
`;
