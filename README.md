# open-market
오픈마켓은 판매자와 구매자를 구별하여 판매자가 상품을 등록, 판매하며 구매자는 구매하는 플랫폼입니다.
- 상품을 판매하려고 한다면 판매자로 로그인하여 상품 정보를 등록 및 수정할 수 있습니다.
- 판매자가 상품을 구매하는 것은 불가능합니다.
- 오픈마켓에 등록되어 있는 상품을 구매하고자 한다면 상품의 세부사항을 확인한 뒤, 장바구니에 넣어, 상품을 구매할 수 있습니다.
- 본 사이트는 Chrome에서 가장 이상적으로 작동합니다.
- [배포 링크](https://choar816.github.io/open-market)

## Tech Stack
`React`, `JavaScript`, `React Router`

## Challenges
- [x] 반응형 레이아웃 구현 (MainPage, Header, Footer)
- [x] Image Carousel 직접 구현
- [x] 로그인 기능
- [x] 회원가입 기능
  - [x] 비밀번호, 비밀번호 재확인 - focus blur시 유효성 확인
- [x] 상품 목록 페이지 구현
- [x] 상품 상세 페이지 구현
  - [ ] '바로 구매' 버튼 동작 구현
  - [x] '장바구니' 버튼 동작 구현 (장바구니에 추가)
- [x] 장바구니 페이지 구현
  - [x] 상품 수량 조절 기능
  - [x] 상품 삭제 기능
  - [x] 체크박스와 가격 연동
- [ ] 주문 페이지 구현
- [x] 각종 예외처리
  - [x] 로딩중 화면 처리 (상품 목록 페이지, 상품 상세 페이지, 장바구니 페이지)
  - [x] 권한이 없을 경우 처리 (로그인하지 않고 장바구니 페이지 접근, 재고 이상으로 장바구니에 추가하려고 시도할 경우 등)
  - [x] 없는 페이지에 접근할 경우 처리 ([없는 상품 페이지](https://choar816.github.io/open-market/#/product/0)에 접근할 경우, [없는 URL](https://choar816.github.io/open-market/#/hello)에 접근할 경우)
  - [x] 데이터가 없을 경우 처리 (상품이 0개일 때 메인 페이지)

## Available Scripts
프로젝트 폴더 내에서 실행 가능한 명령어입니다.

### `yarn run dev`
개발모드로 앱을 실행합니다.
[http://localhost:8080](http://localhost:8080)에서 확인 가능합니다.

### `yarn run build`
`dist` 폴더에 앱을 빌드합니다.

- 샘플 회원 id & pw
  - (구매회원) id: buyer1, pw: hodu0910
  - (구매회원) id: buyer2, pw: hodu0910
  - (구매회원) id: buyer3, pw: hodu0910
  - (판매회원) id: seller1, pw: hodu0910
  - (판매회원) id: seller2, pw: hodu0910
  - (판매회원) id: seller3, pw: hodu0910
