import { Variants, motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const sectionVarients: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

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
        채용
      </motion.h1>
      <motion.div variants={itemVariants}>
        <Image
          className="h-52.5 w-full rounded-3xl object-cover md:h-93.25"
          src="/news.jpg"
          alt="section-img"
          width={1920}
          height={1080}
        />
      </motion.div>
      <div className="flex flex-col items-center justify-center gap-16.5">
        <motion.h2
          variants={itemVariants}
          className="relative text-center text-xl font-bold after:absolute after:-bottom-3.5 after:left-1/2 after:h-px after:w-10 after:-translate-x-1/2 after:bg-[#213691] md:text-[1.75rem]"
        >
          함께 미래를 설계할 혁신가들을 기다립니다
        </motion.h2>
        <motion.p variants={itemVariants} className="max-w-195 text-center">
          이에프디(EFD)는 수소 및 전기 추진 시스템 개발을 전문으로 하며, 해양
          모빌리티의 디지털 전환을 선도하는 기업입니다. 우리는 단순한 기술
          개발을 넘어, 지구와 해양 생태계에 긍정적인 변화를 일으킬 지속 가능한
          미래를 설계하고 있습니다.
        </motion.p>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
        className="flex flex-col gap-6 bg-[#F3F3F3] px-6 py-10 md:px-7.5 md:py-13"
      >
        <h2 className="font-bold">[주요 업무 및 비전]</h2>

        <p>
          친환경 해양 혁신: 배터리 전기 추진 및 수소 추진 시스템 등 가장 가까운
          미래를 타깃으로 한 친환경 해양 추진 기술 개발에 전념하고 있습니다.
          <br />
          스마트 제조 솔루션: 스마트 공장 구축 컨설팅과 고도화된 산업용
          소프트웨어 개발을 통해 제조 현장의 효율성을 극대화합니다.
          <br />
          변화와 도전: 팀원 간의 유기적인 협업과 상호 동기 부여를 통해 끊임없는
          변화와 혁신을 추구하며, 각자의 책임을 성실히 이행하는 문화를
          지향합니다.
        </p>

        <p>
          고객 중심의 품질 경영: 고객의 다양한 요구를 충족시키는 것을 넘어,
          기대를 뛰어넘는 고품질의 제품과 솔루션을 생산하기 위해 모든 임직원이
          최선을 다하고 있습니다.
          <br />
          이에프디(EFD)와 함께 새로운 50년의 해양·디지털 혁신을 만들어갈
          열정적인 인재들의 지원을 기다립니다.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVarients}
        className="flex flex-col"
      >
        {steps.map(({ title, subtitle, desc }, index) => {
          return (
            <motion.div
              variants={itemVariants}
              key={index}
              className="grid gap-6 border-b border-[#E8E8E8] py-11.5 last:border-b-0 md:grid-cols-6 md:px-16 md:pt-17.5 md:pb-25"
            >
              <div className="flex flex-col gap-6 md:col-span-2">
                <h2 className="text-3xl leading-[110%] font-bold text-[#213691] md:text-[3.125rem]">
                  {title}
                </h2>
                <h3 className="text-xl leading-[110%] md:text-[2rem]">
                  {subtitle}
                </h3>
              </div>
              <p className="text-sm md:col-span-4 md:text-base">{desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Hero;

const steps = [
  {
    title: "STEP 01",
    subtitle: "서류 심사",
    desc: "지원자가 해당 직무에 필요한 기본 능력과 자격을 갖추고 있는지를 평가하기 위해 진행되는 단계입니다.",
  },
  {
    title: "STEP 02",
    subtitle: "1차 면접",
    desc: "1차 면접은 지원자의 실무 기술을 평가하고 이력서와 포트폴리오와의 일관성을 확인하는 데 중점을 둡니다.",
  },
  {
    title: "STEP 03",
    subtitle: "2차 면접",
    desc: "2차 면접은 이력서와 자기 소개서를 기반으로 지원자의 개인적인 특성과 성향을 탐구합니다.",
  },
  { title: "STEP 04", subtitle: "최종 합격", desc: "" },
];
