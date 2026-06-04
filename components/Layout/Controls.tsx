import Image from "next/image";
import Link from "next/link";

const Controls = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed right-0 md:bottom-[30%] bottom-[10%] z-20 grid 
    md:h-57.5 md:w-23 
    h-50 w-16 
    grid-rows-3 bg-[#181818]
    ">
      <Link
        href="/promotion"
        className="flex flex-col items-center justify-center gap-0.5 text-xs text-white"
      >
        <Image
          className="object-contain"
          src="/book-icon.png"
          alt="icon"
          width={25}
          height={25}
        />
        <span>브로셔</span>
      </Link>
      <Link
        href="/contact"
        className="flex flex-col items-center justify-center gap-0.5 border-y border-[#585858] text-xs text-white"
      >
        <Image
          className="object-contain"
          src="/micro-phone-icon.png"
          alt="icon"
          width={25}
          height={25}
        />
        <span>문의하기</span>
      </Link>
      <button
        onClick={handleScrollTop}
        className="flex cursor-pointer items-center justify-center text-white uppercase"
      >
        top
      </button>
    </div>
  );
};

export default Controls;
