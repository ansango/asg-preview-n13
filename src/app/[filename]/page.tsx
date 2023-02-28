import type { Metadata } from "next";

import { Blocks } from "@/components/cms";

import tinaClient from "../../../.tina/__generated__/client";

type Params = {
  filename: string;
};

async function getPage({ params }: { params: Params }) {
  const args = { relativePath: `${params.filename}.mdx` };

  try {
    const {
      data: { page },
    } = await tinaClient.queries.page(args);

    return page;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const data = await getPage({ params });
  return {
    title: data?.title,
  };
}

export default async function Page({ params }: { params: Params }) {
  const data = await getPage({ params });

  return <Blocks blocks={data?.blocks} />;
}
