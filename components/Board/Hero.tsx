import Image from "next/image";
import { Download, Eye } from "../Common/Icons";
import { useState } from "react";
import { Documents } from "@/types/payload-types";
import Link from "next/link";
import { Variants, motion } from "framer-motion";

interface Props {
  data: Documents;
}

const Hero: React.FC<Props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const containerVarients: Variants = {
    hidden: {},
    visible: {
      transition: {
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
        브로슈어
      </motion.h1>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVarients}
        className="grid gap-5 md:grid-cols-4"
      >
        {data.data.map((elem, index) => {
          const pdfUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}${elem.PDF.url}`;

          return (
            <motion.div
              variants={itemVariants}
              onClick={() => innerWidth < 600 && setActiveIndex(index)}
              key={elem.id}
              className="group relative flex flex-col overflow-hidden border border-[#ededed] pb-17.5"
            >
              <div className="p-5">
                <Image
                  className="h-80 w-full rounded-3xl object-cover md:h-98.5"
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${elem.Image.url}`}
                  alt="pdf-preview"
                  height={1080}
                  width={1920}
                />
              </div>
              <div
                data-active={index === activeIndex}
                className="absolute -bottom-32.5 left-0 z-20 flex w-full flex-col border-t border-[#ededed] bg-white px-7.5 pb-6 transition-all duration-500 group-hover:bottom-0 group-hover:bg-[#213691] data-[active='true']:bottom-0 data-[active='true']:bg-[#213691]"
              >
                <h2
                  data-active={index === activeIndex}
                  className="py-6 text-center text-lg text-black transition-colors group-hover:text-white data-[active='true']:text-white"
                >
                  {elem.Title}
                </h2>
                <div className="flex flex-col gap-2.5">
                  <Link
                    href={pdfUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex cursor-pointer items-center justify-between gap-5 rounded-[10px] bg-white px-5 py-3"
                  >
                    <span>PDF Preview</span>
                    <span className="inline-block size-6">
                      <Eye />
                    </span>
                  </Link>
                  <button
                    onClick={async () => {
                      try {
                        const response = await fetch(pdfUrl);
                        const blob = await response.blob();

                        const blobUrl = window.URL.createObjectURL(blob);

                        const link = document.createElement("a");
                        link.href = blobUrl;
                        link.download = `${elem.Title}.pdf`;

                        document.body.appendChild(link);
                        link.click();

                        link.remove();
                        window.URL.revokeObjectURL(blobUrl);
                      } catch (error) {
                        console.error("Download failed:", error);
                      }
                    }}
                    className="flex cursor-pointer items-center justify-between gap-5 rounded-[10px] bg-white px-5 py-3"
                  >
                    <span>PDF Download</span>
                    <span className="inline-block size-6">
                      <Download />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Hero;
