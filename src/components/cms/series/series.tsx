import type { FC } from "react";

import Link from "next/link";
import type { Template } from "tinacms";

import type { Serie } from ".tina/__generated__/types";

import { getBlurUrl } from "../../../lib";
import { Container } from "../../container";
import type { ImageProps } from "../../image";
import { Image } from "../../image";
import { Section } from "../../section";
import type { MasonrySerieProps } from "../masonry";
import { MasonrySerie } from "../masonry";

type Props = {
  data?: Serie[];
};

export const Series: FC<Props> = ({ data }) => {
  return (
    <Section className="flex-none">
      <Container className="!py-2 !sm:py-2 !md:py-6">
        <ul className="space-y-12">
          {data?.map(
            ({ id, title, description, sequence, gallerySerie, _sys: { filename } }, iBlock) => {
              console.log("gallerySerie", filename);
              return (
                <li key={id}>
                  <article className="group">
                    <MasonrySerie {...(gallerySerie as MasonrySerieProps)}>
                      {gallerySerie?.images?.map((image, iGallery) => (
                        <Image
                          key={iGallery}
                          {...(image as ImageProps)}
                          alt={image?.alt}
                          loading={iBlock < 2 && iGallery < 2 ? "eager" : "lazy"}
                          blurDataURL={getBlurUrl(image as ImageProps)}
                        />
                      ))}
                    </MasonrySerie>
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em]">
                          {title}
                        </h3>
                        <p className="text-sm">{description}</p>
                        <Link className="text-sm" href={`/serie/${filename}`}>
                          ver más
                        </Link>
                      </div>
                      <span className="text-xs"># {sequence}</span>
                    </div>
                  </article>
                </li>
              );
            }
          )}
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
      name: "title",
      label: "Title",
      type: "string",
    },
  ],
};
