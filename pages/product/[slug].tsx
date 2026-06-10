import Head from "next/head";
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { formatIsoDate } from "@/utils/formatDate";
import SectionIntro from "@/components/Common/SectionIntro";
import { ProductDetail } from "@/components/menu";
import { Blog, Blogs } from "@/types/payload-types";
import api from "@/lib/api";

export const getStaticPaths = (async () => {
  const response: { data: Blogs } = await api.get(
    "/products?pagination[pageSize]=100",
  );

  const paths = response.data.data.map((product) => ({
    params: {
      slug: product.Slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const slug = context.params?.slug as string;

  const response: {
    data: Blogs;
  } = await api.get(`/products?filters[Slug][$eq]=${slug}&populate=*`);

  const product = response.data.data[0];

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product },
    revalidate: 60,
  };
}) satisfies GetStaticProps<{
  product: Blog;
}>;

function renderBlocks(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return "";

  return blocks
    .map((block) => {
      if (block.type === "paragraph") {
        const text = block.content?.map((c: any) => c.text || "").join("") || "";
        return `<p>${text}</p>`;
      }
      if (block.type === "heading") {
        const text = block.content?.map((c: any) => c.text || "").join("") || "";
        return `<h${block.props?.level || 2}>${text}</h${block.props?.level || 2}>`;
      }
      if (block.type === "image") {
        return `<img src="${block.props?.url}" alt="${block.props?.name || ""}" style="max-width:100%" />`;
      }
      if (block.type === "table") {
        const rows = block.content?.rows || [];
        const tableRows = rows.map((row: any, i: number) => {
          const cells = row.cells.map((cell: any) => {
            const text = cell.content?.map((c: any) => c.text || "").join("") || "";
            return i === 0 ? `<th style="border:1px solid #ddd;padding:8px;background:#f5f5f5">${text}</th>` : `<td style="border:1px solid #ddd;padding:8px">${text}</td>`;
          }).join("");
          return `<tr>${cells}</tr>`;
        }).join("");
        return `<table style="border-collapse:collapse;width:100%">${tableRows}</table>`;
      }
      return "";
    })
    .join("");
}

export default function ProductDetailPage({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  let contentHtml = "";
  try {
    const blocks = JSON.parse(product.Content);
    contentHtml = renderBlocks(blocks);
  } catch {
    contentHtml = product.Content || "";
  }

  return (
    <>
      <Head>
        <title>{`주식회사 이에프디 | ${product.Title}`}</title>
      </Head>
      <SectionIntro
        imageSrc="/promotion/banner.png"
        customLinks={ProductDetail}
      />
      <section className="mt-25 flex flex-col items-center md:mt-25">
        <div className="flex w-full flex-col items-center px-8.75">
          <div className="flex w-full max-w-250 flex-col">
            <div className="mx-auto mt-10 mb-7.5 flex w-full flex-col md:mt-17.5">
              <div className="flex flex-col">
                <div className="mb-2.5 flex">
                  <div className="text-paragraph px-2.5 py-1.5 text-[11px] leading-[110%] font-medium uppercase">
                    {formatIsoDate(product.createdAt)}
                  </div>
                </div>
                <h1 className="text-[30px] leading-[110%] font-bold md:text-[60px] md:leading-[110%]">
                  {product.Title}
                </h1>
              </div>
            </div>
            <div
              className="prose my-25 max-w-none"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        </div>
      </section>
    </>
  );
}