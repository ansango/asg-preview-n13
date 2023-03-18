import type { ReactNode } from "react";

import { Container, Pagination, Section, Theme } from "@/components";
import { getSeries } from "@/lib";

type Params = {
  filename: string;
};

type SerieTina = {
  _sys: Params;
  publishedAt: string;
  title: string;
};

const getPagination = async ({ params }: { params: Params }) => {
  const series = (await getSeries()) as Array<SerieTina>;
  const index = series
    .sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1))
    .findIndex((serie) => serie?._sys.filename === params.filename);

  const prevSerie = series[index - 1] || null;
  const nextSerie = series[index + 1] || null;
  const prev =
    (prevSerie && { title: prevSerie.title, route: `/serie/${prevSerie._sys.filename}` }) || null;
  const next =
    (nextSerie && { title: nextSerie.title, route: `/serie/${nextSerie._sys.filename}` }) || null;
  return { prev, next };
};

export default async function SerieLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { filename: string };
}) {
  const pagination = await getPagination({ params });
  return (
    <Theme>
      <main>
        {children}
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
      </main>
    </Theme>
  );
}
