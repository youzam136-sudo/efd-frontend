import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  href: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, subtitle, title, href }) => {
  const swiperSlide = useSwiperSlide();

  return (
    <Link
      href={href}
      className="relative block h-52.5 w-full md:h-110 2xl:h-152.5"
    >
      <div className="absolute inset-0 z-10 bg-black/50" />
      <Image
        className="h-full w-full object-cover"
        src={imageSrc}
        alt="hero-image"
        width={1920}
        height={1080}
      />
      <div
        data-active={swiperSlide.isActive}
        className="absolute inset-0 z-10 flex h-full w-full flex-col justify-end gap-2 p-8.75 text-white opacity-0 transition-opacity duration-500 data-[active='true']:opacity-100 md:gap-6 md:p-15 2xl:p-25"
      >
        <h1 className="text-[1.875rem] leading-[100%] font-bold md:text-[3.75rem]">
          {title}
        </h1>
        <p className="text-xs md:text-lg">{subtitle}</p>
      </div>
    </Link>
  );
};

const About = () => {
  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex w-full flex-col gap-12.5 py-21 md:py-50 2xl:gap-30"
    >
      <div className="flex flex-col items-center gap-5 px-8.75 md:gap-7 2xl:gap-10">
        <motion.span
          variants={itemVariants}
          className="rounded-full border border-black px-6 py-2.5 text-center"
        >
          About us
        </motion.span>
        <motion.h1
          variants={itemVariants}
          className="text-center text-2xl font-bold md:text-[2.625rem] md:leading-[100%]"
        >
          미래를 선도하는 제품과 기술력
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-center text-[#8E8E8E] md:text-xl"
        >
          혁신적인 제품의 개발과 생산, 첨단기술력의
          <br />
          발전과 끝없는 도전으로 가치를 만들어 갑니다.
        </motion.p>
      </div>
      <motion.div variants={containerVariants} className="w-full">
        <Swiper
          slidesPerView={1.25}
          spaceBetween={8}
          loop
          centeredSlides={true}
          breakpoints={{
            1024: {
              slidesPerView: 1.9,
              spaceBetween: 74,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
          }}
        >
          {[...slides, ...slides].map((elem, index) => {
            return (
              <SwiperSlide key={index}>
                <Card {...elem} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default About;

const slides = [
  {
    title: "CEO 인사말",
    subtitle: "비전을 통해 지속 가능한 미래 발전",
    imageSrc: "/home/about/0.png",
    href: "/ceo",
  },
  {
    title: "솔루션",
    subtitle: "이에프디 솔루션으로 기능 소개",
    imageSrc: "/home/about/1.png",
    href: "/microgrid",
  },
  {
    title: "제품소개",
    subtitle: "이에프디 제품에 대한 소개",
    imageSrc: "/home/about/2.png",
    href: "/product",
  },
];
