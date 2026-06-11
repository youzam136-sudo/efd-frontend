import { Blogs } from "@/types/payload-types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  products: Blogs;
}

const Hero: React.FC<Props> = ({ products }) => {
  return (
    <section className="mx-auto flex w-full max-w-345 flex-col gap-21 px-8.75 py-21 md:gap-25 md:py-25">
      <div className="grid w-full gap-12 md:grid-cols-3 md:gap-x-12 md:gap-y-25">
        {products.data.map(({ Title, Feature_Image, Excerpt, Slug }, index) => {
          return (
            <Link
              href={`/product/${Slug}`}
              key={index}
              className="flex flex-col gap-7.5 md:gap-10"
            >
              <Image
                src={Feature_Image.url?.startsWith("http") ? Feature_Image.url : `${process.env.NEXT_PUBLIC_BACKEND_URL}${Feature_Image.url}`}
                className="aspect-square w-full object-cover"
                alt={Feature_Image.alternativeText ?? "feature-image"}
                width={1920}
                height={1080}
              />
              <div className="flex flex-col gap-4">
                <h2 className="text-[2rem] leading-[100%] font-bold">
                  {Title}
                </h2>
                {Excerpt && <p>{Excerpt}</p>}
                <button className="rounded-xl bg-[#213691] py-5 text-white transition-opacity duration-300 hover:cursor-pointer hover:opacity-80">
                  자세히보기 +
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
