import Head from "next/head";
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { Blog, Blogs } from "@/types/payload-types";
import Image from "next/image";
import { formatIsoDate } from "@/utils/formatDate";
import SectionIntro from "@/components/Common/SectionIntro";
import { promotionMenu } from "@/components/menu";
import api from "@/lib/api";

export const getStaticPaths: GetStaticPaths = async () => {
  const response: { data: Blogs } = await api.get(
    "/blogs?pagination[pageSize]=100",
  );

  const paths = response.data.data.map((blog) => ({
    params: {
      slug: blog.Slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = (async (context) => {
  const slug = context.params?.slug as string;

  const response: {
    data: Blogs;
  } = await api.get(`/blogs?filters[Slug][$eq]=${slug}&populate=*`);

  const blog = response.data.data[0];

  if (!blog) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blog,
    },
    revalidate: 60,
  };
}) satisfies GetStaticProps<{
  blog: Blog;
}>;

export default function DynamicBlogPage({
  blog,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{`${blog.Title}`}</title>
      </Head>

      <SectionIntro customLinks={promotionMenu} />
      <section className="mt-25 flex flex-col items-center md:mt-25">
        <div className="flex w-full flex-col items-center px-8.75">
          <div className="flex w-full max-w-195 flex-col">
            <div className="mx-auto mt-10 mb-7.5 flex w-full flex-col md:mt-17.5">
              <div className="flex flex-col">
                <div className="mb-2.5 flex">
                  {/* 
                  <Link
                    href={`/category/${blog.category.slug}`}
                    className="bg-gray text-light dark:text-paragraph rounded-sm px-2.5 py-1.5 text-[11px] leading-[110%] font-medium uppercase"
                  >
                    {blog.category.title}
                  </Link> 
                  */}
                  <div className="text-paragraph px-2.5 py-1.5 text-[11px] leading-[110%] font-medium uppercase">
                    {formatIsoDate(blog.createdAt)}
                  </div>
                </div>
                <h1 className="text-[30px] leading-[110%] font-bold md:text-[60px] md:leading-[110%]">
                  {blog.Title}
                </h1>
              </div>
            </div>

            <Image
              className="relative mt-25 h-78 w-full object-cover md:h-125"
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${blog.Feature_Image.url}`}
              width={1920}
              height={1080}
              alt={blog.Feature_Image.alternativeText ?? "hero-image"}
            />
            <div
              className="prose my-25 max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.Content }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
