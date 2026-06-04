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
        CEO 인사말
      </motion.h1>
      <div className="flex w-full flex-col gap-21 md:flex-row md:gap-25">
        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col gap-7 md:w-1/2 md:gap-14"
        >
          <span className="text-xl font-bold text-[#213691]">EFD</span>
          <h2 className="text-2xl font-light md:font-bold">
            친환경 해양 모빌리티의 미래
            <br />
            우리가 만들어 나갑니다.
          </h2>

          <div className="flex flex-col gap-5 text-sm">
            <p>
              혁신적인 스마트 제조와 친환경 에너지 솔루션의 융합을 선도하는
              이에프디(EFD)입니다. 현재 인류는 기후 위기라는 거대한 도전 앞에 서
              있습니다. 2050년 무탄소(Emission Zero) 경제 체제로의 전환은 선택이
              아닌 필수이며, 이를 위해 제조 현장 역시 화석 연료 중심의 과거에서
              벗어나 지능형·저탄소 시스템으로 완전히 탈바꿈해야 합니다.
            </p>

            <p>
              이에프디는 제조 공정의 효율을 극대화하는 스마트 공장(Smart
              Factory) 개발과 친환경 추진 시스템 연구에 앞장서고 있습니다.
              우리는 단순히 제품을 생산하는 것을 넘어, 데이터 기반의 지능형 제어
              기술과 고효율 에너지 솔루션을 통합하여 산업 현장의 탄소 배출을
              획기적으로 줄이는 최첨단 엔지니어링을 실현합니다.
            </p>

            <p>
              생산성을 높이는 스마트 기술이 곧 환경을 보호하는 기술이라는
              믿음으로, 우리는 고객사의 경쟁력을 강화하고 지구 환경에 긍정적인
              영향을 주는 고품질 제품을 만드는 데 자부심을 느낍니다.
            </p>

            <p>
              앞으로도 이에프디는 변화하는 산업 트렌드에 발맞춰 스마트 제조
              혁신을 지속하고, 고객의 기대를 만족시키는 완벽한 솔루션을 제공하기
              위해 연구·생산 현장에서 끊임없이 정진하겠습니다.
            </p>
          </div>
          <p className="text-lg font-bold">이에프디 대표이사 대표이사 박형준</p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex w-full items-center justify-center md:w-1/2"
        >
          <Image
            className="h-95 w-full object-cover md:h-184.5 md:w-145"
            src="/ceo/efd.png"
            alt="hero-img"
            width={1920}
            height={1080}
          />
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVarients}
        className="grid grid-cols-2 gap-10 md:mt-0 md:grid-cols-4 md:gap-24"
      >
        {fields.map(({ imageSrc, title }, index) => {
          return (
            <motion.div
              variants={itemVariants}
              key={index}
              className="flex flex-col gap-3 md:gap-11"
            >
              <Image
                className="aspect-square w-full rounded-full object-cover"
                src={imageSrc}
                alt="field-image"
                width={1920}
                height={1080}
              />
              <h2 className="text-center text-[1rem] leading-[100%] font-medium md:text-[1.2rem]">
                {title}
              </h2>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Hero;

const fields = [
  { title: "무탄소", imageSrc: "/ceo/0.jpg" },
  { title: "해양산업부문", imageSrc: "/ceo/1.jpg" },
  { title: "수소연료", imageSrc: "/ceo/2.jpg" },
  { title: "전기 배터리", imageSrc: "/ceo/3.jpg" },
];
