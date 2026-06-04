import SectionIntro from "@/components/Common/SectionIntro";
import Hero from "@/components/Patent/Hero";
import { Patents } from "@/types/payload-types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { companyMenu } from "@/components/menu";
import api from "@/lib/api";

export const getStaticProps = (async () => {
  const response: { data: Patents } = await api.get(
    "/patents?populate=*&pagination[pageSize]=100",
  );

  return {
    props: {
      patents: response.data,
    },
    revalidate: 60,
  };
}) satisfies GetStaticProps<{
  patents: Patents;
}>;

export default function PatentPage({
  patents,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>주식회사 이에프디 | 특허 / 인증서</title>
      </Head>
      <SectionIntro customLinks={companyMenu} />
      <Hero patents={patents} />
    </>
  );
}
