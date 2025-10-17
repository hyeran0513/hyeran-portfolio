# 김혜란 포트폴리오

김혜란의 프론트엔드 개발자 포트폴리오 웹사이트입니다. <br />
Next.js 15와 TypeScript를 기반으로 제작되었으며, 다양한 프로젝트 경험과 기술 스택을 보여줍니다.

<img width="2561" height="1398" alt="hyeran-portfolio-nine vercel app_ (1)" src="https://github.com/user-attachments/assets/59579419-cb77-49b2-bc04-7c6c22270c19" />

## 🚀 주요 기능

### 📱 반응형 디자인
- 모바일, 태블릿, 데스크톱 모든 기기에서 최적화된 사용자 경험
- Tailwind CSS를 활용한 일관된 디자인 시스템

### 🎨 인터랙티브 UI/UX
- GSAP을 활용한 부드러운 애니메이션 효과
- 커스텀 커서 구현
- 스크롤 기반 인터랙션

### 📋 포트폴리오 섹션
- **프로젝트 소개**: 주요 프로젝트들 (여기G, 레저투유, 이에이트, M.A.P 등...)
- **기술 스택**: Next.js, Vue.js, TypeScript, Tailwind CSS 등
- **활동 내역**: 개발 관련 활동 및 경험
- **수상/자격증**: 관련 자격증 및 수상 경력

 ## 🛠️ 기술 스택

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: GSAP
- **Icons**: Lucide React

### Development Tools
- **Package Manager**: Yarn
- **Linting**: ESLint
- **Formatting**: Prettier
- **Version Control**: Git

## 📁 폴더 구조

```
hyeran-portfolio/
├── app/                          # Next.js App Router
│   ├── _components/              # 페이지별 컴포넌트
│   │   ├── ActicitySection.tsx   # 활동 섹션
│   │   ├── AwardSection.tsx      # 수상/자격증 섹션
│   │   ├── HeroSection.tsx       # 히어로 섹션
│   │   ├── InfoRow.tsx           # 정보 행 컴포넌트
│   │   ├── PreviewGallery.tsx    # 미리보기 갤러리
│   │   ├── ProjectModal.tsx      # 프로젝트 모달
│   │   ├── ProjectSection.tsx    # 프로젝트 섹션
│   │   └── StackSection.tsx      # 기술 스택 섹션
│   ├── favicon.ico               # 파비콘
│   ├── fonts/                    # 커스텀 폰트
│   │   ├── GmarketSansBold.woff2
│   │   ├── Pretendard-Bold.woff2
│   │   ├── Pretendard-ExtraBold.woff2
│   │   ├── Pretendard-Medium.woff2
│   │   ├── Pretendard-Regular.woff2
│   │   └── Pretendard-SemiBold.woff2
│   ├── globals.css               # 전역 스타일
│   ├── layout.tsx                # 루트 레이아웃
│   └── page.tsx                  # 메인 페이지
├── components/                   # 재사용 가능한 컴포넌트
│   ├── shared/                   # 공통 컴포넌트
│   │   ├── CustomCursor.tsx      # 커스텀 커서
│   │   ├── CircularProgress.tsx  # 원형 프로그레스
│   │   ├── FallbackImage.tsx     # 이미지 폴백
│   │   ├── Footer.tsx            # 푸터
│   │   ├── TopButton.tsx         # 맨 위로 버튼
│   │   └── header/               # 헤더 관련
│   │       ├── HamburgerButton.tsx
│   │       ├── index.tsx
│   │       ├── MobileSidebar.tsx
│   │       └── NavigationLinks.tsx
│   └── ui/                       # UI 컴포넌트
│       ├── modal.tsx             # 모달 컴포넌트
│       ├── spinner.tsx           # 스피너 컴포넌트
│       └── tabs.tsx              # 탭 컴포넌트
├── constants/                    # 상수 데이터
│   ├── activity.ts               # 활동 데이터
│   ├── award.ts                  # 수상/자격증 데이터
│   ├── project.ts                # 프로젝트 데이터
│   ├── service.ts                # 서비스 데이터
│   └── stack.ts                  # 기술 스택 데이터
├── lib/                          # 유틸리티 함수
│   └── utils.ts                  # 공통 유틸리티
├── public/                       # 정적 파일
│   ├── images/                   # 이미지 리소스
│   │   ├── company/              # 회사 로고
│   │   ├── deco/                 # 장식 이미지
│   │   ├── portfolio/            # 프로젝트 이미지
│   │   ├── stack/                # 기술 스택 로고
│   │   └── thumbnail/            # 썸네일 이미지
│   ├── og.png                    # 오픈그래프 이미지
│   └── svg/                      # SVG 아이콘
│       └── favicon.svg
├── eslint.config.mjs             # ESLint 설정
├── next-env.d.ts                 # Next.js 타입 선언
├── next.config.ts                # Next.js 설정
├── package.json                  # 프로젝트 의존성
├── postcss.config.js             # PostCSS 설정
├── tailwind.config.js            # Tailwind CSS 설정
├── tsconfig.json                 # TypeScript 설정
├── yarn.lock                     # 의존성 잠금 파일
└── node_modules/                 # 의존성 모듈
```

## 🌟 배포

### 배포 URL: https://hyeran-portfolio-nine.vercel.app/

<img width="450" height="450" alt="image" src="https://github.com/user-attachments/assets/693700ed-2161-46cb-9f0e-7306b3de6421" />

## 🎬 화면 전체 미리보기

<img width="2538" height="5016" alt="hyeran-portfolio-nine vercel app_ (2)" src="https://github.com/user-attachments/assets/46f67146-9aeb-4d4f-9f93-ea1f5009cdc2" />

