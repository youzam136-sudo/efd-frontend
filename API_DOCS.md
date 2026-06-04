# API 명세서

## 기본 정보

| 항목 | 값 |
|------|-----|
| Base URL | `{NEXT_PUBLIC_BACKEND_URL}/api` |
| 인증 방식 | Bearer Token (`BACKEND_API_TOKEN`) |
| 응답 형식 | JSON |

> 서버사이드 호출(`getStaticProps`, `getStaticPaths`)은 `Authorization` 헤더를 자동으로 포함합니다.  
> 클라이언트사이드 호출(문의 폼)은 토큰 없이 요청하므로 Strapi에서 Public 권한이 필요합니다.

---

## 공통 응답 구조

```json
{
  "data": [ ... ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 100,
      "pageCount": 1,
      "total": 10
    }
  }
}
```

---

## Strapi API

### 1. 제품 (Products)

#### 목록 조회
```
GET /products?populate=*&pagination[pageSize]=100
```
- 호출 위치: `pages/product/index.tsx` (서버사이드)
- 응답 타입: `Blogs` (StrapiResponse\<Blog\>)

**응답 필드 (Blog)**

| 필드 | 타입 | 설명 |
|------|------|------|
| id | number | 고유 ID |
| documentId | string | Strapi 문서 ID |
| Title | string | 제품명 |
| Slug | string | URL 슬러그 |
| Excerpt | string | 요약 |
| Author | string \| null | 작성자 |
| Content | string | 본문 (HTML) |
| Feature_Image | StrapiImage | 대표 이미지 |
| createdAt | string | 생성일 (ISO 8601) |
| updatedAt | string | 수정일 (ISO 8601) |
| publishedAt | string | 발행일 (ISO 8601) |

#### 단일 조회
```
GET /products?filters[Slug][$eq]={slug}&populate=*
```
- 호출 위치: `pages/product/[slug].tsx` (서버사이드)
- Path parameter: `slug` (제품 슬러그)

---

### 2. 블로그 (Blogs)

#### 목록 조회
```
GET /blogs?populate=*&pagination[pageSize]=100
```
- 호출 위치: `pages/blogs/index.tsx` (서버사이드)
- 응답 타입: `Blogs` (StrapiResponse\<Blog\>)

#### 슬러그 목록 (getStaticPaths용)
```
GET /blogs?pagination[pageSize]=100
```
- 호출 위치: `pages/blogs/[slug].tsx` getStaticPaths (서버사이드)

#### 단일 조회
```
GET /blogs?filters[Slug][$eq]={slug}&populate=*
```
- 호출 위치: `pages/blogs/[slug].tsx` (서버사이드)
- Path parameter: `slug` (블로그 슬러그)

---

### 3. 공지사항 (Notices)

#### 목록 조회
```
GET /notices?populate=*&pagination[pageSize]=100
```
- 호출 위치: `pages/notice/index.tsx` (서버사이드)
- 응답 타입: `Notices` (StrapiResponse\<Notice\>)

**응답 필드 (Notice)**

| 필드 | 타입 | 설명 |
|------|------|------|
| id | number | 고유 ID |
| documentId | string | Strapi 문서 ID |
| Title | string | 제목 |
| Author | string \| null | 작성자 |
| Date | string | 작성일 |
| Content | string | 본문 (HTML) |
| createdAt | string | 생성일 (ISO 8601) |
| updatedAt | string | 수정일 (ISO 8601) |
| publishedAt | string | 발행일 (ISO 8601) |

#### 단일 조회
```
GET /notices?filters[documentId][$eq]={id}&populate=*
```
- 호출 위치: `pages/notice/[id].tsx` (서버사이드)
- Path parameter: `id` (Strapi documentId)

---

### 4. 특허 / 인증서 (Patents)

#### 목록 조회
```
GET /patents?populate=*&pagination[pageSize]=100
```
- 호출 위치: `pages/patent/index.tsx` (서버사이드)
- 응답 타입: `Patents` (StrapiResponse\<Patent\>)

**응답 필드 (Patent)**

| 필드 | 타입 | 설명 |
|------|------|------|
| id | number | 고유 ID |
| documentId | string | Strapi 문서 ID |
| Title | string | 특허/인증서명 |
| Image | StrapiImage | 이미지 |
| createdAt | string | 생성일 (ISO 8601) |
| updatedAt | string | 수정일 (ISO 8601) |
| publishedAt | string | 발행일 (ISO 8601) |

---

### 5. FAQ

#### 목록 조회
```
GET /faqs?populate=*&pagination[pageSize]=100
```
- 호출 위치: `pages/faqs.tsx` (서버사이드)
- 응답 타입: `Faqs` (StrapiResponse\<Faq\>)

**응답 필드 (Faq)**

| 필드 | 타입 | 설명 |
|------|------|------|
| id | number | 고유 ID |
| documentId | string | Strapi 문서 ID |
| Title | string | 질문 |
| Content | string | 답변 (HTML) |
| Author | string | 작성자 |
| Date | string | 작성일 |
| createdAt | string | 생성일 (ISO 8601) |
| updatedAt | string | 수정일 (ISO 8601) |
| publishedAt | string | 발행일 (ISO 8601) |

---

### 6. 게시판 / 자료실 (Documents)

#### 목록 조회
```
GET /docs?populate=*&pagination[pageSize]=100
```
- 호출 위치: `pages/board.tsx` (서버사이드)
- 응답 타입: `Documents` (StrapiResponse\<Document\>)

**응답 필드 (Document)**

| 필드 | 타입 | 설명 |
|------|------|------|
| id | string | 고유 ID |
| documentId | string | Strapi 문서 ID |
| Title | string | 제목 |
| PDF | StrapiImage | PDF 파일 |
| Image | StrapiImage | 썸네일 이미지 |
| createdAt | string | 생성일 (ISO 8601) |
| updatedAt | string | 수정일 (ISO 8601) |
| publishedAt | string | 발행일 (ISO 8601) |

---

### 7. 문의 등록 (Contact Submissions)

#### 문의 생성
```
POST /contact-submissions
```
- 호출 위치: `components/Contact/ContactForm.tsx` (클라이언트사이드)
- 인증: 없음 (Strapi Public 권한 필요)

**Request Body**

```json
{
  "data": {
    "Name": "홍길동",
    "Company": "이에프디",
    "Email": "example@email.com",
    "Phone_Number": "010-0000-0000",
    "Option": "제품 문의",
    "Message": "문의 내용입니다."
  }
}
```

**Option 필드 허용값**

| 값 | 설명 |
|----|------|
| 제품 문의 | 제품 관련 문의 |
| 견적 문의 | 가격/견적 문의 |
| 투자 문의 | 투자 관련 문의 |
| 기술 협력 문의 | 기술 협력 요청 |
| A/S 문의 | 사후 서비스 문의 |

**응답 (성공)**
```json
{
  "data": {
    "id": 1,
    "documentId": "..."
  },
  "meta": {}
}
```

---

## 공통 타입

### StrapiImage

| 필드 | 타입 | 설명 |
|------|------|------|
| id | number | 미디어 ID |
| documentId | string | Strapi 문서 ID |
| name | string | 파일명 |
| alternativeText | string \| null | 대체 텍스트 |
| url | string | 파일 경로 (`NEXT_PUBLIC_BACKEND_URL` + url) |
| width | number | 이미지 너비 |
| height | number | 이미지 높이 |
| formats | StrapiImageFormats | 리사이즈된 포맷들 (thumbnail, small, medium, large) |

---

## Next.js 내부 API Routes

### 사이트맵
```
GET /api/sitemap
```
- XML 형식의 사이트맵 반환
- 정적 페이지 + 동적 페이지(product, blog, notice) URL 포함
- Cache-Control: 1시간

---

## 환경변수

| 변수명 | 용도 | 노출 |
|--------|------|------|
| `NEXT_PUBLIC_BACKEND_URL` | Strapi 서버 URL | 클라이언트 공개 |
| `BACKEND_API_TOKEN` | Strapi API 인증 토큰 | 서버 전용 |
| `NEXT_PUBLIC_SITE_URL` | 사이트 도메인 (사이트맵용) | 클라이언트 공개 |
