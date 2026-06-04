import SectionIntro from "@/components/Common/SectionIntro";
import Hero from "@/components/News/Hero";
import Head from "next/head";

export default function GlobalNetworkServicePage() {
  return (
    <>
      <Head>
        <title>Transport App | News</title>
      </Head>
      <SectionIntro imageSrc="/promotion/banner.png" />
      <Hero />
    </>
  );
}
