import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Application = () => {
  const [activeCard, setActiveCard] = useState<Data>(data[0]);

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
      className="relative flex min-h-screen w-full items-center justify-center"
    >
      <Image
        className="absolute inset-0 h-full w-full object-cover"
        src="/home/application.png"
        width={1920}
        height={1080}
        alt="section-img"
      />
      <div className="relative z-10 mx-auto flex w-full max-w-345 flex-col justify-between gap-12.5 px-8.75 py-21 text-white md:flex-row">
        <div className="flex flex-col gap-15 md:w-1/2 md:gap-37.5">
          <div className="flex flex-col gap-5 md:gap-10">
            <motion.h1
              variants={itemVariants}
              className="text-[1.875rem] leading-[100%] font-bold md:text-[3.125rem]"
            >
              Field of application
            </motion.h1>
            <motion.p variants={itemVariants}>
              차별화된 시스템과 고객 서비스로
              <br />
              세계 최고수준의 서비스를 제공합니다
            </motion.p>
          </div>
          <div className="flex flex-col items-start gap-8 text-2xl leading-[100%] font-bold md:text-[2.1875rem] md:font-medium">
            {data.map((elem, index) => {
              return (
                <motion.button
                  whileHover={{ x: 10 }}
                  variants={itemVariants}
                  //   transition={{ type: "spring", stiffness: 300 }}
                  data-active={activeCard.id === elem.id}
                  className="cursor-pointer opacity-50 transition-opacity duration-500 data-[active='false']:text-[#FFFFFF70] data-[active='true']:font-bold data-[active='true']:opacity-100"
                  key={index}
                  onPointerEnter={() => setActiveCard(elem)}
                >
                  {elem.title}
                </motion.button>
              );
            })}
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          className="flex flex-col items-center justify-center md:w-1/2"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="rounded-[30px] bg-white px-7.5 py-11.25 text-black md:px-11 md:py-15"
            >
              <span className="mb-2.5 block md:mb-6">
                {activeCard.subtitle}
              </span>
              <h1 className="mb-4.5 text-[1.625rem] leading-[100%] font-bold md:mb-9.5">
                {activeCard.title}
              </h1>
              <Image
                className="mb-6 h-47.5 w-full object-cover md:mb-5 md:h-58 md:w-110 2xl:h-77.5"
                src={activeCard.imgSrc}
                alt="card-img"
                width={1920}
                height={1080}
              />
              <p className="mb-6 min-h-20 max-w-95 text-sm md:mb-10 md:min-h-18 md:text-base 2xl:mb-13.5">
                {activeCard.desc}
              </p>
              <div className="flex max-w-95 flex-wrap gap-2">
                {activeCard.tags.map((elem, index) => {
                  return (
                    <p
                      className="rounded-full bg-[#F2F2F2] px-4.5 py-1 text-sm md:text-base"
                      key={index}
                    >
                      {elem}
                    </p>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Application;

interface Data {
  id: string;
  title: string;
  subtitle: string;
  imgSrc: string;
  desc: string;
  tags: string[];
}

const data: Data[] = [
  {
    id: "0",
    title: "마이크로그리드 에너지관리시스템",
    subtitle: "CONTAINER SERVICE",
    imgSrc: "/home/application/0.png",
    desc: `다양한 신재생에너지로 구성된 Micro Grid의 전력계통을 
종합적으로 관리하는 시스템,신재생에너지와 배터리(ESS) 등을 이용, 
섬에 필요한 에너지를 스스로 생산, 사용하는 에너지자립섬 구현`,
    tags: ["마이크로 그리드", "관리 시스템", "신재생에너지"],
  },
  {
    id: "1",
    title: "해양모빌리트 추진 시스템",
    subtitle: "ENERGY STORAGE",
    imgSrc: "/home/application/1.png",
    desc: `다양한 신재생에너지로 구성된 Micro Grid의 전력계통을 
종합적으로 관리하는 시스템,신재생에너지와 배터리(ESS) 등을 이용, 
섬에 필요한 에너지를 스스로 생산, 사용하는 에너지자립섬 구현`,
    tags: ["마이크로 그리드", "관리 시스템", "신재생에너지"],
  },
  // {
  //   id: "2",
  //   title: "추진 시스템",
  //   subtitle: "PROPULSION SYSTEM",
  //   imgSrc: "/home/about/2.png",
  //   desc: "선박 및 다양한 운송 수단에 동력을 제공하는 핵심 시스템으로, 효율성과 안정성을 동시에 고려하여 설계되었습니다.",
  //   tags: ["선박 엔진", "하이브리드 추진", "자동화 시스템"],
  // },
  // {
  //   id: "3",
  //   title: "친환경 보트",
  //   subtitle: "ECO-FRIENDLY BOAT",
  //   imgSrc: "/home/hero/1.png",
  //   desc: "전기 및 수소 기반의 친환경 동력을 사용하는 보트로, 소음과 배출가스를 최소화하여 환경 보호에 기여합니다.",
  //   tags: ["레저", "해양 관광", "무공해 운송"],
  // },
];
