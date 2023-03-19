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

  return pages.map((serie) => ({
    params: {
      filename: serie._sys.filename,
    },
  }));
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
        params.filename === "home" ? "" : `/${params.filename}`
      }`,
    },
    alternates: {
      canonical: `https://anibalsantosgomez.com${
        params.filename === "home" ? "" : `/${params.filename}`
      }`,
      languages: {
        es: `https://anibalsantosgomez.com${
          params.filename === "home" ? "" : `/${params.filename}`
        }`,
      },
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const _params = !params.filename ? { filename: "home" } : params;
  const series = params.filename === "series" ? await getSeries() : null;
  const data = await getPage({ params: _params });

  return (
    <Blocks
      blocks={data?.blocks}
      data={{
        series,
      }}
    />
  );
}
