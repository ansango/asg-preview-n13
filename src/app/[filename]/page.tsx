import type { Metadata } from "next";

import { Blocks } from "@/components/cms";
import { getPage, getPageConnection, getSeries } from "@/lib";

type Params = {
  filename: string;
};

type PageTina = {
  _sys: Params;
};

export async function generateStaticParams() {
  const pages = (await getPageConnection()) as Array<PageTina>;
  const map = pages.map((page) => ({
    params: {
      filename: page._sys.filename,
    },
  }));
  return map;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const data = await getPage({ params });

  return {
    title: data?.title,
    description: "a description",
    openGraph: {
      title: data?.title,
      description: "a description",
      url: `https://anibalsantosgomez.com${
        params.filename === "index" ? "" : `/${params.filename}`
      }`,
    },
    alternates: {
      canonical: `https://anibalsantosgomez.com${
        params.filename === "index" ? "" : `/${params.filename}`
      }`,
      languages: {
        es: `https://anibalsantosgomez.com${
          params.filename === "index" ? "" : `/${params.filename}`
        }`,
      },
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const series = params.filename === "series" ? await getSeries() : null;
  const data = await getPage({ params });

  return (
    <Blocks
      blocks={data?.blocks}
      data={{
        series,
      }}
    />
  );
}
