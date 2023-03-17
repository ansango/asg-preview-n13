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
  return (
    series?.map((serie) => ({
      params: {
        filename: serie?._sys.filename,
      },
    })) || []
  );
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const data = await getSerie({ params });
  return {
    title: data?.title,
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
        {columns && gap && images && <MasonryWithLightBox {...{ columns, gap, images }} />}
      </Container>
    </Section>
  );
}
