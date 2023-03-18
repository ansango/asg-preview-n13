import type { Metadata } from "next";

import { Blocks } from "@/components/cms";
import { getPage, getSeries } from "@/lib";

type Params = {
  filename: string;
};

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
