import type { Metadata } from 'next';

import { Container, Section } from '@/components';

import tinaClient from '../../../.tina/__generated__/client';

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

  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-sans">{data?.title}</h1>
      </Container>
    </Section>
  );
}
