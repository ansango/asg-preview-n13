import type { Metadata } from 'next';

import tinaClient from '../../../../.tina/__generated__/client';

type Params = {
  filename: string;
};

async function getSerie({ params }: { params: Params }) {
  const args = { relativePath: `${params.filename}.mdx` };

  try {
    const {
      data: { serie },
    } = await tinaClient.queries.serie(args);
    return serie;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const data = await getSerie({ params });

  return {
    title: data?.title,
  };
}

export default async function Page({ params }: { params: Params }) {
  const data = await getSerie({ params });

  return (
    <main className="prose mx-auto">
      <h1>{data?.title}</h1>
    </main>
  );
}
