import type { Metadata } from 'next';

import { tinaClient } from '@/lib';

type Params = {
  filename: string;
};

async function getData({ params }: { params: Params }) {
  const args = { relativePath: `${params.filename}.mdx` };

  try {
    const { data, query, variables } = await tinaClient.queries.page(args);
    return { data, query, variables };
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const props = await getData({ params });
  if (!props) return {};
  const { data } = props;
  return {
    title: data.page.title,
  } as Metadata;
}

export default async function Page({ params }: { params: Params }) {
  const props = await getData({ params });
  if (!props) return null;

  return (
    <main>
      <h1 className="text-3xl font-sans">Hello world!</h1>
    </main>
  );
}
