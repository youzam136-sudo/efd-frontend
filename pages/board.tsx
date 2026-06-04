import SectionIntro from "@/components/Common/SectionIntro";
import Hero from "@/components/Board/Hero";
import Head from "next/head";
import { Documents } from "@/types/payload-types";
import axios from "axios";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { promotionMenu } from "@/components/menu";
import api from "@/lib/api";

export const getStaticProps = (async () => {
  const response: { data: Documents } = await api.get(
    "/docs?populate=*&pagination[pageSize]=100",
  );

  return {
    props: {
      data: response.data,
    },
    revalidate: 60,
  };
}) satisfies GetStaticProps<{
  data: Documents;
}>;

export default function BoardPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>주식회사 이에프디 | 브로슈어</title>
      </Head>
      <SectionIntro
        imageSrc="/promotion/banner.png"
        customLinks={promotionMenu}
      />
      <Hero data={data} />
    </>
  );
}
