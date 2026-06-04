import SectionIntro from "@/components/Common/SectionIntro";
import Hero from "@/components/CompanyValue/Hero";
import Head from "next/head";
import { companyMenu } from "@/components/menu";

export default function CompanyValuePage() {
  return (
    <>
      <Head>
        <title>주식회사 이에프디 | 회사가치</title>
      </Head>
      <SectionIntro 
      customLinks={companyMenu}
      />
      <Hero />
    </>
  );
}
