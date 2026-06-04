import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, Variants } from "framer-motion";

interface Props {
  imageSrc?: string;
  title?: React.ReactNode;
  desc?: React.ReactNode;
  customLinks?: {
    title: string;
    href: string;
  }[];
}

const MotionLink = motion(Link);

const SectionIntro: React.FC<Props> = ({
  imageSrc,
  title,
  desc,
  customLinks,
}) => {
  const router = useRouter();

  const links = customLinks ? customLinks : localLinks;

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.75,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <>
      <div className="h-0 md:h-0" />
      <section className="relative h-78 w-full md:h-125">
        <div className="pointer-events-none absolute inset-0 z-10 bg-black/30" />
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src={imageSrc ? imageSrc : "/section-intro.jpg"}
          width={1920}
          height={1080}
          alt="section-img"
        />
        <div className="relative z-20 mx-auto flex h-full w-full max-w-345 flex-col justify-center gap-5 px-8.75 text-white md:gap-10">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.25,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-2xl font-bold md:text-5xl"
          >
            {title ? (
              title
            ) : (
              <>
                친환경 소재로
                <br />
                지속적으로 발전하는
              </>
            )}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {desc ? (
              desc
            ) : (
              <>
                이에프디는 지속적인 개발과 연구로
                <br />
                업계에 좀더 발전을 하고자 노력합니다.
              </>
            )}
          </motion.p>
        </div>
      </section>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex h-17.5 w-full items-center justify-center gap-5.5 bg-[#2A4676] md:gap-19.25"
      >
        {links.map(({ href, title }, index) => {
          return (
            <MotionLink
              key={index}
              href={href}
              variants={itemVariants}
              data-active={href === router.pathname}
              className="text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:font-bold data-[active='true']:font-bold md:text-base"
            >
              {title}
            </MotionLink>
          );
        })}
      </motion.div>
    </>
  );
};

export default SectionIntro;

const localLinks = [
  { title: "인사말", href: "/" },
  { title: "회사개요", href: "/ceo" },
  { title: "연혁", href: "/company-intro" },
  { title: "인증", href: "/company-value" },
  { title: "시설현황", href: "/blogs" },
];
