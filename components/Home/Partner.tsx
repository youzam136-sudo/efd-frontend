import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const Partner = () => {
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
      className="relative flex w-full items-center justify-center md:min-h-screen"
    >
      <Image
        className="absolute inset-0 h-full w-full object-cover"
        src="/home/partner.png"
        width={1920}
        height={1080}
        alt="section-img"
      />
      <div className="relative z-10 flex w-full flex-col gap-13.75 py-24 text-white md:gap-25 md:py-0">
        <div className="mx-auto flex w-full max-w-345 flex-col gap-10 px-8.75">
          <motion.span variants={itemVariants} className="text-lg font-bold">
            Our Partner
          </motion.span>
          <motion.h1
            variants={itemVariants}
            className="text-3xl leading-[140%] font-bold md:text-[3.125rem]"
          >
            파트너사들과
            <br />
            함께 성장해가는
            <br />
            이에프티입니다.
          </motion.h1>
        </div>
        <motion.div variants={containerVariants} className="w-full">
          <Marquee autoFill>
            {[...Array(9)].map((elem, index) => {
              return (
                <Image
                  key={index}
                  className="mx-10 h-25 w-25 object-contain"
                  src={`/home/partners/${index}.png`}
                  alt="logo"
                  width={1024}
                  height={1024}
                />
              );
            })}
          </Marquee>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Partner;
