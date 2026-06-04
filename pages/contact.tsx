import SectionIntro from "@/components/Common/SectionIntro";
import ContactForm from "@/components/Contact/ContactForm";
import Head from "next/head";
import { supportMenu } from "@/components/menu";
import { Variants, motion } from "framer-motion";

export default function GlobalNetworkServicePage() {
  const containerVarients: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
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

  return (
    <>
      <Head>
        <title>주식회사 이에프디 | 문의</title>
      </Head>
      <SectionIntro imageSrc="/global-intro.jpg" customLinks={supportMenu} />
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVarients}
        className="mx-auto flex w-full max-w-345 flex-col gap-21 px-8.75 py-21 md:gap-25 md:py-25"
      >
        <motion.h1
          variants={itemVariants}
          className="relative text-center text-[1.75rem] font-bold after:absolute after:-bottom-3.5 after:left-1/2 after:h-px after:w-10 after:-translate-x-1/2 after:bg-[#213691]"
        >
          문의
        </motion.h1>

        <motion.div variants={itemVariants}>
          <ContactForm />
        </motion.div>
      </motion.section>
    </>
  );
}
