import type { Metadata } from "next";

import {
  Container,
  MasonryWithLightBox,
  Section,
  type MasonryWithLightBoxProps,
} from "@/components";
import { getSerie, getSerieConnection } from "@/lib";

type Params = {
  filename: string;
};

export async function generateStaticParams() {
  const series = await getSerieConnection();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return series.map((serie) => ({
    params: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      filename: serie._sys.filename,
    },
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const data = await getSerie({ params });
  const url = `${process.env.NEXT_PUBLIC_WEB_URI}/serie/${params.filename}`;
  return {
    title: data?.title,
    description: "a description",
    openGraph: {
      title: data?.title,
      description: "a description",
      url,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_WEB_URI}/static/series/${data?.sequence}.jpg`,
          width: 400,
          height: 400,
          alt: data?.title,
        },
      ],

      tags: data && (data?.meta?.tags as unknown as string[]),
      publishedTime: (data && data?.publishedAt) || undefined,
      section: "series",
    },
    alternates: {
      canonical: url,
      languages: {
        es: url,
      },
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const data = await getSerie({ params });
  const columns = data && (data.masonry?.columns as unknown as MasonryWithLightBoxProps["columns"]);
  const gap = data && (data.masonry?.gap as unknown as MasonryWithLightBoxProps["gap"]);
  const images = data && (data?.masonry?.images as unknown as MasonryWithLightBoxProps["images"]);

  return (
    <Section>
      <Container>
        {columns && gap && images && (
          <MasonryWithLightBox
            {...{
              columns,
              gap,
              images,
            }}
          />
        )}
      </Container>
    </Section>
  );
}
