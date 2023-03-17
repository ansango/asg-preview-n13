import type { Metadata } from "next";

import {
  Container,
  MasonryWithLightBox,
  Section,
  type MasonryWithLightBoxProps,
} from "@/components";
import { getSerie, getSerieConnection } from "@/lib";
import { getJsonsFromPublicDir } from "@/lib/blur";

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
  return {
    title: data?.title,
  };
}

export default async function Page({ params }: { params: Params }) {
  const data = await getSerie({ params });
  const columns = data && (data.masonry?.columns as unknown as MasonryWithLightBoxProps["columns"]);
  const gap = data && (data.masonry?.gap as unknown as MasonryWithLightBoxProps["gap"]);
  const images = data && (data?.masonry?.images as unknown as MasonryWithLightBoxProps["images"]);
  const blurdata = await getJsonsFromPublicDir();

  return (
    <Section>
      <Container>
        {columns && gap && images && (
          <MasonryWithLightBox
            {...{
              columns,
              gap,
              images: images?.map((image) => {
                return {
                  ...image,
                  blurDataURL: blurdata.filter(
                    (blur) =>
                      blur.folder + "/" + blur.file ===
                      image.url?.split("/").reverse().slice(0, 2).reverse().join("/")
                  )[0]?.base64,
                };
              }),
            }}
          />
        )}
      </Container>
    </Section>
  );
}
