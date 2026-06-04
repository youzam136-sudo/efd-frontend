import Image from "next/image";
import { useEffect, useState } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SW from "swiper";
import { motion } from "framer-motion";
import { Banner } from "@/types/payload-types";

const Counter = () => {
  const swiper = useSwiper();
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!swiper) return;
    const updateTotal = () => { setTotal(swiper.slides?.length || 0); };
    setCurrent(swiper.realIndex + 1);
    updateTotal();
    const handleSlideChange = () => { setCurrent(swiper.realIndex + 1); };
    const handleAutoplay = (_: SW, time: number, progressRatio: number) => { setProgress(1 - progressRatio); };
    swiper.on("init", updateTotal);
    swiper.on("slideChange", handleSlideChange);
    swiper.on("autoplayTimeLeft", handleAutoplay);
    return () => {
      swiper.off("init", updateTotal);
      swiper.off("slideChange", handleSlideChange);
      swiper.off("autoplayTimeLeft", handleAutoplay);
    };
  }, [swiper]);

  const itemVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

  return (
    <motion.div variants={itemVariants} className="absolute bottom-0 left-0 z-10 w-full pb-11 md:pb-25">
      <div className="mx-auto flex w-full max-w-345 items-center gap-3 px-8.75 font-bold text-white">
        <p>{String(current).padStart(2, "0")}</p>
        <div className="relative h-0.75 w-20.5">
          <div style={{ width: `${progress * 100}%` }} className="absolute inset-0 z-10 h-full bg-white" />
          <div className="absolute bottom-0 left-0 h-[.0938rem] w-full bg-[#C1C8D6]" />
        </div>
        <p>{String(total).padStart(2, "0")}</p>
      </div>
    </motion.div>
  );
};

const defaultSlides = [
  { Subtitle: "미래를 선도하는", Title: "스마트 기술", Image: { url: "/home/hero/0.png" } },
  { Subtitle: "내일을 혁신하는", Title: "디지털 솔루션", Image: { url: "/home/hero/1.png" } },
];

interface HeroProps { banners?: Banner[]; }

const Hero = ({ banners }: HeroProps) => {
  const sectionVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
  const itemVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
  const slides = banners && banners.length > 0 ? banners : defaultSlides;

  return (
    <motion.section variants={sectionVariants} initial="hidden" animate="visible" className="relative flex h-107 w-full md:h-screen">
      <Swiper className="relative" effect="fade" loop={true} autoplay={{ delay: 5000, disableOnInteraction: false }} modules={[EffectFade, Autoplay]}>
        {slides.map((slide, index) => {
          const imageUrl = slide.Image?.url
            ? slide.Image.url.startsWith("/") ? slide.Image.url : `${process.env.NEXT_PUBLIC_BACKEND_URL}${slide.Image.url}`
            : "/home/hero/0.png";
          return (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <Image className="h-full w-full object-cover" src={imageUrl} alt="hero-image" width={1920} height={1080} />
                <div className="absolute inset-0 z-10 h-full w-full">
                  <div className="mx-auto flex h-full max-w-345 flex-col justify-center px-8.75 text-white md:gap-4">
                    <motion.span variants={itemVariants} className="text-lg md:text-[4.125rem] md:leading-[100%]">{slide.Subtitle}</motion.span>
                    <motion.h1 variants={itemVariants} className="text-[3.125rem] leading-[100%] font-bold md:text-[6.25rem]">{slide.Title}</motion.h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <Counter />
      </Swiper>
      <motion.div variants={itemVariants} className="absolute bottom-0 left-0 z-20 w-full pb-11 md:pb-25">
        <div className="mx-auto flex w-full max-w-345 justify-end px-8.75">
          <div className="flex translate-x-8.75 -translate-y-10 rotate-90 items-center gap-1.5 md:translate-x-15 md:-translate-y-16">
            <span className="h-px w-5 bg-white md:w-8.75"></span>
            <span className="text-[.625rem] leading-[100%] text-white md:text-base">SCROLLING</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
