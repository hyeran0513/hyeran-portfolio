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
  reflection: `Figma로 디자인을 작업하고, Next.js와 Tailwind CSS를 활용하여 웹사이트를 구현했습니다. GSAP을 활용하여 부드러운 애니메이션 효과를 적용했고, 커스텀 커서 및 시선 추적 기능을 구현하여 사용자에게 재미 요소를 보여줄 수 있도록 했습니다. FallbackImage를 적용하여 이미지 로딩 중에는 스피너를 표시하여 사용자가 대기 중인 것을 알 수 있도록 하였고, 탑 버튼을 통해 페이지 상단으로 쉽게 이동하도록 했습니다. 프로젝트 모달을 통해 프로젝트 상세 정보를 확인할 수 있도록 했으며, 화면 미리 보기 클릭 시 확대되는 효과를 통해 사용자가 프로젝트를 더 자세히 확인할 수 있도록 했습니다. 성능 최적화를 위해 lcp 개선 작업을 진행하여 이미지 크기를 조정하고, lazy loading을 적용하였습니다. 직접 디자인을 하면서 Figma 툴에 대해 더 익힐 수 있었고, 사용자 입장에서 편리하게 사용할 수 있도록 고민하는 과정이 재미있었습니다.`,
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
    { src: '/images/portfolio/logy/logy_404_error.png', label: '404 에러 처리' },
  ],
  reflection: `Zustand를 사용하여 회원가입 이전, 다음으로 이동해도 입력한 값이 유지되도록 하고, Zod를 사용하여 유효성 검사를 한 곳에서 처리하여 유지보수가 용이하도록 했습니다. 
  블로그 상세페이지 진입 시, 블로그의 고유 ID가 없으면 404에러가 발생하는데, 이때 사용자에게 안내 화면을 보여주어 오류 상태를 확인할 수 있도록 처리했습니다. 데이터 조회 시, 데이터를 불러오는 중일 땐 간단한 로딩 스피너 대신 스켈레톤 UI를 적용하여 사용자가 데이터를 불러오는 중임을 알 수 있도록 했습니다.
  사용자 입장에서 세부적인 부분을 고려하며 작업을 진행하면서, 디테일을 잡아가는 과정에 보람을 느낄 수 있었습니다.`,
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
  reflection: `블록체인 기술을 활용해 메타마스크 지갑 연동과 SUT 토큰 결제 시스템을 구현하면서, 결제 프로세스를 설계할 때 고려해야 할 요소가 많다는 점을 깨달을 수 있었습니다.
  사용자가 결제를 진행하는 동안에는 결제 안내 페이지가 뜨기 전까지 사용자가 버튼을 누르지 못하도록 버튼을 비활성화하도록 처리했고, 지갑의 잔액이 부족하거나 잘못된 네트워크에 연결할 경우에는 오류 안내 화면을 통해 상태를 알 수 있도록 구현했습니다.
  또한 구글에 대한 소셜 로그인 기능을 구현했을 때, 사용자가 구글 로그인 취소 버튼을 누를 경우, 사용자에게 구글 로그인을 취소하여 로그인이 실패했다는 안내 화면을 제공하여 대응하였습니다.
  UI 측면에서는 drawer 컴포넌트 사용 시 다른 기기에서는 정상적으로 입력 영역이 표시되지만, 아이폰 15에서는 입력 영역이 가려지는 문제가 있어 크로스 브라우저 테스트를 통해 문제를 해결할 수 있었습니다.
  UX/UI 측면에서는 스켈레톤 UI를 적용해 로딩 경험을 개선했고, 다양한 상황에서 발생할 수 있는 예외를 처리하면서 문제에 대응하는 능력을 키울 수 있었던 프로젝트였습니다.`,
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
  reflection: `도입 상담과 PDF 다운로드 기능 시, 사용자의 정보를 입력하도록 하여 사용자의 동의가 이루어지면 데이터를 다운 받을 수 있습니다.
  이때 구글 스프레드시트 연동을 추가하면서 파일 다운로드와 동시에 사용자 데이터를 수집하도록 처리했습니다.
사용자 정보 입력 시, 폼 검증은 React Hook Form과 Zod를 사용하여 처리하여 일관된 검증 로직을 구현했으며,
게시판 수정 기능은 Quill Editor를 활용하여 구현했습니다. Next.js를 기반으로 진행한 첫 프로젝트로서, 실무에서 활용되는 다양한 라이브러리와 기술들을 직접 적용하며 기억에 남는 경험을 쌓았습니다.`,
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
  reflection: `기존 Vue2 기반 코드를 Vue3로 마이그레이션하면서 발생한 호환성 문제를 해결했습니다.
  Pinia를 활용하여 정산 신청 페이지의 자차 이용 모달을 구현했는데, 경로 입력 단계에서 출발지, 도착지, 경유지를 입력하면,
   이후 거리 계산 단계와 비용 계산 단계에서도 해당 값들을 사용하여 거리와 비용을 계산하도록 처리했습니다.
   단독으로 프론트엔드 개발을 진행한 첫 프로젝트로서, 책임감을 가지고 보람을 가지면서 마무리할 수 있었습니다.`,
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
