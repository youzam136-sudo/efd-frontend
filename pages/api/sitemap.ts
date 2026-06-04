import type { NextApiRequest, NextApiResponse } from "next";

type Doc = { slug?: string; id?: string; updatedAt?: string; createdAt?: string };
type PayloadResponse = { docs?: Doc[] };

function xmlEscape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function urlTag(
  loc: string,
  opts?: { lastmod?: string; priority?: string; changefreq?: string },
) {
  const lm = opts?.lastmod ? `<lastmod>${xmlEscape(opts.lastmod)}</lastmod>` : "";
  const pri = opts?.priority ? `<priority>${opts.priority}</priority>` : "";
  const cf = opts?.changefreq ? `<changefreq>${opts.changefreq}</changefreq>` : "";
  return `<url><loc>${xmlEscape(loc)}</loc>${lm}${cf}${pri}</url>`;
}

async function fetchDocs(url: string): Promise<Doc[]> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(`${url}&depth=0`, { signal: controller.signal });
    clearTimeout(timeout);
    const data = (await res.json()) as PayloadResponse;
    return data.docs ?? [];
  } catch {
    return [];
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const payloadUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL;
  const today = new Date().toISOString().slice(0, 10);

  const staticPages = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/company-intro", priority: "0.8", changefreq: "monthly" },
    { path: "/company-value", priority: "0.8", changefreq: "monthly" },
    { path: "/ceo", priority: "0.7", changefreq: "monthly" },
    { path: "/marine", priority: "0.8", changefreq: "monthly" },
    { path: "/microgrid", priority: "0.8", changefreq: "monthly" },
    { path: "/global-network-service", priority: "0.7", changefreq: "monthly" },
    { path: "/product", priority: "0.8", changefreq: "weekly" },
    { path: "/blogs", priority: "0.7", changefreq: "weekly" },
    { path: "/patent", priority: "0.7", changefreq: "monthly" },
    { path: "/notice", priority: "0.6", changefreq: "weekly" },
    { path: "/news", priority: "0.6", changefreq: "weekly" },
    { path: "/board", priority: "0.6", changefreq: "monthly" },
    { path: "/faqs", priority: "0.6", changefreq: "monthly" },
    { path: "/contact", priority: "0.7", changefreq: "monthly" },
  ];

  let blogUrls: string[] = [];
  let patentUrls: string[] = [];
  let productUrls: string[] = [];
  let noticeUrls: string[] = [];

  if (payloadUrl) {
    const [blogs, products, notices] = await Promise.all([
      fetchDocs(`${payloadUrl}/api/blogs?limit=0`),
      fetchDocs(`${payloadUrl}/api/products?limit=0`),
      fetchDocs(`${payloadUrl}/api/notices?limit=0`),
    ]);

    blogUrls = blogs
      .filter((b) => b.slug)
      .map((b) =>
        urlTag(new URL(`/blogs/${b.slug}`, siteUrl).toString(), {
          lastmod: b.updatedAt ?? b.createdAt,
          priority: "0.6",
          changefreq: "monthly",
        }),
      );

    patentUrls = blogs
      .filter((b) => b.slug)
      .map((b) =>
        urlTag(new URL(`/patent/${b.slug}`, siteUrl).toString(), {
          lastmod: b.updatedAt ?? b.createdAt,
          priority: "0.5",
          changefreq: "monthly",
        }),
      );

    productUrls = products
      .filter((p) => p.slug)
      .map((p) =>
        urlTag(new URL(`/product/${p.slug}`, siteUrl).toString(), {
          lastmod: p.updatedAt ?? p.createdAt,
          priority: "0.7",
          changefreq: "monthly",
        }),
      );

    noticeUrls = notices
      .filter((n) => n.id)
      .map((n) =>
        urlTag(new URL(`/notice/${n.id}`, siteUrl).toString(), {
          lastmod: n.updatedAt ?? n.createdAt,
          priority: "0.5",
          changefreq: "monthly",
        }),
      );
  }

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...staticPages.map((p) =>
      urlTag(new URL(p.path, siteUrl).toString(), {
        lastmod: today,
        priority: p.priority,
        changefreq: p.changefreq,
      }),
    ),
    ...productUrls,
    ...blogUrls,
    ...patentUrls,
    ...noticeUrls,
    "</urlset>",
  ].join("\n");

  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600, s-maxage=3600");
  res.status(200).send(body);
}
