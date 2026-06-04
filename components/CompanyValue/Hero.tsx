import { Variants, motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const containerVarients: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const sectionVarients: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.5,
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
        회사가치
      </motion.h1>

      <div className="flex flex-col items-center">
        <motion.div variants={itemVariants}>
          <Image
            className="mb-11.5 w-full object-contain md:h-53 md:w-109"
            src="/company-value/logo.png"
            alt="logo"
            width={1920}
            height={1080}
          />
        </motion.div>
        <motion.h2
          variants={itemVariants}
          className="mb-6.5 text-center text-2xl leading-[140%] font-bold md:text-[2rem]"
        >
          새로운 CI는 EFD를 나타내는
          <br />
          대표적이며 핵심적인 시각 상징 요소입니다
        </motion.h2>
        <motion.p variants={itemVariants} className="text-center">
          친환경 해양 모빌리티와 스마트 제조 혁신을
          <br className="block md:hidden"></br>
          연결하는 "Infinite Connection"
          <br className="block md:hidden"></br>
          마크는 그린과 블루 컬러의 조화로 다채롭게
          <br className="block md:hidden"></br>
          이루어져 있으며, 이는 이에프디의 다양한{" "}
          <br className="block md:hidden"></br>
          비즈니스를 하나로
          <br className="block md:hidden"></br>
          <br className="hidden md:block" />
          결속시키고 인류의 미래를 위한
          <br className="block md:hidden"></br>혁신과 끊임없는 도전 의지를
          담았습니다.
        </motion.p>
      </div>

      <motion.div variants={itemVariants} className="flex justify-center">
        <button
          className="border border-[#CFCFCF] px-20 py-5 font-[1rem] hover:cursor-pointer"
          onClick={() => {
            const result = window.confirm("AI 파일을 다운로드하시겠습니까?");
            if (result) {
              window.open("/company.ai", "_blank");
            }
          }}
        >
          AI 파일 다운로드
        </button>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVarients}
        className="flex flex-col gap-4.5"
      >
        <motion.h2
          variants={itemVariants}
          className="mb-6.5 text-[1.625rem] leading-[100%] font-bold md:text-[2rem]"
        >
          컬러 시스템 (Color System)
        </motion.h2>
        <motion.p variants={itemVariants} className="max-w-182">
          EFD Blue, EFD Green 계열 컬러는 이에프디(EFD)를 대표하는 색상으로,
          친환경 해양 생태계와 스마트 기술의 융합을 상징하며 지속 가능한 미래
          가치를 창출하겠다는 의지를 담고 있습니다.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="mt-9 grid gap-7.5 md:mt-25 md:grid-cols-2 md:gap-15"
        >
          <div className="flex flex-col gap-14">
            <div className="h-80 w-full bg-[#003366] p-10 md:h-95 md:p-14">
              <p className="text-xl font-bold text-white">
                EFD
                <br />
                NAVY BLUE
              </p>
            </div>
            <p className="font-bold md:text-lg">
              HEX #003366
              <br />
              RGB R0 G51 B102
              <br />
              무한한 가능성의 바다와 기술에 대한 신뢰를 상징합니다.
            </p>
          </div>
          <motion.div variants={itemVariants} className="flex flex-col gap-14">
            <div className="h-80 w-full bg-[#38B143] p-10 md:h-95 md:p-14">
              <p className="text-xl font-bold text-white">
                EFD
                <br />
                ECO GREEN
              </p>
            </div>
            <p className="font-bold md:text-lg">
              HEX #38B143
              <br />
              RGB R56 G177 B67
              <br />
              친환경 에너지와 생동감 넘치는 해양 생태계를 상징합니다.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVarients}
        className="flex flex-col gap-4.5"
      >
        <motion.h2
          variants={itemVariants}
          className="mb-6.5 text-[1.625rem] leading-[100%] font-bold md:text-[2rem]"
        >
          시그니처 타입
        </motion.h2>
        <motion.p variants={itemVariants} className="max-w-182">
          시그니처 타입은 심볼마크와 로고타입을 균형적으로 조합한 형태입니다.
          디지털 및 오프라인 등 다양한 매체 상황에 맞춰 최적화된 브랜드 이미지를
          전달하기 위해 사용합니다.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Image
            className="mt-9 w-full md:mt-25"
            src="/company-value/logo-map.png"
            alt="logo-map"
            width={1920}
            height={1080}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
