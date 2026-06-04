import SectionIntro from "@/components/Common/SectionIntro";
import Hero from "@/components/Product/Hero";
import { Blogs } from "@/types/payload-types";
import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { productMenu } from "@/components/menu";
import api from "@/lib/api";

export const getStaticProps = (async () => {
  const response: { data: Blogs } = await api.get(
    "/products?populate=*&pagination[pageSize]=100",
  );

  return {
    props: {
      products: response.data,
    },
    revalidate: 60,
  };
}) satisfies GetStaticProps<{
  products: Blogs;
}>;

export default function ProductPage({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>주식회사 이에프디 | 제품소개</title>
      </Head>
      <SectionIntro
        imageSrc="/promotion/banner.png"
        customLinks={productMenu}
      />
      <Hero products={products} />
    </>
  );
}
