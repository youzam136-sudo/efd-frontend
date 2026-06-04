import SectionIntro from "@/components/Common/SectionIntro";
import FAQTableAccordion from "@/components/FAQs/FAQTableAccordion";
import { Faqs } from "@/types/payload-types";
import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { promotionMenu } from "@/components/menu";
import { Variants, motion } from "framer-motion";
import api from "@/lib/api";

export const getStaticProps = (async () => {
  const response: { data: Faqs } = await api.get(
    "/faqs?populate=*&pagination[pageSize]=100",
  );

  return {
    props: {
      data: response.data,
    },
    revalidate: 60,
  };
}) satisfies GetStaticProps<{
  data: Faqs;
}>;

export default function FaqsPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const varients: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const containerVarients: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.5,
      },
    },
  };

  return (
    <>
      <Head>
        <title>주식회사 이에프디 | 공지사항</title>
      </Head>
      <SectionIntro
        imageSrc="/promotion/banner.png"
        customLinks={promotionMenu}
      />
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVarients}
        className="mx-auto flex w-full max-w-345 flex-col gap-21 px-8.75 py-21 md:gap-25 md:py-25"
      >
        <motion.h1
          variants={varients}
          className="relative text-center text-[1.75rem] font-bold after:absolute after:-bottom-3.5 after:left-1/2 after:h-px after:w-10 after:-translate-x-1/2 after:bg-[#213691]"
        >
          공지사항
        </motion.h1>
        <motion.div variants={varients}>
          <FAQTableAccordion data={data} />
        </motion.div>
      </motion.section>
    </>
  );
}
