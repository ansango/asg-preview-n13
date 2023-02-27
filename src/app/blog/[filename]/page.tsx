import { TinaMarkdown, tinaClient } from '@/lib';

async function getData({ params }: { params: Params }) {
  const args = { relativePath: `${params.filename}.md` };

  try {
    const { data, query, variables } = await tinaClient.queries.post(args);
    return { data, query, variables };
  } catch (error) {
    console.error(error);
    return null;
  }
}

type Params = {
  filename: string;
};

export default async function Page({ params }: { params: Params }) {
  const props = await getData({ params });
  if (!props) return null;
  const { data } = props;
  return (
    <main className="prose mx-auto">
      <h1>{data.post.title}</h1>

      <TinaMarkdown content={data.post.body} />
    </main>
  );
}
