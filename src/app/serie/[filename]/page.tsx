import type { Metadata } from "next";

import { Container, MasonryWithLightBox, Section } from "@/components";
import type { MasonryWithLightBoxProps } from "@/components";
import type { HeroSerieProps } from "@/components/cms";
import { HeroSerie } from "@/components/cms";
import { getSerie, getSerieConnection } from "@/lib";

type Params = {
  filename: string;
};

type SerieTina = {
  _sys: Params;
};

export async function generateStaticParams() {
  const series = (await getSerieConnection()) as Array<SerieTina>;

  return series.map((serie) => ({
    params: {
      filename: serie._sys.filename,
    },
  }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const data = await getSerie({ params });
  const url = `${process.env.NEXT_PUBLIC_WEB_URI}/serie/${params.filename}`;
  const tags = data?.meta?.tags as unknown as Array<string>;
  const firstTag = tags[0]?.charAt(0).toUpperCase() + tags[0]?.slice(1);
  const secondTag = tags[1]?.charAt(0).toUpperCase() + tags[1]?.slice(1);
  const thirdTag = tags[2]?.charAt(0).toUpperCase() + tags[2]?.slice(1);
  return {
    title: `${data?.title} | Serie | ${firstTag} ${secondTag} ${thirdTag}`,
    description: data?.summary,
    openGraph: {
      title: data?.title,
      description: data?.summary,
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

  return (
    <>
      <HeroSerie
        {...{
          meta: data?.meta as unknown as HeroSerieProps["meta"],
          publishedAt: data?.publishedAt as unknown as HeroSerieProps["publishedAt"],
          summary: data?.summary as unknown as HeroSerieProps["summary"],
          title: data?.title as unknown as HeroSerieProps["title"],
        }}
      />
      {data?.blocks &&
        data.blocks.map((block, i) => {
          switch (block?.__typename) {
            case "SerieBlocksMasonryLightBox": {
              if (!block.images) return null;
              return (
                <Section key={i}>
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
            default: {
              return null;
            }
          }
        })}
    </>
  );
}
