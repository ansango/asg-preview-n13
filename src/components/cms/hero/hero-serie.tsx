import type { FC } from "react";

import Balancer from "react-wrap-balancer";

import { formatDate } from "../../../lib";
import { Container } from "../../container";
import { Section } from "../../section";
type Meta = {
  camera: string;
  film: string;
  shot: {
    start: string;
    end: string;
  };
  tags: string[];
};

export type HeroSerieProps = {
  title: string;
  summary: string;
  publishedAt: string;
  meta: Meta;
};

export const HeroSerie: FC<HeroSerieProps> = ({ title, meta, publishedAt, summary }) => {
  return (
    <Section className="flex-none py-20">
      <Container className="space-y-5">
        <h1>
          <Balancer>{title}</Balancer>
        </h1>

        <time className="font-serif text-xs italic">publicado el {formatDate(publishedAt)}</time>

        <article className="space-y-5 prose prose-lg lg:prose-xl xl:prose-2xl ">
          <p>
            <Balancer>{summary}</Balancer>
          </p>
          <p>
            <span className="block">
              <Balancer>
                {meta?.camera} - {meta?.film}
              </Balancer>
            </span>
            <span>
              <Balancer>
                {formatDate(meta?.shot?.start as string)} / {formatDate(meta?.shot?.end as string)}
              </Balancer>
            </span>
          </p>

          <p className="flex flex-wrap pb-5">
            {meta?.tags?.map((tag, i) => (
              <span className="text-sm mr-1.5" key={`${i}-${tag}`}>
                #{tag}
              </span>
            ))}
          </p>
        </article>
      </Container>
    </Section>
  );
};
