// 개인 프로젝트
export const PROJECT_HYERAN = {
  type: '개인 프로젝트' as const,
  name: '김혜란 포트폴리오',
  period: '2025.09.17 - 무제한',
  members: '프론트엔드 1명',
  description:
    '저의 개인 포트폴리오 웹사이트입니다. 프론트엔드 개발자로서의 경험과 기술 스택을 보여줍니다.',
  url: 'https://hyeran-portfolio-nine.vercel.app/',
  tags: ['반응형', '개인 프로젝트'],
  stacks: [
    { name: 'Next.js', logo: '/images/stack/next.png' },
    { name: 'Tailwind CSS', logo: '/images/stack/tailwindcss.png' },
    { name: 'GitHub', logo: '/images/stack/github.png' },
  ],
  images: [
    { src: '/images/portfolio/hyeran/hyeran_hero.png', label: '히어로 섹션' },
    { src: '/images/portfolio/hyeran/hyeran_project.png', label: '프로젝트 섹션' },
    { src: '/images/portfolio/hyeran/hyeran_project_modal.png', label: '프로젝트 모달' },
    { src: '/images/portfolio/hyeran/hyeran_stack_activity.png', label: '스택/활동 섹션' },
    { src: '/images/portfolio/hyeran/hyeran_award.png', label: '수상/자격증 섹션' },
  ],
  thumbnail: '/images/thumbnail/hyeran.png',
  reflection: `Figma로 디자인을 작업하고, Next.js와 Tailwind CSS를 활용하여 웹사이트를 구현했습니다. GSAP을 활용하여 부드러운 애니메이션 효과를 적용했고, 커스텀 커서 및 시선 추적 기능을 구현하여 사용자에게 재미 요소를 보여줄 수 있도록 했습니다. FallbackImage를 활용하여 이미지 로딩 스핀을 통해 사용자가 대기 중인 것을 알 수 있도록 하였고, 탑 버튼을 클릭하면 페이지 상단으로 이동하도록 했습니다. 프로젝트 모달을 통해 프로젝트 상세 정보를 확인할 수 있도록 했으며, 화면 미리 보기 클릭 시 확대되는 효과를 통해 사용자가 프로젝트를 더 자세히 확인할 수 있도록 했습니다. lcp 최적화를 위해 이미지 크기를 조절하고, lazy loading을 적용하여 성능을 최적화했습니다. 직접 디자인을 하면서 Figma 툴에 대해 더 익힐 수 있었고, 사용자 측면에서 편리하게 사용할 수 있도록 고민하는 과정이 재미있었습니다.`,
} as const;

// 여기G
export const PROJECT_LOGY = {
  type: '팀 프로젝트' as const,
  name: '여기G',
  period: '2025.08.15 - 2025.08.20',
  members: '프론트엔드 2명 / 백엔드 1명 / 디자이너 1명',
  description:
    '챗봇을 통해 물류비와 절차를 문의하고, 여기G에서 진행한 견적 요청 내역을 한눈에 확인할 수 있는 수출입 물류 플랫폼입니다.',
  url: 'https://galpha.seairhub.com/logy',
  tags: ['반응형', '기업 프로젝트'],
  stacks: [
    { name: 'Next.js', logo: '/images/stack/next.png' },
    { name: 'Zustand', logo: '/images/stack/zustand.png' },
    { name: 'Zod', logo: '/images/stack/zod.png' },
    { name: 'Tailwind CSS', logo: '/images/stack/tailwindcss.png' },
    { name: 'GitHub', logo: '/images/stack/github.png' },
  ],
  thumbnail: '/images/thumbnail/logy.png',
  responsibilities: {
    b2c: [
      '레이아웃 (헤더/푸터)',
      '디자인 시스템 가이드',
      '메인 페이지',
      '내 정보 수정 페이지',
      '회원가입 (약관 동의 / 본인인증 / 회원 유형 / 가입 정보)',
      '로그인',
      '로그인 비번 찾기 페이지',
    ],
  },
  images: [
    { src: '/images/portfolio/logy/logy_main.png', label: '메인 페이지' },
    { src: '/images/portfolio/logy/logy_signup.png', label: '회원가입' },
    { src: '/images/portfolio/logy/logy_estimate.png', label: '견적 요청' },
    { src: '/images/portfolio/logy/logy_blog.png', label: '블로그' },
    {
      src: '/images/portfolio/logy/logy_blog_detail.png',
      label: '블로그 상세',
    },
    { src: '/images/portfolio/logy/logy_chatbot.png', label: '챗봇' },
  ],
  reflection: `회원가입 과정을 단계별로 나누고, 입력할 때마다 실시간으로 유효성을 검사해서 사용자가 편하게 진행할 수 있도록 만들었습니다.
상태 관리는 Zustand로 중앙에서 관리하되, 기능별로 컴포넌트를 독립적으로 분리해 재사용성과 유지보수가 쉽도록 했습니다.
TypeScript로 타입을 엄격하게 정의해 예상치 못한 런타임 에러를 미리 막을 수 있게 했으며, 
사용자 경험을 생각해서 디자인에 없는 부분(ex. 404 에러 처리)도 넣어, 실제 사용 시 더 가치 있는 인터페이스가 되도록 했습니다.`,
} as const;

// 레저투유
export const PROJECT_L2U = {
  type: '팀 프로젝트' as const,
  name: '레저투유',
  period: '2025.06.04 - 2025.08.14',
  members: '프론트엔드 2명 / 백엔드 1명 / 디자이너 1명',
  description: 'SUT 토큰을 활용한 온체인 결제 시스템을 제공하는 숙박 예약 플랫폼입니다.',
  url: 'https://l2u.co.kr/',
  tags: ['반응형', '기업 프로젝트'],
  stacks: [
    { name: 'Next.js', logo: '/images/stack/next.png' },
    { name: 'Zustand', logo: '/images/stack/zustand.png' },
    { name: 'Zod', logo: '/images/stack/zod.png' },
    { name: 'Tailwind CSS', logo: '/images/stack/tailwindcss.png' },
    { name: 'GitHub', logo: '/images/stack/github.png' },
  ],
  thumbnail: '/images/thumbnail/l2u.png',
  responsibilities: {
    b2c: [
      '레이아웃 (헤더/푸터)',
      '랜딩 페이지 (검색 영역 제외)',
      '숙소 상세 페이지 (리뷰 영역 제외)',
      '객실 페이지',
      '마이페이지',
      '예약 내역 페이지',
      '예약 완료/취소 페이지',
      '내 정보 관리',
      'LT 멤버십 (Leisure Trust) 정보',
      '공지사항',
      'FAQ',
      '고객센터',
      '약관 및 정책',
      '레저투유 소개',
      '탈퇴 페이지',
      '로그인 (네이버 / 구글 연동)',
      '비회원 예약 내역 조회 모달',
    ],
    admin: [
      '대시보드',
      '메인 관리 (상단 배너 / SUT 공급가 설정 / 하이엔트 컬렉션 / 멤버십 배너 / 인기 추천 숙소 / 테마별 여행지)',
      '공지사항 관리',
      'FAQ 관리',
      '약관 관리',
      '테마/인기 여행지 관리',
    ],
  },
  images: [
    { src: '/images/portfolio/l2u/l2u_main.png', label: '메인 페이지' },
    { src: '/images/portfolio/l2u/l2u_highend.png', label: '하이엔드 컬렉션' },
    { src: '/images/portfolio/l2u/l2u_membership.png', label: '멤버십 가입' },
    { src: '/images/portfolio/l2u/l2u_membership_payment.png', label: '멤버십 결제 화면' },
    { src: '/images/portfolio/l2u/l2u_room.png', label: '객실 페이지' },
    { src: '/images/portfolio/l2u/l2u_detail.png', label: '숙소 상세' },
    { src: '/images/portfolio/l2u/l2u_history.png', label: '예약 내역' },
    {
      src: '/images/portfolio/l2u/l2u_admin_dashboard.png',
      label: '관리자 대시보드',
    },
    {
      src: '/images/portfolio/l2u/l2u_admin_popular.png',
      label: '관리자 인기 숙소 관리',
    },
  ],
  reflection: `블록체인 기술과 웹 개발의 융합을 통해 메타마스크 지갑 연동과 SUT 토큰 결제 시스템을 구현하면서 웹 개발과 블록체인 기술을 결합하는 새로운 경험을 할 수 있었고, Zustand와 SWR, React Context를 활용한 상태 관리 시스템을 구축하며 대규모 애플리케이션에서 데이터 흐름을 체계적으로 관리하는 것의 중요성을 깨달았습니다. 
멤버십 가입과 SuperTrust의 블록체인 연동 기능을 구현하면서, 사용자가 지갑을 통해 인증하고 토큰을 실제로 활용하는 과정을 직접 설계할 수 있었습니다.
UX/UI 측면에서는 스켈레톤 UI를 적용해 로딩 경험을 개선했고, 작은 디테일이 서비스 완성도에 미치는 영향을 실감했습니다. 실제 서비스 수준의 기능들을 구현하면서 단순한 토이 프로젝트와는 다른 실무 프로젝트의 복잡성과 완성도에 대한 이해가 깊어졌습니다.`,
} as const;

// 이에이트
export const PROJECT_E8IGHT = {
  type: '팀 프로젝트' as const,
  name: '이에이트',
  period: '2025.05.30 - 2025.06.03',
  members: '프론트엔드 2명 / 백엔드 1명 / 디자이너 1명',
  description:
    '디지털 트윈과 AI 기술 정보를 제공하는 E8ight 플랫폼으로, Tech Library, Tech Insight, Smart DX 콘텐츠를 제공하고 PDF 자료 다운로드 및 구독 서비스를 통해 사용자 정보를 수집하는 기술 정보 공유 웹사이트입니다.',
  url: 'https://blog.e8.ai.kr/',
  tags: ['반응형', '기업 프로젝트'],
  stacks: [
    { name: 'Next.js', logo: '/images/stack/next.png' },
    { name: 'Zustand', logo: '/images/stack/zustand.png' },
    { name: 'Zod', logo: '/images/stack/zod.png' },
    { name: 'Tailwind CSS', logo: '/images/stack/tailwindcss.png' },
    { name: 'GitHub', logo: '/images/stack/github.png' },
  ],
  thumbnail: '/images/thumbnail/e8ight.png',
  responsibilities: {
    b2c: [
      '도입 상담',
      '뉴스레터 구독 모달',
      'Resource Center 섹션 / 뉴스레터 구독 섹션',
      'PDF 다운로드 모달',
      '블로그 상세 페이지',
    ],
    admin: ['전체 블로그 표', '게시판 수정 페이지'],
  },
  images: [
    { src: '/images/portfolio/e8ight/e8ight_main.png', label: '메인 페이지' },
    { src: '/images/portfolio/e8ight/e8ight_contact.png', label: '도입 상담' },
    {
      src: '/images/portfolio/e8ight/e8ight_admin_dashboard.png',
      label: '관리자 메인',
    },
    {
      src: '/images/portfolio/e8ight/e8ight_admin_edit.png',
      label: '관리자 게시판 수정',
    },
  ],
  reflection: `도입 상담과 PDF 다운로드 기능, 구글 스프레드시트 연동을 구현하면서 파일 다운로드와 동시에 사용자 데이터를 수집하고 활용하는 흐름을 경험했습니다.
폼 검증은 React Hook Form과 Zod를 조합해 구축했으며, 사용자 친화적인 에러 메시지와 실시간 검증을 적용해 데이터 무결성과 UX를 함께 고려했습니다.
Quill Editor를 활용하여 게시판 수정 기능을 구현하면서 리치 텍스트 에디터의 복잡한 상태 관리와 HTML 콘텐츠 처리, 이미지 업로드 및 삽입 기능 같은 실제 콘텐츠 관리 시스템의 세부사항들을 직접 다뤄볼 수 있었습니다.`,
} as const;

// TIP 매니저 활동지원 시스템 (M.A.P)
export const PROJECT_MAP = {
  type: '팀 프로젝트' as const,
  name: 'TIP 매니저 활동지원 시스템 (M.A.P)',
  period: '2024.07 - 2024.09',
  members: '프론트엔드 1명 / 백엔드 3명 / 기획자 1명 / 디자이너 1명',
  description: '지사 관리, 정산 신청, GFSR, 활동 입력 등 다양한 매니저 활동지원 시스템입니다.',
  tags: ['반응형', '기업 프로젝트'],
  stacks: [
    { name: 'Next.js', logo: '/images/stack/next.png' },
    { name: 'Zustand', logo: '/images/stack/zustand.png' },
    { name: 'Zod', logo: '/images/stack/zod.png' },
    { name: 'Tailwind CSS', logo: '/images/stack/tailwindcss.png' },
    { name: 'GitHub', logo: '/images/stack/github.png' },
  ],
  thumbnail: '/images/thumbnail/map.png',
  responsibilities: {
    b2c: [
      'MAP 메인페이지',
      '정산 신청 페이지',
      'GFSR 찾기 페이지',
      '영업 지도 페이지',
      '활동 입력 페이지',
      '영엽자료 페이지',
    ],
  },
  images: [
    { src: '/images/portfolio/map/map_main.png', label: '메인 페이지' },
    { src: '/images/portfolio/map/map_map.png', label: '영업 지도' },
    { src: '/images/portfolio/map/map_notice.png', label: '공지사항' },
    { src: '/images/portfolio/map/map_settlement.png', label: '정산 신청' },
  ],
  reflection: `기존 Vue2 기반 코드를 Vue3로 마이그레이션하며 호환성 문제를 해결하는 경험을 했고, 실무 환경에서 기술 이전이 어떻게 진행되는지 직접 체감할 수 있었습니다.

특히 정산 신청 페이지의 자차 이용 모달에서는 출발지와 도착지를 입력하고, 경유지를 포함해 경로 입력 → 거리 계산 → 비용 계산으로 이어지는 흐름을 구현했습니다.
이 과정에서 여러 단계의 상태와 계산 로직을 안정적으로 관리하기 위해 Pinia를 활용해 중앙 집중식 상태 관리를 적용하여 데이터 전달과 갱신을 명확하게 처리했습니다.

이번 경험을 통해 UI를 구현하는 것에서 그치지 않고, 실제 업무 로직과 사용자 경험을 연결하는 프론트엔드 개발의 역할을 깊이 이해할 수 있었습니다.`,
} as const;

export const PROJECTS = [
  {
    key: 'logy',
    ...PROJECT_LOGY,
  },
  {
    key: 'l2u',
    ...PROJECT_L2U,
  },
  {
    key: 'e8ight',
    ...PROJECT_E8IGHT,
  },
  {
    key: 'map',
    ...PROJECT_MAP,
  },
  {
    key: 'hyeran',
    ...PROJECT_HYERAN,
  },
] as const;
