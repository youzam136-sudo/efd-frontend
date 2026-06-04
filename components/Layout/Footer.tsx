import Image from "next/image";
import { ArrowRight } from "../Common/Icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full">
      <Image
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        src="/footer.png"
        width={1920}
        height={1080}
        alt="footer-img"
      />
      <div className="mx-auto flex w-full max-w-345 flex-col gap-25 px-8.75 py-20 text-white md:flex-row md:gap-0 md:py-25">
        <div className="flex w-full flex-col gap-14 md:w-1/2 md:gap-25">
          <div className="flex flex-wrap gap-4">
            {navLinks.map(({ label, href }, index) => {
              return (
                <Link key={index} href={href}>
                  <button className="group relative flex h-[50px] w-[144px] gap-4 rounded-full border border-white">
                    <span className="absolute top-1/2 left-6 -translate-y-1/2">
                      {label}
                    </span>
                    <span className="absolute top-1/2 right-6 w-4 -translate-y-1/2 text-white transition-transform duration-300 group-hover:translate-x-2">
                      <ArrowRight />
                    </span>
                  </button>
                </Link>
              );
            })}
          </div>
          <p className="text-sm font-bold">
            (주)이에프티
            <br />
            대표자 : 박현준
            <br />
            사업자등록증 : 362-81-02661
            <br />
            주소 : 전남 영암군 삼호읍 대불주거7로 68, 2층 201호
          </p>
        </div>
        <div className="flex w-full items-center justify-center md:w-1/2 md:items-end md:justify-end">
          <div className="flex flex-col gap-4.5">
            <div className="flex gap-5">
              {socials.map(({ href, icon }, index) => {
                return (
                  <Link key={index} href={href} target="_blank">
                    <Image
                      src={icon}
                      alt="icon"
                      width={200}
                      height={200}
                      className="size-10 rounded-full object-contain transition-[filter] duration-300 ease-out hover:brightness-125"
                    ></Image>
                  </Link>
                );
              })}
            </div>
            <p className="text-center text-sm font-medium md:text-right">
              {new Date().getFullYear()} EFD COMPANY
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const navLinks = [
  { label: "회사소개", href: "/company-intro" },
  { label: "홍보센터", href: "/faqs" },
  { label: "고객지원", href: "/contact" },
];

const socials = [
  { icon: "/social-icons/linkedin.png", href: "https://linkedin.com" },
  { icon: "/social-icons/youtube.png", href: "https://youtube.com" },
  { icon: "/social-icons/facebook.png", href: "https://facebook.com" },
];
