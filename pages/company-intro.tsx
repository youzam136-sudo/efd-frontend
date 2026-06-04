import SectionIntro from "@/components/Common/SectionIntro";
import Hero from "@/components/CompanyIntro/Hero";
import Application from "@/components/Home/Application";
import Head from "next/head";
import { companyMenu } from "@/components/menu";

export default function CompanyIntroPage() {
  return (
    <>
      <Head>
        <title>주식회사 이에프디 | 회사개요</title>
      </Head>
      <SectionIntro
      customLinks={
        companyMenu
      }
      />
      <Hero />
      <Application />
    </>
  );
}
