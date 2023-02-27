import type { Metadata } from 'next';

import { TinaMarkdown, tinaClient } from '@/lib';

type Params = {
  filename: string;
};

async function getPost({ params }: { params: Params }) {
  const args = { relativePath: `${params.filename}.md` };

  try {
    const {
      data: { post },
    } = await tinaClient.queries.post(args);
    return post;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const data = await getPost({ params });

  return {
    title: data?.title,
  };
}

export default async function Page({ params }: { params: Params }) {
  const data = await getPost({ params });

  return (
    <main className="prose mx-auto">
      <h1>{data?.title}</h1>
      <TinaMarkdown content={data?.body} />
    </main>
  );
}
