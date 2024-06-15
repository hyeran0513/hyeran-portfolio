<template>
  <div class="outline-view-inner">
     <div class="intro-box">
       <div class="intro">
         <div class="intro-title">끊임없이 도전하는<br/> <span class="point-color">프론트엔드</span> 김혜란입니다.</div>
       
         <div class="scroll">
           <div class="mouse">
             <span class="mouse-dot"></span>
           </div>
         </div>
       </div>
     </div>
 
     <div class="hrkim-info">
       <div class="info">
         <div class="info-title">
           <span class="txt">정보</span>
         </div>
 
         <div class="info-box">
           <dl class="info-item" v-for="(item, i) in profileData" :key="i">
             <dt class="min-w-60">{{ item.title }}</dt>
             <dd>{{ item.content }}</dd>
           </dl>
         </div>
       </div>
 
       <div class="info">
         <div class="info-title">
           <span class="txt">프로젝트</span>
         </div>
 
         <div class="info-box">
           <dl class="info-item" v-for="(item, i) in projectData" :key="i">
             <dt>{{ item.date }}</dt>
             <dd>{{ item.title }}</dd>
           </dl>
         </div>
       </div>
 
       <div class="info">
         <div class="info-title">
           <span class="txt">상 / 자격증</span>
         </div>
 
         <div class="info-box">
           <dl class="info-item" v-for="(item, i) in awardsData" :key="i">
             <dt>{{ item.date }}</dt>
             <dd>{{ item.title }}</dd>
           </dl>
         </div>
       </div>
       
       <div class="info">
         <div class="info-title">
           <span class="txt">경력</span>
         </div>
 
         <div class="info-box">
           <dl class="info-item" v-for="(item, i) in activityData" :key="i">
             <dt>{{ item.date }}</dt>
             <dd>{{ item.title }}</dd>
           </dl>
         </div>
       </div>
 
       <div class="info is-full">
         <div class="info-title">
           <span class="txt">기술</span>
         </div>
 
         <div class="info-box stack">
           <div class="info-item" v-for="(item, i) in stackData" :key="i">
             <div class="stack-icon-box-wrap">
               <div class="stack-icon-box">
                 <div class="icon" :class="item.icon"></div>
                 <div class="type">{{ item.type }}</div>
                 <div class="percent">{{ item.percent }}%</div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </template>
 
 <script setup>
 
 const profileData = reactive([
   {
     title: '이름',
     content: '김혜란'
   },
   {
     title: '학력',
     content: '동덕여자대학교 졸업'
   },
   {
     title: '학과',
     content: '컴퓨터학과'
   },
   {
     title: '연락처',
     content: '010-3129-8980'
   },
   {
     title: '이메일',
     content: 'hr_0513@naver.com'
   },
   {
     title: '깃허브',
     content: 'https://github.com/hyeran0513'
   }
 ])
 
 const projectData = reactive([
   {
     date: '2021.05 ~ 2021.10',
     title: 'meetu 웹 개발 - 대학교 프로젝트'
   },
   {
     date: '2022.05 ~ 2022.07',
     title: 'pulpul 웹 개발 - 대학교 프로젝트'
   },
   {
     date: '2022.08 ~ 2023.08',
     title: '판매처별 상품등록 웹개발 - (주) 핌즈'
   },
   {
     date: '2023.08 ~ 2023.10',
     title: '커톡커톡 웹 개발 - 토이 프로젝트'
   },
   {
     date: '2023.11 ~ 2023.12',
     title: '하남 커리어넷 - (주)윌비소프트'
   },
   {
     date: '2023.11 ~ 현재',
     title: '사스다(SAASDA) 운영 홈페이지 - (주)윌비소프트'
   },
   {
     date: '2024.01 ~ 2024.04 ',
     title: '사스다(SAASDA) 서비스 홈페이지 - (주)윌비소프트'
   }
 ]);
 
 const awardsData = reactive([
   {
     date: '2021.12.03',
     title: '한이음 공모전 입선'
   },
   {
     date: '2022.01.19',
     title: '캡스톤디자인 경진대회 동상'
   },
   {
     date: '2023.02.01',
     title: 'IPP형 일학습병행 우수상'
   },
   {
     date: '2024.04.05',
     title: 'SQL 개발자(SQLD) 자격증 획득'
   }
 ])
 
 const stackData = reactive([
   {
     icon: 'html',
     type: 'HTML',
     percent: 90
   },
   {
     icon: 'css',
     type: 'CSS',
     percent: 90
   },
   {
     icon: 'jquery',
     type: 'jQuery',
     percent: 85
   },
   {
     icon: 'vue',
     type: 'Vuejs',
     percent: 90
   },
   {
     icon: 'nuxt',
     type: 'Nuxtjs',
     percent: 98
   },
   {
     icon: 'sass',
     type: 'SCSS',
     percent: 94
   },
   {
     icon: 'php',
     type: 'PHP',
     percent: 85
   },
   {
     icon: 'mysql',
     type: 'MySQL',
     percent: 85
   },
   {
     icon: 'figma',
     type: 'Figma',
     percent: 95
   },
   {
     icon: 'gitlab',
     type: 'GitLab',
     percent: 90
   },
   {
     icon: 'github',
     type: 'GitHub',
     percent: 90
   }
 ])
 
 const activityData = reactive([
   {
     date: '2022.08 ~ 2023.08',
     title: '(주)핌즈 일학습병행 및 정규직'
   },
   {
     date: '2023.11 ~ 현재',
     title: '(주)윌비소프트 정규직'
   }
 ])
 </script>
 
 <style lang="scss" scoped>
   @import url('~/assets/scss/components/outline.scss');
 </style>