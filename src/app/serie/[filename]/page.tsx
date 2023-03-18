import type { Metadata } from "next";
import Balancer from "react-wrap-balancer";

import {
  Container,
  MasonryWithLightBox,
  Section,
  type MasonryWithLightBoxProps,
} from "@/components";
import { formatDate, getSerie, getSerieConnection } from "@/lib";

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
  const tags = data?.meta?.tags as unknown as string[];
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
  const columns = data && (data.masonry?.columns as unknown as MasonryWithLightBoxProps["columns"]);
  const gap = data && (data.masonry?.gap as unknown as MasonryWithLightBoxProps["gap"]);
  const images = data && (data?.masonry?.images as unknown as MasonryWithLightBoxProps["images"]);

  return (
    <>
      <Section className="flex-none py-20">
        <Container className="space-y-5">
          <h1>
            <Balancer>{data?.title}</Balancer>
          </h1>

          <time className="font-serif text-xs italic">
            publicado el {formatDate(data?.publishedAt as string)}
          </time>

          <article className="space-y-5 prose prose-lg lg:prose-xl xl:prose-2xl ">
            <p>
              <Balancer>{data?.summary}</Balancer>
            </p>
            <p>
              <span className="block">
                <Balancer>
                  {data?.meta?.camera} - {data?.meta?.film}
                </Balancer>
              </span>
              <span>
                <Balancer>
                  {formatDate(data?.meta?.shot?.start as string)} /{" "}
                  {formatDate(data?.meta?.shot?.end as string)}
                </Balancer>
              </span>
            </p>

            <p className="flex flex-wrap pb-5">
              {data?.meta?.tags?.map((tag, i) => (
                <span className="text-sm mr-1.5" key={`${i}-${tag}`}>
                  #{tag}
                </span>
              ))}
            </p>
          </article>
        </Container>
      </Section>
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
    </>
  );
}
