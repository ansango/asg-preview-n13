import type { Metadata } from 'next';

import { Image, type ImageProps, Masonry, type MasonryProps } from '@/components';

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
  const columns = data && (data.masonry?.columns as unknown as MasonryProps['columns']);
  const gap = data && (data.masonry?.gap as unknown as MasonryProps['gap']);
  const images = data && (data?.masonry?.images as unknown as ImageProps[]);
  return (
    <main>
      {columns && gap && (
        <Masonry {...{ columns, gap }}>
          {images?.map((image, i) => (
            <Image {...image} key={`${i}-${image.alt}`} alt={image.alt} />
          ))}
        </Masonry>
      )}
    </main>
  );
}
