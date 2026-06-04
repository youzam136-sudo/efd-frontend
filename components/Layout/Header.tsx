import Link from "next/link";
import { Globe } from "../Common/Icons";
import { AnimatePresence, motion } from "framer-motion";
import { menu, megaNav } from "../menu";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MegaMenu from "./MegaMenu";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [locale, setLocale] = useState<"KR" | "EN">("KR");
  const lastYRef = useRef(0);

  const toggleLocale = () => {
    const next = locale === "KR" ? "EN" : "KR";
    setLocale(next);

    if (next === "KR") {
      document.cookie =
        "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
      document.cookie = `googtrans=; path=/; domain=.${location.hostname}; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
      window.location.reload();
      return;
    }

    const tryTranslate = (attempts = 0) => {
      const select =
        document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (select) {
        select.value = "en";
        select.dispatchEvent(new Event("change"));
      } else if (attempts < 15) {
        setTimeout(() => tryTranslate(attempts + 1), 300);
      }
    };
    tryTranslate();
  };

  useEffect(() => {
    lastYRef.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastYRef.current;
      const top = y < 80;
      setIsTop(top);
      setIsVisible(top || !goingDown);
      lastYRef.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{ y: isVisible ? 0 : -120, transition: { duration: 0.25 } }}
      data-top={isTop}
      className="group fixed top-0 left-0 z-40 grid w-full grid-cols-2 px-8.75 py-5 text-black transition-colors duration-200 data-[top='false']:bg-white data-[top='false']:shadow-md data-[top='true']:bg-transparent data-[top='true']:text-white md:grid-cols-[0.5fr_2fr_0.5fr] md:py-9 2xl:px-25"
    >
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="transition-[filter] duration-200 group-data-[top='true']:brightness-0 group-data-[top='true']:invert"
        />
      </Link>

      <div className="hidden items-center justify-center gap-14 md:flex">
        {menu.map(({ title, href, items }, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={index}
              className="relative py-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {items.length === 0 ? (
                <Link
                  href={href}
                  className="relative flex flex-col items-center gap-1 text-sm font-medium tracking-wide"
                >
                  <span>{title}</span>
                  <motion.span
                    className="h-[2px] w-full rounded-full bg-current"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{ originX: 0.5 }}
                  />
                </Link>
              ) : (
                <button className="relative flex flex-col items-center gap-1 text-sm font-medium tracking-wide">
                  <span>{title}</span>
                  <motion.span
                    className="h-[2px] w-full rounded-full bg-current"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{ originX: 0.5 }}
                  />
                </button>
              )}

              <AnimatePresence>
                {isHovered && items.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full left-1/2 z-50 mt-2 w-max -translate-x-1/2 overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-xl"
                  >
                    <div className="absolute inset-x-0 top-0 h-[2px]" />
                    {items.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.15 }}
                      >
                        <Link
                          href={item.href}
                          className="group/item flex items-center gap-2 pr-12 pl-8 py-4 text-sm whitespace-nowrap text-gray-700 transition-colors hover:bg-gray-50 hover:font-bold hover:text-blue-600"
                        >
                          {item.title}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-end gap-9">
        <button
          onClick={toggleLocale}
          className="flex cursor-pointer items-center gap-1.5"
        >
          <div className="h-5.5 w-5.5">
            <Globe />
          </div>
          <span>{locale}</span>
        </button>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mega-menu"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-full flex-col items-end justify-center gap-3.5"
        >
          <div className="h-0.5 w-6 bg-black group-data-[top='true']:bg-white" />
          <div className="h-0.5 w-11.5 bg-black group-data-[top='true']:bg-white" />
        </button>
      </div>
      <MegaMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        sections={megaNav}
      />
    </motion.header>
  );
};

export default Header;
