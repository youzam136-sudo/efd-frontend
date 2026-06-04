import Layout from "@/components/Layout/Layout";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/effect-fade";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>주식회사 이에프디</title>
        <meta
          name="description"
          content="이에프디(EFD)는 친환경 해양 모빌리티 솔루션과 스마트 제조 혁신을 선도하는 기업입니다. 선박용 배터리·수소 연료전지·추진 시스템 개발부터 스마트 공장 컨설팅까지 통합 솔루션을 제공합니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content="주식회사 이에프디" />
        <meta
          property="og:description"
          content="이에프디(EFD)는 친환경 해양 모빌리티 솔루션과 스마트 제조 혁신을 선도하는 기업입니다. 선박용 배터리·수소 연료전지·추진 시스템 개발부터 스마트 공장 컨설팅까지 통합 솔루션을 제공합니다."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://yoursite.com" />
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </Head>
      <Layout>
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=09f096fe9e212fa83833a6737d3fa727&autoload=false`}
          strategy="beforeInteractive"
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={router.asPath}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            data-v={atob("anBncm91cDYwMA==")}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}
