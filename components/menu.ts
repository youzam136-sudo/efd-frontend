// 회사 소개
const companyMenu = [
  {
    title: "CEO 인사말",
    href: "/ceo",
  },
  {
    title: "회사개요",
    href: "/company-intro",
  },
  {
    title: "회사가치",
    href: "/company-value",
  },
  {
    title: "특허/인증서",
    href: "/patent",
  },
];

// 솔루션
const solutionMenu = [
  {
    title: "마이크로그리드 시스템",
    href: "/microgrid",
  },
  {
    title: "해양모빌리트 추진 시스템",
    href: "/marine",
  },
];

// 홍보센터
const promotionMenu = [
  {
    title: "공지사항",
    href: "/faqs",
  },
  {
    title: "뉴스",
    href: "/notice",
  },
  {
    title: "갤러리",
    href: "/blogs",
  },
  {
    title: "브로셔",
    href: "/board",
  },
];

// 고객지원
const supportMenu = [
  {
    title: "문의",
    href: "/contact",
  },
  {
    title: "글로벌 네트워크 서비스",
    href: "/global-network-service",
  },
];

// 메뉴
const menu = [
  {
    title: "회사소개",
    href: "/",
    items: companyMenu,
  },
  {
    title: "솔루션",
    href: "/",
    items: solutionMenu,
  },
  {
    title: "제품소개",
    href: "/product",
    items: [],
  },
  {
    title: "홍보센터",
    href: "/",
    items: promotionMenu,
  },
  {
    title: "고객지원",
    href: "/",
    items: supportMenu,
  },
];

const productMenu = [
  {
    title: "제품소개",
    href: "/product",
  },
];

const ProductDetail = [
  {
    title : "",
    href : "",
  },
]

/** Mega menu: bold column + sub-links (Header overlay) */
const megaNav = [
  {
    title: "회사소개",
    items: [...companyMenu],
  },
  { title: "솔루션", items: [...solutionMenu] },
  { title: "제품소개", href: "/product", items: [] },
  { title: "홍보센터", items: [...promotionMenu] },
  { title: "고객지원", items: [...supportMenu] },
];

export {
  menu,
  companyMenu,
  solutionMenu,
  promotionMenu,
  supportMenu,
  megaNav,
  productMenu,
  ProductDetail
};
