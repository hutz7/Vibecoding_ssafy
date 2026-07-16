# LocalHub Chatbot 프로젝트 문서

## 프로젝트 개요
LocalHub는 Vue 3 + Vite 기반의 서울 여행 추천 앱입니다. 이 프로젝트에는 Netlify Functions를 사용한 OpenAI 챗봇 기능이 포함되어 있어, 사용자 질문에 대해 서울 관광지, 맛집, 숙박, 여행 코스 등을 추천합니다.

## 주요 기능
- Vue 3 기반 프런트엔드 UI
- Pinia 상태 관리
- Netlify Functions 서버리스 챗봇 엔드포인트
- OpenAI `gpt-5-mini` 모델을 이용한 응답 생성
- 응답이 길 경우 2회 분할 응답 유도

## 폴더 구조
- `src/` - Vue 컴포넌트, 라우터, 스토어, 서비스
  - `components/chatbot/` - 챗봇 UI 컴포넌트
  - `stores/chatbot.js` - 챗봇 상태 관리
  - `services/chatbotService.js` - 챗봇 함수 호출 서비스
  - `composables/useChat.js` - 챗봇 스토어 사용용 컴포저블
- `netlify/functions/` - Netlify Functions 서버리스 코드
  - `chat.mjs` - OpenAI 응답을 요청하는 서버 함수
- `.env` - OpenAI API 키 저장
- `vite.config.js` - 개발 서버 프록시 및 Vite 설정

## 설치 및 실행
```bash
cd localhub
npm install
npm run dev
```

## Netlify Functions 로컬 테스트
`localhub/netlify/functions/chat.mjs` 함수는 OpenAI `responses` API를 호출하며, 다음과 같은 흐름으로 동작합니다.

1. POST 요청에서 `message`를 받음
2. `.env`에 설정된 `OPENAI_API_KEY`로 OpenAI 호출
3. `gpt-5-mini` 모델에 `max_output_tokens: 1000`와 텍스트 포맷 지정
4. 응답 구조에서 텍스트를 추출하여 `reply`로 반환

### `.env` 설정 예시
```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

## OpenAI 챗봇 흐름
- 프런트엔드에서 `src/services/chatbotService.js`가 `/api/chat` 또는 `/.netlify/functions/chat`로 요청
- `src/stores/chatbot.js`가 메시지 추가 및 로딩/에러 상태 관리
- `ChatWindow.vue`, `ChatInput.vue`, `ChatMessage.vue`가 챗 인터페이스를 렌더링

## 주의 사항
- Netlify 함수는 로컬 개발 시 `netlify dev` 또는 Vite 서버와 함께 사용해야 합니다.
- `gpt-5-mini` 모델은 `responses` 엔드포인트를 사용해야 합니다.
- 응답이 길 경우 함수 프롬프트에 응답 분할(`1/2`, `2/2`)을 명시함으로써 길게 나오는 답변을 처리합니다.

## 개발 관련 명령어
- `npm run dev` : 개발 서버 실행
- `npm run build` : 빌드
- `npm run preview` : 빌드 결과 미리보기
- `npm run lint` : 린트 실행

## 기술 스택
- Vue 3
- Vite
- Pinia
- Netlify Functions
- OpenAI API

## 추가 개선 아이디어
- 챗봇 응답을 메시지 스트리밍 형식으로 표시
- 질문 히스토리 저장 및 재사용
- 지역별/카테고리별 추천 필터
- 서버에서 대화 컨텍스트 유지 및 다중 메시지 관리
