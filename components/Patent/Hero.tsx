import { Patents } from "@/types/payload-types";
import NextImage from "next/image";

interface Props {
  patents: Patents;
}

const Hero: React.FC<Props> = ({ patents }) => {
  return (
    <section className="mx-auto flex w-full max-w-345 flex-col gap-21 px-8.75 py-21 md:gap-25 md:py-25">
      <h1 className="relative text-center text-[1.75rem] font-bold after:absolute after:-bottom-3.5 after:left-1/2 after:h-px after:w-10 after:-translate-x-1/2 after:bg-[#213691]">
        특허 / 인증서
      </h1>
      <div className="grid w-full gap-12 md:grid-cols-3 md:gap-x-12 md:gap-y-25">
        {patents.data.map(({ Title, Image }, index) => {
          return (
            <div key={index} className="flex flex-col gap-7.5 md:gap-10">
              <NextImage
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${Image.url}`}
                className="aspect-square w-full object-cover"
                alt={Image.alternativeText ?? "patent-image"}
                width={1920}
                height={1080}
              />
              <div className="flex flex-col gap-4">
                <h2 className="text-center text-[1.5rem] leading-[100%] font-medium">
                  {Title}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
