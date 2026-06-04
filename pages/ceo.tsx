import Hero from "@/components/CEO/Hero";
import SectionIntro from "@/components/Common/SectionIntro";
import Head from "next/head";
import { companyMenu } from "@/components/menu";

export default function CEOPage() {
  return (
    <>
      <Head>
        <title>주식회사 이에프디 | CEO 인사말</title>
      </Head>
      <SectionIntro customLinks={companyMenu} />
      <Hero />
    </>
  );
}
