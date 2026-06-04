import Head from "next/head";
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { Notice, Notices } from "@/types/payload-types";
import Link from "next/link";
import { formatIsoDate } from "@/utils/formatDate";
import SectionIntro from "@/components/Common/SectionIntro";
import { promotionMenu } from "@/components/menu";
import api from "@/lib/api";

export const getStaticPaths = (async () => {
  const response: { data: Notices } = await api.get(
    "/notices?populate=*&pagination[pageSize]=100",
  );

  const paths = response.data.data.map((notice) => ({
    params: { id: notice.documentId },
  }));

  return { paths, fallback: "blocking" };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const id = context.params?.id as string;

  const response: {
    data: Notices;
  } = await api.get(`/notices?filters[documentId][$eq]=${id}&populate=*`);

  if (!response.data) {
    return { notFound: true };
  }

  return {
    props: { notice: response.data.data[0] },
    revalidate: 60,
  };
}) satisfies GetStaticProps<{ notice: Notice }>;

export default function NoticeDetailPage({
  notice,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{`주식회사 이에프디 | ${notice.Title}`}</title>
      </Head>
      <SectionIntro customLinks={promotionMenu} />
      <section className="mt-25 flex flex-col items-center md:mt-25">
        <div className="flex w-full flex-col items-center px-8.75">
          <div className="flex w-full max-w-195 flex-col">
            <div className="mx-auto mt-10 mb-7.5 flex w-full flex-col md:mt-17.5">
              <div className="flex flex-col gap-2.5">
                <div className="text-paragraph px-2.5 py-1.5 text-[11px] leading-[110%] font-medium uppercase">
                  {formatIsoDate(notice.Date)}
                  {notice.Author && (
                    <span className="ml-3">{notice.Author}</span>
                  )}
                </div>
                <h1 className="text-[30px] leading-[110%] font-bold md:text-[60px] md:leading-[110%]">
                  {notice.Title}
                </h1>
              </div>
            </div>

            {/* {hasFeaturedImage && typeof notice.featuredImage !== "string" && (
              <Image
                className="relative mt-25 h-78 w-full object-cover md:h-125"
                src={`${process.env.NEXT_PUBLIC_PAYLOAD_URL}${notice.featuredImage.url}`}
                width={1920}
                height={1080}
                alt={notice.featuredImage.alt || notice.title}
              />
            )} */}

            <div
              className="prose my-10 max-w-none"
              dangerouslySetInnerHTML={{ __html: notice.Content }}
            />

            <div className="mt-10 mb-20">
              <Link
                href="/notice"
                className="rounded-xl bg-[#213691] px-8 py-4 text-white"
              >
                ← 목록으로
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
