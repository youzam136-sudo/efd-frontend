import About from "@/components/Home/About";
import Application from "@/components/Home/Application";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import News from "@/components/Home/News";
import Partner from "@/components/Home/Partner";
import { Notices } from "@/types/payload-types";
import api from "@/lib/api";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

export const getStaticProps = (async () => {
  const response: { data: Notices } = await api.get(
    "/notices?populate=*&pagination[pageSize]=6&sort=Date:desc",
  );

  return {
    props: { notices: response.data },
    revalidate: 60,
  };
}) satisfies GetStaticProps<{ notices: Notices }>;

export default function Home({
  notices,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Transport App</title>
      </Head>
      <Hero />
      <About />
      <Application />
      <News notices={notices} />
      <Partner />
      <Contact />
    </>
  );
}
