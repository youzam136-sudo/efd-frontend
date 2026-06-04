import MapModal from "./MapModal";
import GoogleMap from "./GoogleMap";
import { Variants, motion } from "framer-motion";

const branches = [
  {
    title: "싱가포르 법인",
    lines: [
      "9 Straits View, Marina One West Tower, #05-07, Singapore, VINSSEN INTERNATIONAL",
      "070-4252-0194",
      "051-980-7004",
      "business@vinssen.com",
    ],
  },
  {
    title: "미국 법인",
    lines: [
      "1730 Minor Ave, Suite 1050, Seattle, WA 98101 KOSME USA Seattle",
      "business@vinssen.com",
    ],
  },
  {
    title: "그리스 대리점",
    lines: [
      "4, Skouze Str.,185 36 Piraeus, Greece INTRA MARE",
      "+30 210 4293843",
      "g.gerassimou@intramare.gr",
    ],
  },
  {
    title: "러시아 대리점",
    lines: [
      "KORPROD, 190121, Russian Federation, St. Petersburg, st. Soyuz Pechatnikov, d.13-15, Lit.A, Room 1-N, office 2",
      "+7 921 922 60 44",
      "sinwoosik@mail.ru",
    ],
  },
  {
    title: "말레이시아 대리점",
    lines: [
      "27-1, Jalan Setia Utama AR U13/AR, Seksyen U13, 40170 Shah Alam, Selangor, Malaysia",
      "+60 19 7290327",
      "ernest@fullpointconcept.com",
    ],
  },
  {
    title: "인도네시아 대리점",
    lines: [
      "JAPFA Tower II Floor 12, JI, Panglima Sudirman Kav, 66-68, Kota Surabaya - Jawa Timur 60271",
      "+62 031 6001 8557",
      "iqbal.safitra@tbmmarine.com",
    ],
  },
] as const;

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
        글로벌 네트워크 서비스
      </motion.h1>
      <motion.div
        variants={itemVariants}
        className="h-60 w-full md:mb-12 md:h-150"
      >
        <MapModal />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
      >
        <GoogleMap
          src={`https://www.google.com/maps?hl=ko&q=${34.75416585558409},${126.44864093483892}&z=16&output=embed`}
          title="EFD Google Map"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVarients}
        className="grid gap-5 md:grid-cols-3"
      >
        <motion.div
          variants={itemVariants}
          className="flex h-53 flex-col gap-5 bg-[#F9F9F9] px-9 py-12"
        >
          <h2 className="text-xl font-bold">ADD</h2>
          <div className="h-px w-full bg-[#E8E8E8]" />
          <p className="text-[#2D2D2D]">
            전남 영암군 삼호읍 대불주거7로 68, 2층 201호
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex h-53 flex-col gap-5 bg-[#F9F9F9] px-9 py-12"
        >
          <h2 className="text-xl font-bold">E-mail</h2>
          <div className="h-px w-full bg-[#E8E8E8]" />
          <p className="text-[#2D2D2D]">hyunhjun.efd@gmail.com</p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex h-53 flex-col gap-5 bg-[#F9F9F9] px-9 py-12"
        >
          <h2 className="text-xl font-bold">WEBSITE</h2>
          <div className="h-px w-full bg-[#E8E8E8]" />
          <p className="text-[#2D2D2D]">efd.co.kr</p>
        </motion.div>
      </motion.div>
      {/* global office */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVarients}
        className="flex flex-col gap-8 bg-[#F9F9F9] px-9 py-12"
      >
        <motion.h2
          variants={itemVariants}
          className="text-lg font-bold md:text-xl"
        >
          글로벌지사
        </motion.h2>
        <div className="grid gap-7 md:grid-cols-2">
          {branches.map(({ title, lines }) => (
            <motion.div
              variants={itemVariants}
              key={title}
              className="flex flex-col gap-3"
            >
              <h3 className="font-bold">{title}</h3>
              <ul className="list-outside list-disc space-y-1 pl-5 text-sm text-[#2D2D2D] md:text-base">
                {lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
