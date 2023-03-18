import type { Metadata } from "next";

import type { Serie } from ".tina/__generated__/types";
import {
  Container,
  MasonryWithLightBox,
  Section,
  Pagination,
  type MasonryWithLightBoxProps,
} from "@/components";
import { formatDate, getSerie, getSerieConnection, getSeries } from "@/lib";

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

const getPagination = async ({ params }: { params: Params }) => {
  const series = (await getSeries()) as Serie[];
  const index = series
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    ?.sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1))
    .findIndex((serie) => serie?._sys.filename === params.filename);

  const prevSerie = series[index - 1] || null;
  const nextSerie = series[index + 1] || null;
  const prev =
    (prevSerie && { title: prevSerie.title, route: `/serie/${prevSerie._sys.filename}` }) || null;
  const next =
    (nextSerie && { title: nextSerie.title, route: `/serie/${nextSerie._sys.filename}` }) || null;
  return { prev, next };
};

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
  const pagination = await getPagination({ params });
  const columns = data && (data.masonry?.columns as unknown as MasonryWithLightBoxProps["columns"]);
  const gap = data && (data.masonry?.gap as unknown as MasonryWithLightBoxProps["gap"]);
  const images = data && (data?.masonry?.images as unknown as MasonryWithLightBoxProps["images"]);

  return (
    <>
      <Section className="flex-none py-20">
        <Container className="space-y-5">
          <h1>{data?.title}</h1>
          <time className="text-xs font-serif italic">
            publicado el {formatDate(data?.publishedAt as string)}
          </time>

          <article className="space-y-5 prose prose-lg lg:prose-xl xl:prose-2xl">
            <p>{data?.summary}</p>
            <p>
              <span className="block">
                {data?.meta?.camera} - {data?.meta?.film}
              </span>
              <span>
                {formatDate(data?.meta?.shot?.start as string)} /{" "}
                {formatDate(data?.meta?.shot?.end as string)}
              </span>
            </p>

            <p className="space-x-2 pb-5">
              {data?.meta?.tags?.map((tag, i) => (
                <span className="text-sm" key={`${i}-${tag}`}>
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
      <Section className="flex-none py-20">
        <Container className="grid grid-cols-2 gap-5 py-20">
          <Pagination
            next={{
              title: pagination.next?.title,
              route: pagination.next?.route,
            }}
            prev={{
              title: pagination.prev?.title,
              route: pagination.prev?.route,
            }}
          />
        </Container>
      </Section>
    </>
  );
}
