import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type MegaItem = { title: string; href: string };

type MegaSection = {
  title: string;
  href?: string;
  items: MegaItem[];
};

type MegaMenuProps = {
  open: boolean;
  onClose: () => void;
  sections: MegaSection[];
};

const MegaMenu = ({ open, onClose, sections }: MegaMenuProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mega-menu"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          id="mega-menu"
          className="fixed inset-0 z-100 flex flex-col overflow-y-auto bg-white"
          role="dialog"
          aria-modal="true"
          aria-label="전체 메뉴"
        >
          <div className="relative flex items-center justify-center border-b border-black/5 px-8.75 py-6 md:py-9 2xl:px-25">
            <Link href="/" onClick={onClose} className="inline-block">
              <Image
                src="/logo.png"
                alt="EFD"
                width={100}
                height={100}
                className="h-12 w-auto md:h-16"
                priority
              />
            </Link>
            <button
              type="button"
              onClick={onClose}
              className="absolute top-1/2 right-8.75 -translate-y-1/2 p-2 text-2xl leading-none text-black transition-all duration-300 hover:scale-90 hover:cursor-pointer hover:font-bold md:right-25"
              aria-label="메뉴 닫기"
            >
              ×
            </button>
          </div>

          <div className="mx-auto w-full max-w-5xl flex-1 px-8.75 py-10 md:py-16 2xl:px-25">
            <nav className="flex flex-col gap-10 md:gap-14">
              {sections.map((section) => (
                <div
                  key={section.title}
                  className="flex flex-col gap-4 border-b border-black/10 pb-10 last:border-0 last:pb-0 md:flex-row md:items-start md:gap-16 md:pb-14"
                >
                  <h2 className="shrink-0 text-lg font-bold text-black md:w-40 md:text-xl">
                    {section.title}
                  </h2>
                  {section.items.length > 0 ? (
                    <ul className="flex flex-wrap gap-x-6 gap-y-3 md:gap-x-10">
                      {section.items.map((item) => (
                        <li key={`${section.title}-${item.href}-${item.title}`}>
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="text-sm text-black/80 transition-all duration-300 hover:translate-y-[-2px] hover:font-bold hover:text-black md:text-base"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : section.href ? (
                    <Link
                      href={section.href}
                      onClick={onClose}
                      className="text-sm text-black/80 transition-all duration-300 hover:translate-y-[-2px] hover:font-bold hover:text-black md:text-base"
                    >
                      바로가기
                    </Link>
                  ) : (
                    <p className="text-sm text-black/40 md:text-base">
                      준비 중
                    </p>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
