import { Marker } from "@/components/Common/Icons";
import ImageModal from "@/components/Common/ImageModal";
import SectionIntro from "@/components/Common/SectionIntro";
import Head from "next/head";
import Image from "next/image";
import { solutionMenu } from "@/components/menu";
import { useState } from "react";

export default function MarinegridPage() {
  const [modalSrc, setModalSrc] = useState<string | null>(null);

  return (
    <>
      <ImageModal
        src={modalSrc}
        alt="location-image"
        onClose={() => setModalSrc(null)}
      />
      <Head>
        <title>주식회사 이에프디 | 해양모빌리트 추진 시스템</title>
      </Head>
      <SectionIntro imageSrc="/micro-intro.jpg" customLinks={solutionMenu} />
      <section className="mx-auto flex w-full max-w-345 flex-col gap-21 px-8.75 py-21 md:gap-25 md:py-25">
        <div className="flex flex-col gap-9">
          <h1 className="relative text-center text-[1.75rem] font-bold after:absolute after:-bottom-3.5 after:left-1/2 after:h-px after:w-10 after:-translate-x-1/2 after:bg-[#213691]">
            마이크로그리드 에너지관리시스템
          </h1>
          <p className="text-center">Micro Grid - Energy Management System</p>
        </div>
        <Image
          className="h-93.25 w-full rounded-3xl object-cover"
          src="/micro.jpg"
          alt="hero-img"
          width={1920}
          height={1080}
        />
        <div className="flex flex-col">
          {steps.map(({ title, bullets }, index) => {
            return (
              <div
                key={index}
                className="grid gap-6 border-b border-[#E8E8E8] py-11.5 last:border-b-0 md:grid-cols-6 md:px-16 md:pt-17.5 md:pb-25"
              >
                <div className="flex flex-col gap-6 md:col-span-2">
                  <h2 className="text-[2rem] leading-[110%]">{title}</h2>
                </div>
                <ul className="list-inside list-disc md:col-span-4">
                  {bullets.map(({ details, point }, index) => {
                    return (
                      <>
                        <li
                          data-bold={details.length > 0}
                          className="data-[bold='true']:font-bold"
                          key={index}
                        >
                          {point}
                        </li>
                        {details.length > 0 && (
                          <ul className="mb-14 list-inside list-disc pl-8 last:mb-0">
                            {details.map((detail, index) => {
                              return <li key={index}>{detail}</li>;
                            })}
                          </ul>
                        )}
                      </>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <h2 className="text-center text-[2rem] leading-[110%]">약어 정리</h2>
        <div className="flex flex-col">
          {types.map(({ desc, title }, index) => {
            return (
              <div
                key={index}
                className="flex flex-col border-x border-b border-[#EEEEEE] first:border-t md:flex-row"
              >
                <div className="flex min-w-50 items-center justify-center bg-[#F5F5F5] px-12 py-4">
                  <h3>{title}</h3>
                </div>
                <div className="flex items-center justify-center px-4 py-4 md:px-17">
                  <p>{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-8 flex flex-col">
          <div className="flex flex-col gap-4">
            <h2 className="mb-2 text-[2rem] leading-[110%] font-bold">
              납품실적
            </h2>
            <p>다양한 납품실적을 통한 효성중공업의 노하우가 있습니다.</p>
          </div>
        </div>
        <div className="mt-[-70px] flex flex-col items-center gap-17 md:flex-row">
          {locations.map(({ desc, imageSrc, tag, title }, index) => {
            return (
              <div
                key={index}
                className="flex w-full flex-col-reverse justify-between gap-5 rounded-[20px] border border-[#EEEEEE] p-6 md:min-w-139 md:flex-row md:gap-0"
              >
                <div className="flex flex-col">
                  <div className="mb-5 flex gap-1.5 text-[#2A4676] md:mb-10">
                    <div className="size-6">
                      <Marker />
                    </div>
                    <p className="font-bold">{tag}</p>
                  </div>
                  <h2 className="mb-2 text-xl font-bold">{title}</h2>
                  <p>{desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setModalSrc(imageSrc)}
                  className="h-40.5 w-full cursor-zoom-in overflow-hidden rounded-2xl md:w-45.5"
                >
                  <Image
                    className="h-full w-full object-cover"
                    src={imageSrc}
                    alt="location-image"
                    width={1920}
                    height={1080}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

const locations = [
  {
    tag: "대한민국",
    title: "가파도 1MW/2.3MWh",
    desc: "제주특별자치도 서귀포시",
    imageSrc: "/locations/0.jpg",
  },
  {
    tag: "대한민국",
    title: "가파도 1MW/2.3MWh",
    desc: "제주특별자치도 서귀포시",
    imageSrc: "/locations/1.jpg",
  },
];

const steps = [
  {
    title: "개요",
    bullets: [
      {
        point:
          "다양한 신재생에너지로 구성된 Micro Grid의 전력계통을 종합적으로 관리하는 시스템",
        details: [],
      },
      {
        point:
          "신재생에너지와 배터리(ESS) 등을 이용, 섬에 필요한 에너지를 스스로 생산, 사용하는 에너지자립섬 구현",
        details: [],
      },
      {
        point:
          "분산형전원을 제어자원으로 활용, 에너지이용 최적화 및 신재생자원화를 수행하는 능동배전망 운영체계 구축",
        details: [],
      },
    ],
  },
  {
    title: "주요 기능",
    bullets: [
      {
        point:
          "국제표준(CORBA)기반 실시간 미들웨어(uPowerCUBE, Creative and Unified Base Engine) 탑재",
        details: [],
      },
      {
        point: "독립형/연계(배전급)형 MG 전력계통에 최적화된 SCADA+EMS 기능",
        details: [],
      },
      {
        point:
          "디젤발전기기, 분산형전원, 에너지저장장치(ESS)와 연계된 독립/단독운전 지원",
        details: [],
      },
      {
        point:
          "에너지저장장치(ESS)를 활용한 최적 수요관리 및 경제급전, 자동발전제어 제공",
        details: [],
      },
      {
        point: "멀티 프로토콜 및 동시계측을 통한 현장 데이터 동기화",
        details: [],
      },
    ],
  },
  {
    title: "특징 및 장점",
    bullets: [
      {
        point:
          "분산형전원 기반 독립형 및 계통연계형(배전급) 전력계통의 안정적 운영기반 제공",
        details: [],
      },
      {
        point: "배전지능화기술(DAS)을 활용한 MG 전력계통 운영업무의 효율화",
        details: [],
      },
    ],
  },
  {
    title: "도입 효과",
    bullets: [
      {
        point: "MG내 에너지관리 자동운전으로 경제성 효과 극대화",
        details: [
          "디젤발전기 및 분산형전원 정지/가동시간 협조체제로 연료비 절감",
          "최소 ESS 충방전량 동작을 통한 배터리 수명연장, 용량 축소화",
          "장기적 전력 에너지의 안정적 수급조정",
        ],
      },
      {
        point: "EMS Application 보유기술 고도화",
        details: [
          "분산형전원 최적설계로 전력부하의 안정적 수급조정",
          "발전원 및 부하의 최적 스케쥴링을 통한 에너지관리 효율화",
          "도서지역 전력공급비용 감소 및 분산형전원 운전비용 절감",
        ],
      },
      {
        point: "SCADA/EMS 운영 플랫폼 보유기술 고도화",
        details: [
          "현장기기 데이터와 EMS Application의 실시간 처리 환경확보",
          "분산형전원 융합 배전계통의 UC, ED 통합개념의 EMS 기술 고도화",
          "현장기기 데이터 취득 동기화 및 데이터 신뢰도 확보",
        ],
      },
      {
        point: "국내 외 Micro Grid 신 사업모델 개척",
        details: [
          "독립형 에너지자립섬 구축사업(하화도 등)",
          "해외 분산형전원 종합감시시스템 사업",
          "대용량 분산형전원 및 계통연계 운영 관리시스템으로 활용",
        ],
      },
    ],
  },
];

const types = [
  {
    title: "MG-EMS",
    desc: "Micro Grid – Energy Management System(신재생 에너지 종합관리시스템)",
  },
  { title: "ESS", desc: "Energy Storage System(에너지 저장장치)" },
  {
    title: "CORBA",
    desc: "Common Object Request Broker Architecture(대표적인 분산 객체 기술의 일종)",
  },
  {
    title: "SCADA System",
    desc: "Supervisory Control And Data Acquisition System(감시 제어 데이터 수집 시스템)",
  },
  { title: "EMS", desc: "Energy Management System(에너지 관리 시스템)" },
  { title: "DAS", desc: "Distribution Automation System (배전지능화 시스템)" },
  {
    title: "MG",
    desc: "Micro Grid(소규모 지역에서 전력을 자급자족할 수 있는 소규모 독립형 전력망·태양광·풍력 등 신재생 에너지원과 에너지저장장치(ESS)가 융·복합된 차세대 전력 체계) Automation System (배전지능화 시스템)",
  },
  { title: "UC", desc: "Unit commitment(발전기 운영계획)" },
  { title: "ED", desc: "Economic Dispatch(경제 급전)" },
  { title: "D/L", desc: "Distribution Line(배전선로)" },
  { title: "SOC", desc: "State Of Change (충전상태)" },
  {
    title: "DNP3.0",
    desc: "Distributed Network Protocol(유틸리티 산업을 위해 설계된 표준 통신 프로토콜)",
  },
  {
    title: "MODBUS",
    desc: "(산업장비들간 통신을 위한 시리얼 방식의 통신 프로토콜)",
  },
];
