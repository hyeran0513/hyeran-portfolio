// 개인 프로젝트
export const PROJECT_HYERAN = {
  type: '개인 프로젝트' as const,
  name: '김혜란 포트폴리오',
  period: '2025.09.17 - 현재',
  members: '프론트엔드 1명',
  role: '프론트엔드 / 기획 / 디자인',
  contribution: '100%',
  description: '개인 포트폴리오 웹사이트로, 제가 프론트엔드로서 쌓아온 경험들을 소개합니다.',
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
  reflection: `프론트엔드 개발을 넘어, UI/UX기획부터 디자인까지 직접 진행했습니다.\n\n - 개발툴: Next.js와 Tailwind CSS\n - 인터랙션: GSAP 애니메이션, 커스텀 커서\n - 사용성: 프로젝트 모달, 이미지 확대 효과, FallbackImage\n - 성능 최적화: 이미지 lazy loading, LCP 개선 그동안 터득한 기술 및 경험을 바탕으로 사용자 친화적인 웹사이트를 만들었습니다.\n\n 사용자 관점에서 친숙하고 편리한 경험을 제공하기 위해 끊임없이 고민하는 개발자로 성장하고 싶습니다.`,
} as const;

// 여기G
export const PROJECT_LOGY = {
  type: '팀 프로젝트' as const,
  name: '여기G',
  period: '2025.08.15 - 2025.08.20',
  members: '프론트엔드 2명 / 백엔드 1명 / 디자이너 1명',
  role: '프론트엔드',
  contribution: '60%',
  description:
    '챗봇 LOGY를 기반으로 복잡한 물류 프로세스를 쉽게 안내하여 기업의 업무 효율을 높여주는 플랫폼입니다.',
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
    { src: '/images/portfolio/logy/logy_404_error.png', label: '404 에러 처리' },
  ],
  reflection: `Zustand를 통해 회원가입 기능을 구현했습니다.\n 이때 Zod로 유효성 검사를 통합해서 관리함으로써 유지보수성을 높였습니다.\n\n 여기서 그치지 않고, 기획자가 놓친 사용자의 입장의 pain point를 고민했습니다.\n 오류 발생 시 안내 화면을 제공하고, 로딩 시 스켈레톤 UI를 적용하여 진척도를 보여주는 등 사용자 경험을 고려한 개선 사항을 반영했습니다.\n\n 이처럼 단순히 요구사항을 구현하는 것을 넘어서 사용자 중심적인 사고를 바탕으로 적극적으로 의견을 제시하여 제품의 완성도를 높였습니다.\n 개발자의 역할을 넘어 팀과 함께 더 나은 제품을 만들어가는 태도에 대해 배울 수 있었습니다.`,
} as const;

// 레저투유
export const PROJECT_L2U = {
  type: '팀 프로젝트' as const,
  name: '레저투유',
  period: '2025.06.04 - 2025.08.14',
  members: '프론트엔드 2명 / 백엔드 1명 / 디자이너 1명',
  role: '프론트엔드',
  contribution: '80%',
  description:
    '온체인 결제 기반의 숙박 예약 플랫폼입니다. 결제 시스템에 메타마스크 지갑을 연동하여 사용자가 SUT 토큰을 이용해서 안전하고 투명하게 숙박 결제를 할 수 있는 환경을 제공합니다.',
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
    { src: '/images/portfolio/l2u/l2u_skeleton.png', label: '스켈레톤 UI' },
    {
      src: '/images/portfolio/l2u/l2u_admin_dashboard.png',
      label: '관리자 대시보드',
    },
    {
      src: '/images/portfolio/l2u/l2u_admin_popular.png',
      label: '관리자 인기 숙소 관리',
    },
  ],
  reflection: `블록체인 기술을 활용한 온체인 결제 시스템을 개발했으며, 결제 시스템을 구축하며 다양한 예외 상황을 고려해야 했습니다.\n\n 예외 프로세스에 따른 버튼 비활성화 처리, 잔액 부족 및 네트워크 연결 시 오류 안내, 소셜 로그인 실패 화면 등 다양한 경우의 수가 발생했고 이를 발견하여 빠르게 해결했습니다.\n\n 이 과정을 통해 실제 사용자의 다양한 행동을 고려하고 파생된 여러 상황에 대해 어떻게 알맞게 처리할지 대응하는 역량을 기를 수 있었습니다.`,
} as const;

// 이에이트
export const PROJECT_E8IGHT = {
  type: '팀 프로젝트' as const,
  name: '이에이트',
  period: '2025.05.30 - 2025.06.03',
  members: '프론트엔드 2명 / 백엔드 1명 / 디자이너 1명',
  role: '프론트엔드',
  contribution: '50%',
  description: '이에이트의 기술 정보 공유하는 웹 사이트입니다.',
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
  reflection: `Next.js 기반으로 진행한 첫 프로젝트입니다.\n\n 입력 폼 검증은 React Hook Form과 Zod로 일관성을 갖추고, Quill Editor로 게시판 수정 기능을 구현했습니다.\n 나아가 PDF 자료 다운로드와 동시에 자동으로 사용자 데이터를 수집하도록 구글 스프레드시트를 연동했습니다.\n\n 이처럼 실무에서 자주 쓰이는 라이브러리와 프레임워크를 직접 사용해보는 경험을 할 수 있었습니다.`,
} as const;

// TIP 매니저 활동지원 시스템 (M.A.P)
export const PROJECT_MAP = {
  type: '팀 프로젝트' as const,
  name: 'TIP 매니저 활동지원 시스템 (M.A.P)',
  period: '2024.07 - 2024.09',
  members: '프론트엔드 1명 / 백엔드 3명 / 기획자 1명 / 디자이너 1명',
  role: '프론트엔드',
  contribution: '90%',
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
  reflection: `Pinia를 활용해 정산 신청 페이지의 자차 이용 모달을 구현했습니다.\n 경로 입력 단계에서 출발지, 도착지, 경유지를 입력하면 이후 거리 및 비용 계산 단계에서 해당 데이터를 활용해 자동으로 결과를 산출하도록 설계했습니다.\n 이를 통해 값이 props로 전달되면서 발생했던 props drilling 문제를 해결할 수 있었습니다.\n\n 처음으로 프론트엔드를 전담한 프로젝트입니다. 혼자여도 끝까지 완수하는 경험을 통해 하나의 프로젝트를 맡을 때의 책임감과 자신감을 가지게 되었습니다.`,
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
