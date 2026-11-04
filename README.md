# Forest Library

도서 검색과 이용 안내, 인기 대출 도서, 사서 추천 도서를 한 화면에서 탐색할 수 있도록 제작한 React 기반 도서관 웹사이트입니다.  
페이지를 기능 단위 컴포넌트로 분리하고, 도서 데이터를 기반으로 선택된 도서 정보를 동적으로 렌더링했습니다.

> 현재 메인 페이지를 중심으로 개발 중인 개인 학습 프로젝트입니다.

## 링크

- [배포 사이트](https://zlse226.github.io/library-github/)
- [GitHub 저장소](https://github.com/zlse226/library-github)

## 미리보기

![Forest Library 메인 화면](src/assets/hero.png)

## 사용 기술

- React 19
- JavaScript
- CSS3
- Vite
- ESLint

## 주요 기능

### 컴포넌트 기반 UI

- `Header`, `SearchBar`, `QuickMenu`, `SideMenu`, `Popular`, `Recommend`로 화면을 분리했습니다.
- 각 컴포넌트의 스타일을 별도 CSS 파일로 관리합니다.

### 인기 대출 도서

- 도서 정보를 객체 배열로 관리합니다.
- `useState`로 현재 도서 인덱스를 관리하고 이전·다음 버튼으로 변경합니다.
- 현재 도서와 다음 도서의 표지, 제목, 저자, 출판사, 청구기호, 소장 위치를 동적으로 렌더링합니다.
- 마지막 도서 다음에는 첫 번째 도서가 나오도록 순환 구조를 구현했습니다.

### 추천·신작 도서

- 추천 도서의 설명과 메타데이터를 배열로 구성했습니다.
- 선택된 도서에 따라 표지, 설명, 저자, 번역가, 출판사, 청구기호를 함께 갱신합니다.
- 이전·다음 탐색 시 목록의 시작과 끝이 자연스럽게 이어지도록 처리했습니다.

### 도서관 이용 정보

- 운영시간과 주요 서비스로 빠르게 이동할 수 있는 퀵 메뉴를 제공합니다.
- 반투명 사이드 메뉴와 검색 UI를 메인 비주얼 위에 배치했습니다.

## 프로젝트 구조

```text
library-github/
├── public/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── QuickMenu.jsx
│   │   ├── SideMenu.jsx
│   │   ├── Popular.jsx
│   │   └── Recommend.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## 실행 방법

```bash
git clone https://github.com/zlse226/library-github.git
cd library-github
npm install
npm run dev
```

배포용 파일을 생성하려면 다음 명령을 실행합니다.

```bash
npm run build
```

## 구현하며 배운 점

- 기능 단위의 React 컴포넌트 설계
- `useState`를 이용한 선택 상태와 화면 렌더링 관리
- 배열 인덱스와 나머지 연산을 활용한 순환 탐색
- 객체 배열을 기반으로 반복되는 UI 데이터 관리
- Vite 기반 React 프로젝트의 개발·빌드 과정

## 개선 계획

- 검색어와 도서 데이터를 연결한 실제 검색 기능
- 상세 페이지와 카테고리 필터링
- React Router를 이용한 페이지 이동
- 추천 도서 캐러셀의 인접 도서 표지 표시 개선
- 반응형 레이아웃과 웹 접근성 보완
- 외부 도서 API 또는 별도 데이터 파일 연동

