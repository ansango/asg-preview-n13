import type { FC } from "react";

import Link from "next/link";
import Balancer from "react-wrap-balancer";
import type { Template } from "tinacms";

import type { Serie } from ".tina/__generated__/types";

import { getBlurUrl, formatDate } from "../../../lib";
import { Container } from "../../container";
import type { ImageProps } from "../../image";
import { Image } from "../../image";
import type { MasonryProps } from "../../masonry";
import { Masonry } from "../../masonry";
import { Section } from "../../section";

type Props = {
  data?: Array<Serie>;
};

export const Series: FC<Props> = ({ data }) => {
  return (
    <Section className="flex-none">
      <Container className="!py-2 !sm:py-2 !md:py-6">
        <ul className="space-y-12">
          {data?.map(({ id, title, meta, thumbnails, _sys: { filename } }, iBlock) => {
            const mergedThumbs = thumbnails && [
              thumbnails.firstThumbnail,
              thumbnails.secondThumbnail,
              thumbnails.thirdThumbnail,
            ];
            return (
              <li key={id}>
                <article className="group">
                  {thumbnails && (
                    <Masonry
                      {...({
                        columns: { default: "3", sm: "3", md: "3", lg: "3", xl: "3" },
                        gap: { default: "1", sm: "2", md: "3", lg: "3", xl: "3" },
                      } as MasonryProps)}
                    >
                      {mergedThumbs?.map((image, iThumbnail) => (
                        <Image
                          key={iThumbnail}
                          {...(image as ImageProps)}
                          aspectRatio="4/3"
                          alt={image?.alt || `thumbnail-${iThumbnail}`}
                          loading={iBlock < 2 && iThumbnail < 2 ? "eager" : "lazy"}
                          blurDataURL={getBlurUrl(image as ImageProps)}
                        />
                      ))}
                    </Masonry>
                  )}
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em]">
                        <Balancer>{title}</Balancer>
                      </h3>
                      <p className="text-sm">{meta?.description}</p>
                      <Link className="text-sm" href={`/serie/${filename}`}>
                        ver más
                      </Link>
                    </div>
                    <span className="text-xs"># {formatDate(meta?.publishedAt as string)}</span>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
};

export const allSeriesTemplate: Template = {
  label: "All series",
  name: "allSeries",
  fields: [
    {
      label: "Visible",
      name: "visible",
      type: "boolean",
    },
  ],
};
