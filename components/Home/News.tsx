import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight } from "../Common/Icons";
import Image from "next/image";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { Notices } from "@/types/payload-types";
import { formatIsoDate } from "@/utils/formatDate";

interface Props {
  notices: Notices;
}

const News = ({ notices }: Props) => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

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

  const slideVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="overflow-hidden"
    >
      <div className="mx-auto flex w-full max-w-345 flex-col gap-18.5 px-8.75 py-21 text-black md:flex-row md:gap-42.5 md:py-50">
        <div className="flex flex-col gap-37.5">
          <div className="flex flex-col items-start gap-15">
            <div className="flex flex-col gap-3.5 md:gap-7">
              <motion.h1
                variants={itemVariants}
                className="text-3xl font-bold md:text-[3.125rem] md:leading-[100%]"
              >
                NEWS
              </motion.h1>
              <motion.p variants={itemVariants} className="max-w-62.5">
                이에프티의 기술, 고객, 파트너에 대한 최신 소식을 받아보세요.
              </motion.p>
            </div>
            <motion.button
              variants={itemVariants}
              className="flex cursor-pointer items-center gap-1.5 rounded-full border border-black p-1.5"
              onClick={() => {
                router.push("/notice");
              }}
            >
              <span className="inline-block px-5">자세히 보기</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A54BB]">
                <div className="w-5.5 text-white">
                  <ArrowRight />
                </div>
              </span>
            </motion.button>
          </div>
          <div
            style={{ transform: `scaleX(${progress})` }}
            className="hidden h-0.5 w-49 origin-left bg-black transition-transform duration-500 md:block"
          />
        </div>
        <div className="w-full">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              1024: { slidesPerView: 3.6 },
            }}
            onProgress={(swiper) => {
              setProgress(swiper.progress);
            }}
          >
            {[...notices.data, ...notices.data].map((notice, index) => (
              <SwiperSlide key={index}>
                <Link href={`/notice/${notice.documentId}`}>
                  <motion.div
                    variants={slideVariants}
                    className="flex flex-col gap-7"
                  >
                    <Image
                      className="h-59.5 object-cover"
                      src={
                        notice.Feature_Image
                          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${notice.Feature_Image.url}`
                          : "/home/news/0.png"
                      }
                      alt={
                        notice.Feature_Image?.alternativeText ?? notice.Title
                      }
                      width={1920}
                      height={1080}
                    />
                    <h2 className="line-clamp-2 font-medium md:text-lg">
                      {notice.Title}
                    </h2>
                    <p>{formatIsoDate(notice.Date)}</p>
                  </motion.div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div
        style={{ transform: `scaleX(${progress})` }}
        className="h-0.5 w-full origin-left bg-black transition-transform duration-500 md:hidden"
      />
    </motion.section>
  );
};

export default News;
