import SectionIntro from "@/components/Common/SectionIntro";
import Hero from "@/components/GlobalIntro/Hero";
import Head from "next/head";
import { supportMenu } from "@/components/menu";

export default function GlobalNetworkServicePage() {
  return (
    <>
      <Head>
        <title>주식회사 이에프디 | 오시는 길</title>
      </Head>
      <SectionIntro imageSrc="/global-intro.jpg" 
      customLinks={supportMenu}/>
      <Hero />
    </>
  );
}
