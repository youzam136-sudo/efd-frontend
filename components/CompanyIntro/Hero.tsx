import { Variants, motion } from "framer-motion";

const Hero = () => {
  const containerVarients: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.25,
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
        회사개요
      </motion.h1>
      <div className="flex max-w-227.5 flex-col">
        <motion.span
          variants={itemVariants}
          className="mb-8 inline-block text-xl font-bold text-[#213691]"
        >
          EFD
        </motion.span>
        <motion.p
          variants={itemVariants}
          className="mb-10 text-2xl leading-[150%] font-bold md:text-[2rem] md:leading-[100%]"
        >
          지속 가능한 바다, <br className="block md:hidden" />
          스마트한 미래를 여는
        </motion.p>
        <motion.p
          variants={itemVariants}
          className="mb-20 w-[90%] text-sm leading-7 whitespace-pre-line md:text-base md:leading-8"
        >
          {`이에프디(EFD)는 해양 산업의 패러다임을 바꾸는 친환경 모빌리티 솔루션 및 스마트 제조 혁신 전문 기업입니다.

선박용 배터리 시스템과 친환경 추진 기술을 통해 깨끗한 해양 생태계를 구축하며, 스마트 공장 컨설팅과 고도화된 프로그램 개발을 통해 제조 현장의 디지털 전환(DX)을 선도하고 있습니다.

축적된 기술력을 바탕으로 설계부터 운영 최적화까지, 산업 전반을 아우르는 친환경·디지털 통합 솔루션을 제공하며 새로운 50년의 미래 가치를 창출하고 있습니다.`}
        </motion.p>
        <div className="flex flex-col">
          <motion.div
            variants={itemVariants}
            className="grid gap-1 border-b border-[#CFCFCF] py-9 first:border-t md:grid-cols-6"
          >
            <h2 className="text-base font-bold md:col-span-2 md:text-lg">
              대표
            </h2>
            <p className="text-sm md:col-span-4 md:text-base">박형준</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="grid gap-2 border-b border-[#CFCFCF] py-9 first:border-t md:grid-cols-6"
          >
            <h2 className="text-base font-bold md:col-span-2 md:text-lg">
              핵심 사업
            </h2>
            <ul className="list-outside list-disc space-y-2 pl-5 text-sm leading-6 md:col-span-4 md:text-base md:leading-7">
              <li>
                친환경 해양 모빌리티: 선박용 에너지저장장치(ESS), 배터리 추진
                시스템 기술 개발
              </li>
              <li>
                스마트 제조 솔루션: 스마트 공장 구축 컨설팅, 산업용 소프트웨어
                및 맞춤형 프로그램 개발
              </li>
            </ul>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="grid gap-1 border-b border-[#CFCFCF] py-9 first:border-t md:grid-cols-6"
          >
            <h2 className="text-base font-bold md:col-span-2 md:text-lg">
              주소
            </h2>
            <p className="text-sm md:col-span-4 md:text-base">
              전남 영암군 삼호읍 대불주거7로 68, 2층 201호
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="grid gap-1 border-b border-[#CFCFCF] py-9 first:border-t md:grid-cols-6"
          >
            <h2 className="text-base font-bold md:col-span-2 md:text-lg">
              대표전화
            </h2>
            <p className="text-sm md:col-span-4 md:text-base">{`[전화번호 입력]`}</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
