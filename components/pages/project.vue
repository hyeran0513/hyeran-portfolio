<template>
  <div class="project-view-inner">
    <div class="title">프로젝트 살펴보기</div>

    <div class="card">
      <div class="card-item" 
        v-for="(item, i) in cardData" :key="i">
        <div class="thumb">
          <div class="thumb-img" :style="{background: `url(${item?.thumb}) no-repeat center/auto 110%`}"></div>
        </div>

        <div class="detail">
          <div class="top">
            <div class="title" v-html="item?.title"></div>

            <div class="flex-box">
              <span class="date">{{ item?.date }}</span> / <span class="type">{{ item?.type }}</span>
            </div>
          </div>

          <dl class="info">
            <dt><label class="info-txt-label">사용 기술</label></dt> 
            <dd>
              <div class="stack-icon-box-wrap">
               <div class="stack-icon-box" v-for="(stack, stackIdx) in item?.stack" :key="stackIdx">
                 <div class="icon" :class="stack.icon"></div>
                 <div class="type">{{ stack.type }}</div>
                 <div class="percent">{{ stack.percent }}%</div>
               </div>
             </div>
            </dd>
          </dl>

          <dl class="info">
            <dt><label class="info-txt-label">소개</label></dt> 
            <dd>{{ item?.description }}</dd>
          </dl>

          <dl class="info">
            <dt><label class="info-txt-label">{{ item?.link.type }}</label></dt> 
            <dd>
              <a :href="item?.link.str" target="_blank">
                {{ item?.link.str }}
              </a>
            </dd>
          </dl>

          <dl class="info">
            <dt><label class="info-txt-label">소감</label></dt> 
            <dd>{{ item?.review }}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import saasdaImg from '/assets/images/project/saasda.png'; 
  import saasdaServiceImg from '/assets/images/project/saasda_service.png';
  import hdream from '/assets/images/project/hdream.png';
  import commtalk from '/assets/images/project/commtalk.png';
  import shop from '/assets/images/project/shop.png';
  import pulpul from '/assets/images/project/pulpul.png';
  import meetu from '/assets/images/project/meetu.png';

  const cardData = reactive([
    {
      id: '0',
      title: '사스다(SAASDA) 서비스 홈페이지<br/> - (주)윌비소프트',
      date: '2024.01 ~ 2024.04',
      type: '팀프로젝트(5명)',
      description: '사스다(SAASDA)에 대해 소개하는 페이지',
      thumb: saasdaServiceImg,
      stack: [
        {
          icon: 'nuxt',
          type: 'Nuxtjs',
          percent: '100'
        },
        {
          icon: 'sass',
          type: 'SASS',
          percent: '100'
        },
        {
          icon: 'gitlab',
          type: 'GitLab',
          percent: '100'
        },
        {
          icon: 'figma',
          type: 'Figma',
          percent: '100'
        },
      ],
      link: {
        type: '운영 URL',
        str: 'https://www.saasda.cloud/'
      },
      review: '이번 프로젝트는 기여도가 매우 높아 특히 애정이 가는 사이트입니다. 전체 페이지의 80%를 담당했고, 반응형 작업을 전담했습니다. 이를 통해 Nuxt에서 Swiper.js와 VueUse 같은 라이브러리를 활용하는 방법과 반응형 SCSS에 대해 깊이 이해하게 되었습니다.'
    },
    {
      id: '1',
      title: '사스다(SAASDA) 운영 홈페이지<br/> - (주)윌비소프트',
      date: '2023.11 ~ 현재',
      type: '팀프로젝트(14명)',
      description: '맞춤형 콘텐츠, 유연한 속도 조절, 실시간 학습현황 분석으로 개개인에 꼭 맞는 학습경험을 선사하는 교육관리 시스템',
      thumb: saasdaImg,
      stack: [
        {
          icon: 'nuxt',
          type: 'Nuxtjs',
          percent: '100'
        },
        {
          icon: 'sass',
          type: 'SASS',
          percent: '100'
        },
        {
          icon: 'gitlab',
          type: 'GitLab',
          percent: '100'
        },
        {
          icon: 'figma',
          type: 'Figma',
          percent: '100'
        },
      ],
      link: {
        type: '운영 URL',
        str: 'https://www.saasda.co.kr/'
      },
      review: '다른 프론트엔드 개발자가 작업한 부분의 결함을 제가 주로 처리한 프로젝트입니다. 전체 개발자가 참여하는 코드 리뷰를 통해 발표하는 과정에서 어떻게 문제를 해결했는지 상세히 설명하며 실력을 더욱 향상시킬 수 있었습니다. 이 과정에서 Nuxt를 활용한 스크립트 실력이 크게 성장하였습니다.'
    },
    {
      id: '2',
      title: '하남 커리어넷<br/> - (주)윌비소프트',
      date: '2023.11 ~ 2023.12',
      type: '팀프로젝트(11명)',
      description: '진로와 진학 정보 뿐만 아니라 다양한 체험활동 사업 소개해주는 사이트',
      thumb: hdream,
      stack: [
        {
          icon: 'nuxt',
          type: 'Nuxtjs',
          percent: '100'
        },
        {
          icon: 'sass',
          type: 'SASS',
          percent: '100'
        },
        {
          icon: 'gitlab',
          type: 'GitLab',
          percent: '100'
        },
        {
          icon: 'figma',
          type: 'Figma',
          percent: '100'
        },
      ],
      link: {
        type: '운영 URL',
        str: 'https://www.hdream.or.kr/'
      },
      review: 'Nuxt를 사용한 첫 프로젝트에서 Option API 대신 setup 형식을 사용하니 코드가 더 간결해지고 유지보수가 편리해졌습니다. 디자이너와의 첫 협업으로 디자인 감각이 많이 향상되었고 프론트엔드 개발자로서 디자이너 및 백엔드 개발자와의 협업을 통해 커뮤니케이션 능력도 향상시켰습니다. 이 프로젝트는 Nuxt 실력뿐만 아니라 협업 능력까지 키우는 소중한 경험이었습니다.'
    },
    {
      id: '3',
      title: '커톡커톡',
      date: '2023.08 ~ 2023.10',
      type: '팀프로젝트(2명)',
      description: '관심 카테고리를 선택하여 노출되는 게시판을 사용자가 자유롭게 커스텀할 수 있는 커뮤니티 웹사이트',
      thumb: commtalk,
      stack: [
        {
          icon: 'vue',
          type: 'Vuejs',
          percent: '100'
        },
        {
          icon: 'sass',
          type: 'SCSS',
          percent: '100'
        },
        {
          icon: 'mysql',
          type: 'MySQL',
          percent: '90'
        },
        {
          icon: 'github',
          type: 'Github',
          percent: '100'
        }
      ],
      link: {
        type: '시연 영상',
        str: 'https://www.youtube.com/watch?v=2CtmzoWrwbc'
      },
      review: 'Vue.js를 공부하며 진행한 토이 프로젝트입니다. 이전에 HTML, CSS, jQuery로 개발을 하다가 Vue.js로 전환하면서 SPA를 구현하는 것이 훨씬 간편하다는 점을 깨달았습니다. 페이지 간 전환이 부드럽고, 컴포넌트 재사용을 통해 코드의 중복을 줄일 수 있었습니다.'
    },
    {
      id: '4',
      title: '판매처별 상품등록<br/> - (주)핌즈',
      date: '2022.08 ~ 2023.08',
      type: '팀프로젝트 (3명)',
      description: '이지어드민 웹에서 상품을 등록하면, 스마트스토어, 쿠팡 등 다양한 판매처에 상품을 한 번에 등록할 수 있는 시스템',
      thumb: shop,
      stack: [
        {
          icon: 'html',
          type: 'HTML',
          percent: '100'
        },
        {
          icon: 'css',
          type: 'CSS',
          percent: '100'
        },
        {
          icon: 'jquery',
          type: 'jQuery',
          percent: '100'
        },
        {
          icon: 'mysql',
          type: 'MySQL',
          percent: '100'
        },
        {
          icon: 'php',
          type: 'PHP',
          percent: '100'
        },
      ],
      link: {
        type: '문서',
        str: 'http://help.cloud.ezadmin.co.kr/index.php?title=%ED%8C%90%EB%A7%A4%EC%B2%98%EB%B3%84_%EC%83%81%ED%92%88%EA%B4%80%EB%A6%AC'
      },
      review: '스마트스토어, 쿠팡, 카페24 등 다양한 판매 플랫폼에서 상품 등록을 API를 활용하여 체계적으로 수행하였으며, 이를 위한 기획 및 데이터베이스 설계도 진행했습니다. 이 프로젝트를 통해 API 활용 및 전체 프로세스 관리 능력을 향상시키며 협업과 개발 역량을 향상시켰습니다.'
    },
    {
      id: '5',
      title: 'PULPUL',
      date: '2022.05 ~ 2022.07',
      type: '팀프로젝트 (4명)',
      description: '개인 간 식물을 거래할 수 있고 식물 관리 물품을 공유할 수 있는 웹사이트',
      thumb: pulpul,
      stack: [
        {
          icon: 'html',
          type: 'HTML',
          percent: '100'
        },
        {
          icon: 'css',
          type: 'CSS',
          percent: '100'
        },
        {
          icon: 'jquery',
          type: 'jQuery',
          percent: '85'
        },
        {
          icon: 'figma',
          type: 'Figma',
          percent: '100'
        },
        {
          icon: 'github',
          type: 'Github',
          percent: '100'
        },
      ],
      link: {
        type: '시연 영상',
        str: 'https://www.youtube.com/watch?v=7UsOZKcKio4&t=1s'
      },
      review: '처음 프로젝트를 시작한 것에 비해 웹 디자인과 프론트엔드 개발 능력이 크게 성장했습니다. 웹 페이지 레이아웃과 사용자 경험 디자인에 대한 고려를 통해 웹 개발 능력을 향상시켰으며, 특히 thymeleaf를 효과적으로 활용하여 데이터 처리를 개선하는 경험을 쌓았습니다.'
    },
    {
      id: '6',
      title: 'MEETU',
      date: '2021.05 ~ 2021.07',
      type: '팀프로젝트 (4명)',
      description: '대학 또는 학교 환경에서 교수와 학생 간의 상담을 예약하고 관리하기 위한 상담 예약 웹서비스',
      thumb: meetu,
      stack: [
      {
          icon: 'html',
          type: 'HTML',
          percent: '100'
        },
        {
          icon: 'css',
          type: 'CSS',
          percent: '100'
        },
        {
          icon: 'jquery',
          type: 'jQuery',
          percent: '85'
        },
        {
          icon: 'figma',
          type: 'Figma',
          percent: '100'
        },
        {
          icon: 'github',
          type: 'Github',
          percent: '100'
        },
      ],
      link: {
        type: '시연 영상',
        str: 'https://www.youtube.com/watch?v=1sNkhS5zBTk'
      },
      review: '기획, 개발, 웹 디자인 등 모든 영역에서 처음 시도한 프로젝트입니다. 팀원들과 서로 부족한 부분을 채워주고 초기 어려움을 극복하며 개개인의 능력을 향상시킬 수 있는 소중한 경험이었습니다. '
    }
  ])
</script>

<style lang="scss" scoped>
  @import url('~/assets/scss/components/project.scss');
</style>