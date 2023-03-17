import type { Metadata } from "next";

import { Blocks } from "@/components/cms";
import { getPage, getPageConnection, getSeries } from "@/lib";

type Params = {
  filename: string;
};

export async function generateStaticParams() {
  const pages = await getPageConnection();
  return pages?.map((page) => ({
    params: {
      filename: page?._sys.filename,
    },
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const data = await getPage({ params });
  return {
    title: data?.title,
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
