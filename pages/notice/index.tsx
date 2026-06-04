import SectionIntro from "@/components/Common/SectionIntro";
import NoticeTableAccordion from "@/components/Notice/NoticeTableAccordion";
import { Notices } from "@/types/payload-types";
import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { motion, Variants } from "framer-motion";
import { promotionMenu } from "@/components/menu";
import api from "@/lib/api";

export const getStaticProps = (async () => {
  const response: { data: Notices } = await api.get(
    "/notices?populate=*&pagination[pageSize]=100",
  );

  return {
    props: {
      data: response.data,
    },
    revalidate: 60,
  };
}) satisfies GetStaticProps<{
  data: Notices;
}>;

export default function NoticePage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const variants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25, delayChildren: 0.5 },
    },
  };

  return (
    <>
      <Head>
        <title>주식회사 이에프디 | 뉴스</title>
      </Head>
      <SectionIntro
        imageSrc="/promotion/banner.png"
        customLinks={promotionMenu}
      />
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mx-auto flex w-full max-w-345 flex-col gap-21 px-8.75 py-21 md:gap-25 md:py-25"
      >
        <motion.h1
          variants={variants}
          className="relative text-center text-[1.75rem] font-bold after:absolute after:-bottom-3.5 after:left-1/2 after:h-px after:w-10 after:-translate-x-1/2 after:bg-[#213691]"
        >
          뉴스
        </motion.h1>
        <motion.div variants={variants}>
          <NoticeTableAccordion notices={data} />
        </motion.div>
      </motion.section>
    </>
  );
}
