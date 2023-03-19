import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { TinaMarkdownContent } from "tinacms/dist/rich-text";

import type { SerieBlocks } from ".tina/__generated__/types";
import { Container, MasonryWithLightBox, Section } from "@/components";
import type { MasonryWithLightBoxProps } from "@/components";
import type { BodySimpleProps, HeroSerieProps } from "@/components/cms";
import { BodySimple, HeroSerie, PaginationBase } from "@/components/cms";
import { getSerie, getSerieConnection, getPagination } from "@/lib";

type Params = {
  filename: string;
};

type SerieTina = {
  _sys: Params;
  publishedAt: string;
  title: string;
};

export async function generateStaticParams() {
  const series = (await getSerieConnection()) as unknown as Array<SerieTina>;

  return series.map((serie) => ({
    params: {
      filename: serie._sys.filename,
    },
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const data = await getSerie({ params });
  const url = `${process.env.NEXT_PUBLIC_WEB_URI}/serie/${params.filename}`;
  const tags = (data?.meta?.tags as unknown as Array<string>) || ["serie"];
  return {
    title: `${data?.title} | Serie `,
    description: data?.meta?.summary,
    openGraph: {
      title: data?.title,
      description: data?.meta?.summary || "",
      url,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_WEB_URI}/static/series/${data?.sequence}.jpg`,
          width: 400,
          height: 400,
          alt: data?.title,
        },
      ],
      tags,
      publishedTime: (data && data?.meta?.publishedAt) || undefined,
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
  const blocks = data?.blocks as Array<SerieBlocks>;
  if (!data || !data.visible || !blocks) notFound();
  const pagination = await getPagination({ params });

  return (
    <>
      {blocks?.map((block, iBlock) => {
        const key = `${block?.__typename}-${iBlock}`;
        switch (block?.__typename) {
          case "SerieBlocksMasonryFS": {
            if (!block.images) return null;
            return (
              <Section key={key}>
                <Container>
                  <MasonryWithLightBox
                    {...{
                      columns: block.columns as unknown as MasonryWithLightBoxProps["columns"],
                      gap: block.gap as unknown as MasonryWithLightBoxProps["gap"],
                      images: block.images as unknown as MasonryWithLightBoxProps["images"],
                    }}
                  />
                </Container>
              </Section>
            );
          }
          case "SerieBlocksBodySimple": {
            const content = block.content as TinaMarkdownContent;
            if (!block.visible || content.children.length === 0) return null;
            return <BodySimple key={key} {...(block as BodySimpleProps)} />;
          }
          case "SerieBlocksHeroSerie": {
            if (!block.visible) return null;
            return (
              <HeroSerie
                key={key}
                {...{
                  meta: (data?.meta as unknown as HeroSerieProps["meta"]) || {},
                  title: (data?.title as unknown as HeroSerieProps["title"]) || "",
                }}
              />
            );
          }
          case "SerieBlocksPagination": {
            if (!block.visible || !pagination) return null;
            return (
              <PaginationBase
                next={{
                  title: pagination.next?.title,
                  route: pagination.next?.route,
                }}
                prev={{
                  title: pagination.prev?.title,
                  route: pagination.prev?.route,
                }}
              />
            );
          }
          default: {
            return <>Not found</>;
          }
        }
      })}
    </>
  );
}
