import Thumbnail from '../../public/thumbnail.png';

export const setMetaTag = ({
  title = '오픈마켓',
  description = '때때로 사고 팔면 즐겁지 아니한가?',
  image = Thumbnail,
}) => {
  //set title
  document.querySelector('title').textContent = title;

  //set description
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute('content', description);

  //set images
  document
    .querySelector('meta[property="og:image"]')
    .setAttribute('content', image);
};
