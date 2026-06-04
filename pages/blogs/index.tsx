import SectionIntro from "@/components/Common/SectionIntro";
import Hero from "@/components/Gallery/Hero";
import { Blog, Blogs, StrapiResponse } from "@/types/payload-types";
import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { promotionMenu } from "@/components/menu";
import api from "@/lib/api";

export const getStaticProps = (async () => {
  const response: { data: Blogs } = await api.get(
    "/blogs?populate=*&pagination[pageSize]=100",
  );

  return {
    props: {
      blogs: response.data,
    },
    revalidate: 60,
  };
}) satisfies GetStaticProps<{
  blogs: Blogs;
}>;

export default function GalleryPage({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>주식회사 이에프디 | 갤러리</title>
      </Head>
      <SectionIntro
        customLinks={promotionMenu}
        imageSrc="/promotion/banner.png"
      />
      <Hero blogs={blogs} />
    </>
  );
}
