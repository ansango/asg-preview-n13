"use client";

import type { FC } from "react";

import Link from "next/link";
import useSWR from "swr";
import type { Template } from "tinacms";

import type { Serie } from ".tina/__generated__/types";

import { fetcher, kebabCase } from "../../../lib";
import { Container } from "../../container";
import type { ImageProps } from "../../image";
import { Image } from "../../image";
import { Section } from "../../section";
import type { MasonrySerieProps } from "../masonry";
import { MasonrySerie } from "../masonry";

export const Series: FC = () => {
  const { data } = useSWR<Serie[]>("/api/series", fetcher);

  return (
    <Section className="flex-none">
      <Container className="!py-2 !sm:py-2 !md:py-6">
        <ul className="space-y-12">
          {data?.map(({ id, title, description, sequence, gallerySerie }) => {
            return (
              <li key={id}>
                <article className="group">
                  <MasonrySerie {...(gallerySerie as MasonrySerieProps)}>
                    {gallerySerie?.images?.map((image, i) => (
                      <Image
                        key={i}
                        {...(image as ImageProps)}
                        alt={image?.alt}
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                    ))}
                  </MasonrySerie>
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em]">
                        {title}
                      </h3>
                      <p className="text-sm">{description}</p>
                      <Link
                        className="text-sm"
                        href={`/serie/${kebabCase(`${sequence}-${title}`)}`}
                      >
                        ver más
                      </Link>
                    </div>
                    <span className="text-xs"># {sequence}</span>
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
      name: "title",
      label: "Title",
      type: "string",
    },
  ],
};
